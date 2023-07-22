<script>
	export let transition;
	export let trigger;
	export let margin;
</script>

<div
	class="{trigger ? `lg:w-5/6 max-lg:h-5/6 ${margin} visible` : 'w-0 h-0 invisible'}
                border rounded-xl {transition}
    "
>
	<slot />
</div>
