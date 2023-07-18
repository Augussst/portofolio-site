<script>
	import { fade } from 'svelte/transition';
	export let transition;
	export let menu;
	export let margin;
</script>

<div
	class="{menu ? `lg:w-5/6 max-lg:h-5/6 ${margin} visible` : 'w-0 h-0 invisible'}
                border rounded-xl {transition}
    "
>
	{#if menu == true}
		<section transition:fade={{ duration: 200 }} class="p-3">
			<slot />
		</section>
	{/if}
</div>
