export async function load({ url }) {
	const site_import = await import('$cms/settings/meta.md');
	const site = await site_import.metadata;
	const sitePage = site.page.map((page) => {
		return `${page?.slug || ''}`;
	});

	return {
		site,
		sitePage,
		url: url.pathname
	};
}
