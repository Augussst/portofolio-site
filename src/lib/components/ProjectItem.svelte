<script>
	export let href;
	export let projectThumbnail;
	export let thumbnailFallback;
	export let projectTitle;
</script>

<a
	class="flex flex-col btn items-center gap-2 border rounded border-primary-500 p-1"
	href="/projects/{href}"
>
	<div class="relative aspect-video w-full h-auto">
		<div
			style="
						background: linear-gradient(
							rgba(0, 0, 0, 0.7),
							rgba(0, 0, 0, 0.7)
						),
						url({projectThumbnail !== undefined ? projectThumbnail : thumbnailFallback});
						background: no-repeat;
						background-position: center;
						"
			class="absolute w-full h-full"
		/>
		<img
			class="relative w-auto z-10 h-full mx-auto"
			src={projectThumbnail !== undefined ? projectThumbnail : thumbnailFallback}
			alt="{projectTitle} image"
		/>
	</div>
	<h2 class="h2 !ml-0 text-lg text-center whitespace-normal font-token">
		{projectTitle}
	</h2>
</a>
