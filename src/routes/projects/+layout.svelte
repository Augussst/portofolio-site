<script>
	export let data;
	$: ({ params, projectTypes } = data);
	$: activeClass = (slug) => {
		return params.projectType === slug ? 'bg-primary-500 text-secondary-500' : '';
	};
</script>

<ul class="flex items-center gap-2 border-b px-3 py-2">
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
			<a href="/projects/{projectType.slug}" class="flex items-center gap-1">
				<iconify-icon icon={projectType.icon} />
				{projectType.title}
			</a>
		</li>
	{/each}
</ul>

<!-- <pre>{JSON.stringify(projectByTypes, null, 2)}</pre> -->

<section class="p-3 w-full h-full overflow-auto">
	<slot />
</section>
