<script>
	export let href;
	export let projectThumbnail;
	export let thumbnailFallback;
	export let projectTitle;
</script>

<a
	class="group relative z-20 flex flex-col items-center gap-2 border rounded overflow-clip
	transition-all duration-300
	"
	href="/projects/{href}"
>
	<div
		class="relative group-hover:scale-110 transition-all duration-300 aspect-video w-full h-auto"
	>
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
	<div
		class="absolute z-10 inset-0 rounded px-5 flex items-center justify-center w-full h-full variant-glass-secondary backdrop-blur-sm group-hover:opacity-0 transition-all duration-300"
	>
		<h2 class="h2 text-4xl text-center drop-shadow-lg whitespace-normal">
			{projectTitle}
		</h2>
	</div>
</a>
