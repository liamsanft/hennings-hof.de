<script lang="ts">
	import type { Event } from '$lib/types';
	import { MarginContainer } from '$lib/components';
	import { viewport } from '$lib/actions';
	import { onMount } from 'svelte';

	export let events: Event[];
	$: displayedEvent = events[0];

	let shownFirst = true;
	let shownSecond = true;

	onMount(() => {
		if (
			'IntersectionObserver' in window &&
			'IntersectionObserverEntry' in window &&
			'intersectionRatio' in window.IntersectionObserverEntry.prototype
		) {
			shownFirst = false;
			shownSecond = true;
		}
	});
</script>

<section id="veranstaltungen">
	<MarginContainer>
		<div
			id="first-container"
			use:viewport
			on:enterViewport={() => (shownFirst = true)}
			on:exitViewport={() => (shownFirst = false)}
			class:shownFirst
		>
			<div id="heading-container">
				<h2 id="heading" class="serif">Veranstaltungen</h2>
				<span id="line" />
			</div>
			<div id="displayedevent-container">
				<div id="displayedevent-information-container">
					<p id="displayedevent-date" class="sans-serif">
						{displayedEvent.start_date.toLocaleDateString('de-DE')} - {displayedEvent.end_date.toLocaleDateString(
							'de-DE'
						)}
					</p>
					<h3 id="displayedevent-title" class="serif">{displayedEvent.title}</h3>
					<p id="displayedevent-subtitle" class="sans-serif">
						{displayedEvent.subtitle}
					</p>
					<div id="displayedevent-openingtimes-container">
						<h4 id="displayedevent-openingtimes-heading" class="sans-serif">Öffnungszeiten</h4>
						{#each displayedEvent.opening_times as opening_time}
							<p class="displayedevent-openingtime sans-serif">{opening_time}</p>
						{/each}
					</div>
				</div>
				<img
					src={displayedEvent.img.src}
					srcset={`${displayedEvent.img.mobile} 300w, ${displayedEvent.img.tablet} 600w, ${displayedEvent.img.desktop} 1200w`}
					sizes="100%"
					alt={displayedEvent.img.alt}
					id="displayedevent-img"
				/>
			</div>
		</div>
		<div
			id="second-container"
			use:viewport
			on:enterViewport={() => (shownSecond = true)}
			on:exitViewport={() => (shownSecond = false)}
			class:shownSecond
		>
			<h3 id="more-events-heading" class="serif">Weitere Veranstaltungen:</h3>
			<div id="more-events-container">
				{#each events as event, i}
					<button class="image-button" on:click={() => (displayedEvent = events[i])}>
						<img
							src={event.img.src}
							srcset={`${event.img.mobile} 300w, ${event.img.tablet} 600w, ${event.img.desktop} 1200w`}
							sizes="100%"
							alt={event.img.alt}
							class="event-img"
							class:active={displayedEvent === event}
						/>
					</button>
				{/each}
			</div>
		</div>
	</MarginContainer>
</section>

<style>
	#veranstaltungen {
		padding: 5rem 0;
	}

	#heading {
		font-size: 3rem;
		font-weight: 300;
		animation-delay: 0.2s;
	}

	#line {
		display: block;
		width: 100%;
		height: 2px;
		background-color: var(--dark);
		margin-top: 0.8rem;
	}

	#displayedevent-container {
		margin-top: 2rem;
		display: flex;
		justify-content: space-between;
	}

	#displayedevent-date {
		font-size: 1.2rem;
	}

	#displayedevent-title {
		font-size: 3rem;
		line-height: 1;
		width: 35rem;
		max-width: 95%;
	}

	#displayedevent-subtitle {
		font-size: 1.5rem;
		width: 35rem;
		max-width: 95%;
	}

	#displayedevent-openingtimes-container {
		margin-top: 2rem;
	}

	#displayedevent-openingtimes-heading {
		font-size: 2rem;
	}

	.displayedevent-openingtime {
		font-size: 1.2rem;
	}

	#displayedevent-img {
		width: 40rem;
		height: 28rem;
		object-fit: cover;
		max-width: 50%;
	}

	#more-events-heading {
		margin-top: 5rem;
		font-weight: 500;
		font-size: 2rem;
	}

	#more-events-container {
		display: flex;
		width: 100%;
		flex-wrap: wrap;
	}

	.image-button {
		background: transparent;
		border: none;
		padding: 0;
		margin-right: 2rem;
		margin-top: 1rem;
	}

	.image-button:hover {
		cursor: pointer;
	}

	.image-button:last-child {
		margin-right: 0rem;
	}

	.event-img {
		opacity: 0.5;
		width: 20rem;
		height: 14rem;
		transition: opacity 0.3s;
		object-fit: cover;
	}

	.active {
		opacity: 1 !important;
	}

	/* media queries */
	@media (max-width: 1400px) {
		#displayedevent-container {
			flex-direction: flex;
		}

		#displayedevent-img {
			max-width: 35rem;
			width: 100%;
			height: 23rem;
		}
	}

	@media (max-width: 1024px) {
		#displayedevent-container {
			flex-direction: column;
		}

		#displayedevent-img {
			max-width: 35rem;
			width: 100%;
			height: 23rem;
			margin-top: 2rem;
		}
	}

	@media (max-width: 640px) {
		#heading {
			font-size: 2rem;
		}

		#line {
			margin-top: 0.5rem;
		}

		#displayedevent-date {
			font-size: 1.1rem;
		}

		#displayedevent-title {
			font-size: 2.2rem;
		}

		#displayedevent-subtitle {
			font-size: 1.3rem;
		}

		#displayedevent-openingtimes-container {
			margin-top: 1.3rem;
		}

		#displayedevent-openingtimes-heading {
			font-size: 1.6rem;
		}

		.displayedevent-openingtime {
			font-size: 1.1rem;
		}

		#displayedevent-img {
			width: 100%;
			height: 18rem;
			margin-top: 2rem;
		}

		#more-events-heading {
			margin-top: 5rem;
			font-size: 1.7rem;
		}

		.event-img {
			opacity: 0.5;
			width: 15rem;
			height: 10.5rem;
			transition: opacity 0.3s;
		}
	}

	/* animations */
	@media (prefers-reduced-motion: no-preference) {
		.shownFirst,
		.shownSecond {
			animation: fadeIn 1s;
		}

		@keyframes fadeIn {
			from {
				opacity: 0;
				transform: translateY(1rem);
			}

			to {
				opacity: 1;
				transform: translateY(0rem);
			}
		}
	}
</style>
