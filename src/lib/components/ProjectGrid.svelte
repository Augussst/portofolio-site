<script>
	export let typeIcon;
	export let typeTitle;
	let className;
	export { className as class };
</script>

<h1 class="h1 flex items-center gap-2 text-2xl">
	<iconify-icon icon={typeIcon} />
	{typeTitle}
</h1>
<div class="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-3 {className}">
	<slot />
</div>
