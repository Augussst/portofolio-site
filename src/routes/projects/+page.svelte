<script>
	export let data;
	$: ({ projectByTypes } = data);
</script>

{#each projectByTypes as type}
	<h1 class="h1 flex items-center gap-2 text-2xl"><iconify-icon icon={type.icon} />{type.title}</h1>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-3">
		{#each type.projects as project}
			<a
				class="flex items-center gap-2 border border-primary-500 p-1"
				href="./projects/{type.slug}/{project.slug}"
			>
				<img class="aspect-video w-52 h-auto" src="https://picsum.photos/200/500" alt="" />
				<h2 class="h2 text-xl whitespace-normal font-token text-left">{project.title}</h2>
			</a>
		{/each}
	</div>
{/each}

<!-- <pre>{JSON.stringify(projectByTypes, null, 2)}</pre> -->
