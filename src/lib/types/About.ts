import type { Image, ImageResponse } from '$lib/types';

export type About = {
	title: string;
	text: string;
	img: Image;
};

export type AboutResponse = {
	title: string | null;
	text: string | null;
	img: ImageResponse;
};
