<script lang="ts">
	// export let windowname = document.getElementsByClassName('windowname')[0].textContent;
	// import { onMount } from 'svelte';

	// let windowname: string | null | undefined;
	// onMount(() => {
	// 	windowname = document.getElementById('name')?.innerHTML;
	// });
</script>

<!-- id={windowname} -->

<div
	class="window m-3 bg-containerbg p-3 pt-11 border border-transparent hover:border hover:border-accent relative"
>
	{#if $$slots.top}
		<slot name="top" />
	{/if}

	<div class="title text-white flex items-center absolute top-2 left-3 border-b-2 pb-1">
		<h2 class="capitalize windowname">
			<slot name="name">No name</slot>
		</h2>
		<div class="icon ml-5">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				class="w-5 h-5"
			>
				<path
					fill-rule="evenodd"
					d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
					clip-rule="evenodd"
				/>
			</svg>
		</div>
	</div>

	{#if $$slots.inner}
		<div
			class="bg-innercontainerbg border border-innercontaineraccent mt-8 py-8 px-4 lg:px-8 xl:px-20"
		>
			<slot name="inner" />
		</div>
	{/if}

	<slot />
</div>

<style lang="postcss">
	.window {
	}
</style>
