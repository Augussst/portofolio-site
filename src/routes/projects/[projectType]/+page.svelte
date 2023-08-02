<script>
	import ProjectGrid from '$lib/components/ProjectGrid.svelte';
	import ProjectItem from '$lib/components/ProjectItem.svelte';
	import { fly } from 'svelte/transition';
	import { scrollToTop } from '../+layout.svelte';

	export let data;
	$: ({ projectByTypes, params, site } = data);
</script>

{#key data.url}
	<div in:fly={{ x: -100, duration: 300, delay: 300 }} out:fly={{ x: -100, duration: 300 }}>
		{#each projectByTypes as type}
			{#if type.slug == params.projectType}
				<ProjectGrid typeTitle={type.title} typeIcon={type.icon}>
					{#each type.projects as project}
						<ProjectItem
							click={() => {
								scrollToTop();
							}}
							projectTitle={project.title}
							href="{type.slug}/{project.slug}"
							projectThumbnail={project.thumbnail}
							thumbnailFallback={site.siteLogo}
						/>
					{/each}
				</ProjectGrid>
			{/if}
		{/each}
	</div>
{/key}
