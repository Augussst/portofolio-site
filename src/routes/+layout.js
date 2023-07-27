export async function load({ url }) {
	const site_import = await import('$cms/settings/meta.md');
	const site = await site_import.metadata;
	return {
		site,
		url: url.pathname
	};
}
