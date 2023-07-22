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
	import * as projects from '$cms/settings/project.md';
	import { fade } from 'svelte/transition';
	import SidePage from '$lib/components/SidePage.svelte';
	const site = sites.metadata;
	const project_metadata = projects.metadata;

	let toggleWebMenu = false;
	const transition = 'transition-all duration-500 max-lg:transition-[height] max-lg:duration-500';

	export let data;
</script>

<svelte:head>
	<title>{site.siteName}</title>
	<link rel="icon" href={site.siteLogo} />
	<script src="https://code.iconify.design/iconify-icon/1.0.8/iconify-icon.min.js"></script>
</svelte:head>

<!-- App Shell -->

<main class="flex max-lg:flex-col h-[100dvh] w-screen p-3 overflow-hidden">
	{#each project_metadata.menu as project}
		{#if project.position == 'left'}
			<SidePage trigger={data.url == `/${project.slug}`} margin="lg:mr-3 max-lg:mb-3" {transition}>
				{#if data.url !== '/'}
					{#if data.url == `/${project.slug}`}
						<slot />
					{/if}
				{/if}
			</SidePage>
		{/if}
	{/each}

	<div
		class="
            relative flex flex-col min-w-[16.666667%] grow items-center justify-center border {transition} rounded-xl
            "
	>
		<button class="flex flex-col gap-2 items-center justify-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-full max-h-28 fill-primary-500"
				viewBox="0 0 165.15 173.99"
				><path
					d="M109.79,139.84l17.79,17.78c-12.82,8.05-27.98,12.7-44.24,12.7C37.31,170.33,0,133.02,0,87,0,40.97,37.31,3.66,83.33,3.66c16.26,0,31.42,4.65,44.24,12.7l-17.79,17.78-.55,.55c-7.95-3.95-16.77-6.03-25.9-6.03-15.58,0-30.23,6.07-41.25,17.09-11.02,11.02-17.08,25.67-17.08,41.25,0,15.58,6.07,30.23,17.09,41.25,11.02,11.02,25.67,17.08,41.25,17.08,9.14,0,17.95-2.09,25.9-6.04l.55,.55Z"
				/><path
					d="M161.49,152.65c4.88,4.88,4.88,12.8,0,17.68-2.44,2.44-5.64,3.66-8.84,3.66s-6.4-1.22-8.84-3.66l-14.09-14.09-18.16-18.16-42.24-42.24c-4.88-4.88-4.88-12.8,0-17.68l42.24-42.24,18.16-18.16,14.09-14.09C146.25,1.22,149.45,0,152.65,0s6.4,1.22,8.84,3.66c2.44,2.44,3.66,5.64,3.66,8.84s-1.22,6.4-3.66,8.84l-56.81,56.82c-4.88,4.88-4.88,12.8,0,17.68l56.82,56.81Z"
				/></svg
			>
			<h1 class="h1 !m-0">{site.siteName}</h1>
		</button>

		{#if data.url !== '/'}
			<a
				transition:fade
				class="btn absolute lg:left-0 lg:right-0 lg:mx-auto lg:bottom-20 max-lg:left-20 font-heading-token w-20 border"
				href="/">Home</a
			>
		{/if}

		{#if data.url == '/'}
			{#each project_metadata.menu as project}
				{#if project.position == 'left'}
					<a
						transition:fade
						href="/{project.slug}"
						class="btn w-40 h-40 rounded-full font-heading-token border hover:bg-primary-500 hover:text-secondary-500 active:bg-primary-500 active:text-secondary-500
					absolute max-lg:top-20 max-lg:right-0 max-lg:left-0 max-lg:mx-auto lg:left-20 flex flex-col gap-2"
					>
						<iconify-icon class="text-5xl" icon={project.icon} />
						<span class="text-lg !m-0">{@html project.title}</span>
					</a>
				{/if}

				{#if project.position == 'right'}
					<a
						transition:fade
						href="/{project.slug}"
						class="btn w-40 h-40 rounded-full font-heading-token border hover:bg-primary-500 hover:text-secondary-500 active:bg-primary-500 active:text-secondary-500
						absolute max-lg:bottom-20 max-lg:right-0 max-lg:left-0 max-lg:mx-auto lg:right-20 flex flex-col gap-2"
					>
						<iconify-icon class="text-5xl" icon={project.icon} />
						<span class="text-lg !m-0">{@html project.title}</span>
					</a>
				{/if}
			{/each}
		{/if}
	</div>

	{#each project_metadata.menu as project}
		{#if project.position == 'right'}
			<SidePage trigger={data.url == `/${project.slug}`} margin="lg:ml-3 max-lg:mt-3" {transition}>
				{#if data.url !== '/'}
					{#if data.url == `/${project.slug}`}
						<slot />
					{/if}
				{/if}
			</SidePage>
		{/if}
	{/each}
</main>
