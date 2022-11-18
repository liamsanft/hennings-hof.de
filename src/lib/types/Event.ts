import type { Image, ImageResponse } from '$lib/types';

export type Event = {
	title: string;
	subtitle: string;
	start_date: Date;
	end_date: Date;
	opening_times: string[];
	img: Image;
};

export type EventResponse = {
	title: string | null;
	subtitle: string | null;
	start_date: Date | null;
	end_date: Date | null;
	opening_times: (string | null)[];
	img: ImageResponse;
};
