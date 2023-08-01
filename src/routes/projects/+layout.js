/** @type {import('@sveltejs/kit').Load} */
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	try {
		const projectTypeMetadata = await import('$cms/settings/project.md');
		const projectTypes = projectTypeMetadata.metadata.projectTypes;
		let projects = [];

		let paths = await import.meta.glob(`$cms/projects/**`, { eager: true });

		for (const path in paths) {
			const file = paths[path];
			const slug = path.split('/').at(-1)?.replace('.md', '');

			if (file && typeof file === 'object' && 'metadata' in file && slug) {
				const metadata = file.metadata;
				const project = { slug, ...metadata };
				projects.push(project);
			}
		}

		const projectByTypes = () => {
			const projectByTypes = projectTypes.map((type) => {
				const typeProjects = projects.filter((project) => project.projectType === type.slug);
				const projectsWithoutType = typeProjects.map(({ ...rest }) => rest); // Destructuring to remove projectType property
				return { ...type, projects: projectsWithoutType };
			});

			return projectByTypes;
		};

		return {
			params,
			projectTypes,
			projectByTypes: projectByTypes()
		};
	} catch (e) {
		throw error(404, `Could not show projects`);
	}
};
