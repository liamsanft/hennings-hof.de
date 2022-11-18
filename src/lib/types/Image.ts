export type Image = {
	src: string;
	alt: string;
	desktop: string;
	tablet: string;
	mobile: string;
};

export type ImageResponse = {
	src: string | null;
	alt: string | null;
	desktop: string | null;
	tablet: string | null;
	mobile: string | null;
};
