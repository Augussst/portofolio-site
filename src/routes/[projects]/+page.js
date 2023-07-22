import { error } from '@sveltejs/kit';

export async function load() {
	try {
		let embeds = [];
		const paths = await import.meta.glob('$cms/embeds/*.md', { eager: true });

		for (const path in paths) {
			const file = paths[path];
			const slug = path.split('/').at(-1)?.replace('.md', '');
			const content = file.default;

			if (file && typeof file === 'object' && 'metadata' in file && slug) {
				const metadata = file.metadata;
				const post = { slug, ...metadata, content };
				embeds.push(post);
			}
		}

		return {
			embeds
		};
	} catch (e) {
		throw error(404, `Could not show post`);
	}
}
