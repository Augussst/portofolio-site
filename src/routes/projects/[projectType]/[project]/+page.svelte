<script>
	import Iframe from '$lib/components/Iframe.svelte';
	import { fly } from 'svelte/transition';

	export let data;
	$: ({ meta, content } = data);
</script>

{#key data.url}
	<div
		in:fly={{ x: -100, duration: 300, delay: 300 }}
		out:fly={{ x: -100, duration: 300 }}
		class="container flex flex-col gap-3 mx-auto max-w-4xl"
	>
		<h1 class="h1">{meta.title}</h1>
		{#if meta.tools}
			<ul class="flex gap-2">
				{#each meta.tools as tag}
					<li class="border rounded-xl px-2">{tag.tool}</li>
				{/each}
			</ul>
		{/if}
		{#if meta.url}
			<Iframe
				class="border rounded-xl overflow-clip"
				width="max-w-4xl"
				title="{meta.title} preview"
				src={meta.url}
			/>
		{/if}
		{#if meta.file}
			<!-- svelte-ignore a11y-media-has-caption -->
			<video class="border rounded-xl overflow-clip" controls>
				<source src={meta.file} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		{/if}
		<div class="prose text-token mx-auto max-w-4xl">
			<svelte:component this={content} />
		</div>
	</div>
{/key}

<!-- <pre>{JSON.stringify(meta, null, 2)}</pre> -->
