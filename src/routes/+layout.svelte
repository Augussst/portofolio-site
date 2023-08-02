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

	import PageSection from '$lib/components/PageSection.svelte';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	export let data;
	$: ({ site } = data);
</script>

<svelte:head>
	<title>{site.siteName}</title>
	<link rel="icon" href={site.siteLogo} />
	<script src="https://code.iconify.design/iconify-icon/1.0.8/iconify-icon.min.js"></script>
</svelte:head>

<main class="flex max-lg:flex-col h-[100dvh] w-screen p-3 overflow-hidden">
	<div class="flex flex-col gap-3 h-full w-full">
		{#each site.page as page}
			<PageSection
				trigger={data.url.split('/')[1]}
				icon={page.icon}
				href="/{page.slug ?? ''}"
				title={page.title}
			>
				<slot />
			</PageSection>
		{/each}
	</div>
</main>
