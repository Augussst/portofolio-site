<script>
	// Your custom Skeleton theme:
	import '../theme.postcss';
	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.postcss';
	// Fonts
	import '@fontsource/staatliches';
	import '@fontsource/ubuntu';

	import * as sites from '$cms/settings/meta.md';
	import PageSection from '$lib/components/PageSection.svelte';
	const site = sites.metadata;

	export let data;
</script>

<svelte:head>
	<title>{site.siteName}</title>
	<link rel="icon" href={site.siteLogo} />
	<script src="https://code.iconify.design/iconify-icon/1.0.8/iconify-icon.min.js"></script>
</svelte:head>

<main class="flex max-lg:flex-col h-[100dvh] w-screen p-3 overflow-hidden">
	<div class="flex flex-col gap-3 h-full w-full">
		<PageSection trigger={data.url} icon="material-symbols:home-outline" href="/" title="Home"
			><slot /></PageSection
		>
		<PageSection trigger={data.url} icon="wpf:create-new" href="/projects" title="Projects"
			><slot /></PageSection
		>
		<PageSection trigger={data.url} icon="mdi:about" href="/about" title="About"
			><slot /></PageSection
		>
	</div>
</main>
