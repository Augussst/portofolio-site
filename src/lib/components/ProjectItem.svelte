<script>
	export let href;
	export let projectThumbnail;
	export let thumbnailFallback;
	export let projectTitle;
	export let click;
</script>

<a
	on:click={click}
	class="group relative z-20 flex flex-col items-center gap-2 border rounded overflow-clip
	transition-all duration-300
	"
	href="/projects/{href}"
>
	<div
		class="relative group-hover:scale-110 transition-all duration-300 aspect-video w-full h-auto"
	>
		<img
			class="relative w-auto z-10 h-full mx-auto"
			src={projectThumbnail !== undefined ? projectThumbnail : thumbnailFallback}
			alt="{projectTitle} image"
		/>
	</div>
	<div
		class="absolute z-10 inset-0 rounded px-5 flex items-center justify-center w-full h-full variant-glass-secondary backdrop-blur-sm group-hover:opacity-0 transition-all duration-300"
	>
		<h2 class="h2 text-xl md:text-3xl lg:text-4xl text-center drop-shadow-lg whitespace-normal">
			{projectTitle}
		</h2>
	</div>
</a>
