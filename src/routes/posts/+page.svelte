<script>
	export let data;
	$: ({ content, meta } = data);
</script>

<h1>{meta.title}</h1>

<svelte:component this={content} />
