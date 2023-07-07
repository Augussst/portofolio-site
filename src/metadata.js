const modules = Object.entries(import.meta.glob('./posts/blog/*.md', { eager: true }));

const getRoutes = () => {
	return modules.map(([file, module]) => {
		const path = file.replace('./routes/', '/').replace('index', '').replace('.md', '');

		return {
			path,
			...module.metadata
		};
	});
};

export { getRoutes };
