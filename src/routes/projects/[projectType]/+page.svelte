<script>
	import ProjectGrid from '$lib/components/ProjectGrid.svelte';
	import ProjectItem from '$lib/components/ProjectItem.svelte';

	export let data;
	$: ({ projectByTypes, params, site } = data);
</script>

{#each projectByTypes as type}
	{#if type.slug == params.projectType}
		<ProjectGrid typeTitle={type.title} typeIcon={type.icon}>
			{#each type.projects as project}
				<ProjectItem
					projectTitle={project.title}
					href="{type.slug}/{project.slug}"
					projectThumbnail={project.thumbnail}
					thumbnailFallback={site.siteLogo}
				/>
			{/each}
		</ProjectGrid>
	{/if}
{/each}
