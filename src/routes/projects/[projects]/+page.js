/** @type {import('@sveltejs/kit').Load} */
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	try {
		// let projectTypes = [];
		// const projectTypesPath = await import.meta.glob('$cms/settings/project.md', { eager: true });
		// const projectTypesProperty = Object.getOwnPropertyNames(projectTypesPath);

		// projectTypesPath[projectTypesProperty].metadata.projectTypes.forEach((types) => {
		// 	projectTypes.push(types.slug);
		// });
		// console.log(projectTypes);

		let projects = [];

		let project = params.projects;
		let paths;
		if (project == 'webdev') {
			paths = await import.meta.glob(`$cms/projects/webdev/*.md`, { eager: true });
		} else if (project == 'instructional-design') {
			paths = await import.meta.glob(`$cms/projects/instructional-design/*.md`, { eager: true });
		} else throw error(404, 'Slug not recognized');

		for (const path in paths) {
			const file = paths[path];
			const slug = path.split('/').at(-1)?.replace('.md', '');
			const content = file.default;

			if (file && typeof file === 'object' && 'metadata' in file && slug) {
				const metadata = file.metadata;
				const post = { slug, ...metadata, content };
				projects.push(post);
			}
		}

		return {
			projects
		};
	} catch (e) {
		throw error(404, `Could not show projects`);
	}
};
