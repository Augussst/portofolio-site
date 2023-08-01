<script>
	import ProjectGrid from '$lib/components/ProjectGrid.svelte';
	import ProjectItem from '$lib/components/ProjectItem.svelte';

	export let data;
	$: ({ projectByTypes, site } = data);
	let lastItem = (a, i) => i == a.length - 1;
</script>

{#each projectByTypes as type, i}
	<ProjectGrid
		typeTitle={type.title}
		typeIcon={type.icon}
		class={lastItem(projectByTypes, i) ? '' : 'mb-3'}
	>
		{#each type.projects as project}
			<ProjectItem
				projectTitle={project.title}
				href="{type.slug}/{project.slug}"
				projectThumbnail={project.thumbnail}
				thumbnailFallback={site.siteLogo}
			/>
		{/each}
	</ProjectGrid>
{/each}
