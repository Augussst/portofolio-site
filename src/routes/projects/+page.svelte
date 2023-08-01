<script>
	import ProjectGrid from '$lib/components/ProjectGrid.svelte';
	import ProjectItem from '$lib/components/ProjectItem.svelte';
	import { fly } from 'svelte/transition';
	import { section } from './+layout.svelte';

	export let data;
	$: ({ projectByTypes, site } = data);
	let lastItem = (a, i) => i == a.length - 1;

	function topFunction() {
		section.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

{#key data.url}
	<div in:fly={{ x: -100, duration: 500, delay: 500 }} out:fly={{ x: -100, duration: 500 }}>
		{#each projectByTypes as type, i}
			<ProjectGrid
				typeTitle={type.title}
				typeIcon={type.icon}
				class={lastItem(projectByTypes, i) ? '' : 'mb-3'}
			>
				{#each type.projects as project}
					<ProjectItem
						click={() => {
							topFunction();
						}}
						projectTitle={project.title}
						href="{type.slug}/{project.slug}"
						projectThumbnail={project.thumbnail}
						thumbnailFallback={site.siteLogo}
					/>
				{/each}
			</ProjectGrid>
		{/each}
	</div>
{/key}
