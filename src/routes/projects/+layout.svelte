<script context="module">
	export let section;

	export function scrollToTop() {
		section.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<script>
	import { popup } from '@skeletonlabs/skeleton';
	export let data;
	$: ({ params, projectTypes } = data);
	$: activeClass = (slug) => {
		return params.projectType === slug ? 'bg-primary-500 text-secondary-500' : '';
	};

	const projectTypePopup = {
		event: 'click',
		target: 'projectTypePopup',
		placement: 'bottom-start'
	};

	$: selectedType = () => {
		const selected = projectTypes.filter((type) => type.slug === params.projectType);
		return selected[0]?.title;
	};
</script>

{#if params?.project == undefined}
	<div class="border-b px-3 py-2">
		<button
			class="md:hidden btn justify-between w-56 px-2 py-1 rounded-xl border"
			use:popup={projectTypePopup}
		>
			<span class="capitalize">{selectedType() || 'All'}</span>
			<iconify-icon class="text-2xl" icon="gridicons:dropdown" />
		</button>

		<div
			class="bg-secondary-500 shadow-lg py-2 border rounded-xl relative z-50"
			data-popup="projectTypePopup"
		>
			<nav class="list-nav">
				<ul class="p-1">
					<li class="{activeClass(undefined)} rounded-xl">
						<a href="/projects">All</a>
					</li>
					{#each projectTypes as projectType}
						<li class="{activeClass(projectType.slug)} rounded-xl">
							<a href="/projects/{projectType.slug}">
								{projectType.title}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		</div>

		<ul class="hidden md:flex flex-wrap items-center gap-2">
			<li
				class="
				{activeClass(undefined)}
				px-2 py-1 border rounded-xl hover:bg-primary-500 hover:text-secondary-500 transition-all"
			>
				<a href="/projects" class="flex items-center gap-1">
					<iconify-icon icon="ic:round-select-all" />
					All
				</a>
			</li>
			{#each projectTypes as projectType}
				<li
					class="
					{activeClass(projectType.slug)}
					px-2 py-1 border rounded-xl hover:bg-primary-500 hover:text-secondary-500 transition-all
				"
				>
					<a href="/projects/{projectType.slug}" class="flex items-center gap-1 whitespace-nowrap">
						<iconify-icon icon={projectType.icon} />
						{projectType.title}
					</a>
				</li>
			{/each}
		</ul>
	</div>
{:else}
	<div class="flex items-center border-b gap-2 px-3 py-2">
		<a
			class="flex gap-1 items-center px-2 py-1 border rounded-xl hover:bg-primary-500 hover:text-secondary-500 transition-all"
			href="/projects"
		>
			<iconify-icon icon="ep:back" />
			<span>Back</span>
		</a>
		{#each projectTypes as projectType}
			{#if projectType.slug == params.projectType}
				<span
					class="flex items-center gap-1 whitespace-nowrap px-2 py-1 border rounded-xl bg-primary-500 text-secondary-500 transition-all"
				>
					<iconify-icon icon={projectType.icon} />
					{projectType.title}
				</span>
			{/if}
		{/each}
	</div>
{/if}

<section bind:this={section} class="p-3 flex-auto h-full overflow-auto">
	<slot />
</section>
