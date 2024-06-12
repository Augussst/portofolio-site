<script>
	import * as about from '$cms/settings/about.md';
	export let data;
	$: ({ site } = data);
	const about_metadata = about.metadata;
</script>

<div class="flex justify-center overflow-x-hidden px-5 w-full h-full">
	<main class="relative grid grid-flow-col gap-5 items-center justify-center my-auto">
		<div
			class="flex md:gap-2 flex-col items-center justify-center
					md:border p-3 rounded-xl md:h-full max-md:absolute max-md:mb-10 bottom-full right-0 left-0
		"
		>
			<svg
				class="w-12 md:w-28 fill-white"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 660.6 695.96"
			>
				<g>
					<g
						><path
							d="M439.15,559.37l71.14,71.13c-51.28,32.2-111.94,50.81-176.96,50.81C149.24,681.31,0,532.07,0,347.98S149.24,14.65,333.33,14.65c65.02,0,125.68,18.61,176.96,50.81l-71.14,71.13-2.2,2.2c-31.81-15.79-67.07-24.14-103.62-24.14-62.32,0-120.92,24.27-164.99,68.34-44.07,44.07-68.34,102.66-68.34,164.99s24.27,120.92,68.34,164.99c44.07,44.07,102.67,68.34,164.99,68.34,36.55,0,71.81-8.35,103.62-24.14l2.2,2.2Z"
						/><path
							d="M645.95,610.6c19.53,19.53,19.53,51.19,0,70.71-9.76,9.77-22.55,14.65-35.35,14.65s-25.6-4.88-35.36-14.65l-56.37-56.37-72.65-72.64-168.96-168.96c-19.52-19.53-19.52-51.19,0-70.72l168.96-168.96,72.65-72.64,56.37-56.37c9.76-9.77,22.56-14.65,35.36-14.65s25.59,4.88,35.35,14.65c9.77,9.76,14.65,22.55,14.65,35.35s-4.88,25.6-14.65,35.36l-227.26,227.26c-19.53,19.53-19.53,51.19,0,70.72l227.26,227.26Z"
						/></g
					></g
				></svg
			>
			<h1 class="h1 max-md:text-lg">{site.siteName}</h1>
			<span class="text-primary-700 text-center text-sm capitalize">
				home of everything I kreated
			</span>
		</div>
		<div class="h-full flex flex-col justify-between">
			<span class="text-lg sm:text-xl">Hi, I'm {about_metadata.name}</span>
			<ul
				class="flex flex-col gap-2 my-2 md:my-3 text-2xl sm:text-4xl lg:text-5xl whitespace-nowrap"
			>
				<li class="flex items-center gap-3">
					<iconify-icon
						icon="streamline:programming-browser-code-2-code-browser-tags-angle-programming-bracket"
					/> Web Developer
				</li>
				<li class="flex items-center gap-3">
					<iconify-icon icon="dashicons:editor-video" /> Video Editor
				</li>
			</ul>
			<span class="flex gap-3">
				<a class="btn max-sm:px-3 max-sm:py-2 variant-filled-primary !rounded-xl" href="/projects">
					Check Out My Kreations
				</a>
				<a
					class="btn max-sm:px-3 max-sm:py-2 variant-filled-primary !rounded-xl"
					href="/about#social"
				>
					Let's Talk
				</a>
			</span>
		</div>
	</main>
</div>
