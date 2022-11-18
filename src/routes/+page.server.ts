import type { FetchLike } from '@prismicio/client';
import { createClient } from '$lib/prismicio';
import * as prismicH from '@prismicio/helpers';
import type { Event, EventResponse, About, AboutResponse } from '$lib/types';

// weird ts bug @todo

function check(about: AboutResponse) {
	if (
		Object.values(about).includes(null) ||
		Object.values(about).includes('') ||
		Object.values(about.img).includes(null) ||
		Object.values(about.img).includes('')
	) {
		return new Error('One field in the about section is null or empty!');
	}
}

export async function load({ fetch, request }: { fetch: FetchLike; request: Request }) {
	const client = createClient({ fetch, request });

	// get events
	const eventsResponse = await client.getAllByType('events');
	let events = null;

	if (eventsResponse) {
		events = eventsResponse.map((event): EventResponse => {
			return {
				title: prismicH.asText(event.data.title),
				subtitle: prismicH.asText(event.data.subtitle),
				start_date: prismicH.asDate(event.data.start_date),
				end_date: prismicH.asDate(event.data.end_date),
				opening_times:
					event.data.opening_times.map(
						(opening_time: { text: string }): string => opening_time.text
					) ?? null,
				img: {
					src: prismicH.asImageSrc(event.data.image),
					alt: event.data.image.alt ?? null,
					mobile: prismicH.asImageSrc(event.data.image.Mobile),
					tablet: prismicH.asImageSrc(event.data.image.Tablet),
					desktop: prismicH.asImageSrc(event.data.image.Desktop)
				}
			};
		});

		events.forEach((event) => {
			if (
				Object.values(event).includes(null) ||
				Object.values(event).includes('') ||
				Object.values(event.opening_times).includes(null) ||
				Object.values(event.opening_times).includes('') ||
				Object.values(event.img).includes(null) ||
				Object.values(event.img).includes('') ||
				event.start_date! > event.end_date!
			) {
				return new Error(
					`One field in an event is null or empty or the start date is later than the end date of the event! The event: ${event}`
				);
			}
		});

		// sort the events by start date (earliest start date first)
		events.sort((a, b) => a.start_date!.getTime() - b.start_date!.getTime());
	}

	// get about section
	const aboutResponse = await client.getAllByType('about');
	let about: AboutResponse | null = null;

	if (aboutResponse) {
		if (aboutResponse.length > 0) {
			about = {
				title: prismicH.asText(aboutResponse[0].data.title),
				text: prismicH.asText(aboutResponse[0].data.text),
				img: {
					src: prismicH.asImageSrc(aboutResponse[0].data.image),
					alt: aboutResponse[0].data.image.alt ?? null,
					mobile: prismicH.asImageSrc(aboutResponse[0].data.image.Mobile),
					tablet: prismicH.asImageSrc(aboutResponse[0].data.image.Tablet),
					desktop: prismicH.asImageSrc(aboutResponse[0].data.image.Desktop)
				}
			};

			check(about);
		}
	}

	return {
		events: <Event[]>events,
		about: <About>about
	};
}
