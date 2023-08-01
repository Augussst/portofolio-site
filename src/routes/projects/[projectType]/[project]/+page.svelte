<script>
	import Iframe from '$lib/components/Iframe.svelte';

	export let data;
	$: ({ meta, content } = data);
</script>

<div class="pt-3 container mx-auto">
	<h1 class="h1 flex items-center gap-2">{meta.title}</h1>
	<Iframe
		class="border rounded-xl overflow-clip"
		width="max-w-4xl"
		title={meta.title}
		src="https://augussst.github.io/AS-LuasdanVolume-BangunRuang/"
	/>
	<div class="prose prose-invert text-token mx-auto max-w-4xl">
		<svelte:component this={content} />
	</div>
</div>
