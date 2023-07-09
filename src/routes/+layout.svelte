<script lang="ts">
	// Your custom Skeleton theme:
	import '../theme.postcss';
	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.postcss';
	// Fonts
	import '@fontsource/staatliches';
	import '@fontsource/ubuntu';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Header from '../lib/components/Header.svelte';

	import * as sites from '$content/settings.md';
	const site = sites.metadata;
</script>

<svelte:head>
	<title>{site.siteName}</title>
</svelte:head>

<!-- App Shell -->

<AppShell slotPageContent="container mx-auto">
	<svelte:fragment slot="pageHeader"><Header /></svelte:fragment>
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
</AppShell>
