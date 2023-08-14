<script>
	export let title;
	export let trigger;
	export let href;
	export let icon = '';
	import { fly, slide } from 'svelte/transition';
</script>

<div
	class="flex grow border rounded-xl transition-all duration-500
			{trigger == href.split('/')[1] ? 'h-full' : 'h-14'}"
>
	<div class="relative flex flex-col w-full h-full">
		{#if trigger !== href.split('/')[1]}
			<a
				out:slide={{ duration: 250 }}
				role="button"
				tabindex="0"
				{href}
				class="
					relative group flex flex-col items-center justify-center overflow-hidden rounded-xl w-full h-14 font-heading-token text-4xl transition-all
				"
			>
				<span
					class="
					absolute -translate-y-20 flex gap-3 items-center justify-center w-full h-14 bg-primary-500 text-secondary-500 transition-all
					group-hover:-translate-y-0 group-active:-translate-y-0 group-focus:-translate-y-0
					"
				>
					<iconify-icon {icon} />
					{title}
					<iconify-icon {icon} />
				</span>
				<span class="transition-all">
					{title}
				</span>
			</a>
		{/if}
		{#if trigger == href.split('/')[1]}
			<div in:fly={{ delay: 250 }} out:fly class="absolute flex flex-col h-full w-full">
				<div class="flex flex-grow-0 flex-shrink basis-auto items-center gap-1 border-b px-3 py-1">
					<iconify-icon class="text-xl" {icon} />
					<h1 class="h1 text-2xl">{title}</h1>
				</div>
				<div class="flex flex-col flex-auto overflow-auto">
					<slot />
				</div>
			</div>
		{/if}
	</div>
</div>
