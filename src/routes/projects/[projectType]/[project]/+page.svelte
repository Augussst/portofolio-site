<script>
	// import { Iframe } from '$lib/components/Iframe.svelte';

	export let data;
	$: ({ projectByTypes, params } = data);
	// $: getProject = () => {
	// 	const currentProjectType = projectByTypes.filter((type) => type.slug === params.projectType);
	// 	const project = currentProjectType[0].projects;
	// 	const currentProject = project.filter((project) => project.slug === params.project);
	// 	return currentProject[0];
	// };
</script>

{#each projectByTypes as type}
	{#each type.projects as project}
		{#if project.slug == params.project}
			<div class="flex items-center border-b gap-2 -mt-3 -mx-3 px-3 py-2">
				<a class="flex gap-1 items-center px-2 py-1 border rounded-xl" href="/projects">
					<iconify-icon icon="ep:back" />
					<span>Back</span>
				</a>
				<div class="flex gap-1 items-center px-2 py-1 border rounded-xl">
					<iconify-icon icon={type.icon} />
					<span>{type.title}</span>
				</div>
			</div>
			<div class="pt-3">
				<h1 class="h1">{project.title}</h1>
				<!-- <Iframe
					title={project.title}
					src="https://augussst.github.io/AS-LuasdanVolume-BangunRuang/"
				/> -->
				<svelte:component this={project.content} />
			</div>
		{/if}
	{/each}
{/each}
<!-- <pre>{JSON.stringify(projectByTypes, null, 2)}</pre> -->
