import * as prismic from '@prismicio/client';

const repoName = 'hennings-hof';

export const createClient = ({
	request,
	fetch
}: {
	request: Request;
	fetch: prismic.FetchLike;
}) => {
	const clientOptions = {
		fetch
	};
	const client = prismic.createClient(repoName, clientOptions);

	if (request) {
		client.enableAutoPreviewsFromReq(request);
	}

	return client;
};
