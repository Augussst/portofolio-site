import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(`../../../../_cms/projects/${params.project}.md`);

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		throw error(404, `Could not find ${params.project}`);
	}
}
