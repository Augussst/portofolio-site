<script>
	export let data;
	$: ({ content, meta } = data);
</script>

<h1>{meta.title}</h1>
<img src={meta.thumbnail} alt="logo" />

<article class="prose">
	<svelte:component this={content} />
</article>
