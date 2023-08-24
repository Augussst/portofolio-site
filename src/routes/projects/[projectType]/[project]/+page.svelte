<script>
	import Iframe from '$lib/components/Iframe.svelte';
	import { fly } from 'svelte/transition';

	export let data;
	$: ({ meta, content } = data);

	// Carousel

	let elemCarousel;

	function carouselLeft() {
		const x =
			elemCarousel.scrollLeft === 0
				? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
				: elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
		elemCarousel.scroll(x, 0);
	}

	function carouselRight() {
		const x =
			elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
				? 0 // loop
				: elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
		elemCarousel.scroll(x, 0);
	}

	function carouselThumbnail(index) {
		elemCarousel.scroll(elemCarousel.clientWidth * index, 0);
	}
</script>

{#key data.url}
	<div
		in:fly={{ x: -100, duration: 300, delay: 300 }}
		out:fly={{ x: -100, duration: 300 }}
		class="container flex flex-col gap-x-5 gap-y-3 mx-auto"
	>
		<div class="flex max-sm:flex-col flex-wrap gap-3 justify-between sm:items-center">
			<h1 class="h1">{meta.title}</h1>
			{#if meta.tools}
				<ul class="flex flex-wrap gap-2 h-fit">
					{#each meta.tools as tag}
						<li class="border rounded-xl px-2 max-sm:text-sm">{tag.tool}</li>
					{/each}
				</ul>
			{/if}
		</div>
		<div class="grid lg:grid-cols-2 gap-3">
			<div class="w-full">
				{#if meta.projectImages?.length > 0 || meta.url || meta.file}
					{#if meta.projectImages?.length > 1}
						<!-- Carousel here -->
						<div class="border rounded-xl">
							<div class="p-2 grid grid-cols-[auto_1fr_auto] gap-4 items-center">
								<!-- Button: Left -->
								<button type="button" class="btn p-1" on:click={carouselLeft}>
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
										><path fill="currentColor" d="m4 10l9 9l1.4-1.5L7 10l7.4-7.5L13 1z" /></svg
									>
								</button>
								<!-- Full Images -->
								<div
									bind:this={elemCarousel}
									class="snap-x snap-mandatory scroll-smooth flex gap-5 overflow-x-auto pb-3"
								>
									{#each meta.projectImages as project}
										<div
											class="p-2 snap-center border rounded-xl shrink-0 w-full aspect-video flex items-center justify-center"
										>
											<img
												class="snap-center h-full w-auto"
												src={project.picture}
												alt="{meta.title} preview"
												loading="lazy"
											/>
										</div>
									{/each}
								</div>
								<!-- Button: Right -->
								<button type="button" class="btn p-1" on:click={carouselRight}>
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
										><path fill="currentColor" d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z" /></svg
									>
								</button>
							</div>
							<!-- Thumbnails -->
							<div class="border-t p-2 grid grid-cols-6 gap-2">
								{#each meta.projectImages as project, i}
									<button
										class="w-full aspect-square border rounded-xl overflow-clip"
										type="button"
										on:click={() => carouselThumbnail(i)}
									>
										<img
											class=" h-auto w-full mx-auto"
											src={project.picture}
											alt="{meta.title} preview"
											loading="lazy"
										/>
									</button>
								{/each}
							</div>
						</div>
					{:else if meta.projectImages?.length === 1}
						{#each meta.projectImages as project}
							<div
								class="p-2 border rounded-xl shrink-0 w-full aspect-video flex items-center justify-center"
							>
								<img
									class=" h-full w-auto"
									src={project.picture}
									alt="{meta.title} preview"
									loading="lazy"
								/>
							</div>
						{/each}
					{/if}
					<!-- source code and live demo buttons -->
					{#if meta.sourceCode || meta.liveDemo}
						<div class="flex gap-2 mt-3 justify-center md:justify-end">
							{#if meta.sourceCode}
								<a
									href={meta.sourceCode}
									target="_blank"
									class="btn variant-filled-primary !rounded-xl py-1 flex items-center gap-2"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 256 256"
										><path
											fill="currentColor"
											d="M71.68 97.22L34.74 128l36.94 30.78a12 12 0 1 1-15.36 18.44l-48-40a12 12 0 0 1 0-18.44l48-40a12 12 0 0 1 15.36 18.44Zm176 21.56l-48-40a12 12 0 1 0-15.36 18.44L221.26 128l-36.94 30.78a12 12 0 1 0 15.36 18.44l48-40a12 12 0 0 0 0-18.44ZM164.1 28.72a12 12 0 0 0-15.38 7.18l-64 176a12 12 0 0 0 7.18 15.37a11.79 11.79 0 0 0 4.1.73a12 12 0 0 0 11.28-7.9l64-176a12 12 0 0 0-7.18-15.38Z"
										/></svg
									>
									Source Code
								</a>
							{/if}
							{#if meta.liveDemo}
								<a
									href={meta.liveDemo}
									target="_blank"
									class="btn variant-filled-primary !rounded-xl py-1 flex items-center gap-2"
								>
									<svg
										class="fill-base-token"
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										><path
											d="M17 17H3V3h5V1H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5h-2z"
										/><path d="m11 1l3.3 3.3L8.6 10l1.4 1.4l5.7-5.7L19 9V1z" /></svg
									>
									Live Demo
								</a>
							{/if}
						</div>
					{/if}
					{#if meta.url}
						<Iframe
							class="border rounded-xl overflow-clip"
							title="{meta.title} preview"
							width="w-full"
							src={meta.url}
						/>
						<a
							href={meta.url}
							target="_blank"
							class="btn px-3 py-2 mt-3 variant-filled-primary !rounded-xl flex items-center gap-2 ml-auto w-fit"
						>
							<svg
								class="fill-base-token"
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 20 20"
								><path
									d="M17 17H3V3h5V1H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5h-2z"
								/><path d="m11 1l3.3 3.3L8.6 10l1.4 1.4l5.7-5.7L19 9V1z" /></svg
							>
							Full screen
						</a>
					{/if}
					{#if meta.file}
						<!-- svelte-ignore a11y-media-has-caption -->
						<video class="border rounded-xl overflow-clip" controls>
							<source src={meta.file} type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					{/if}
				{:else}
					<div
						class="p-2 border rounded-xl shrink-0 w-full aspect-video flex items-center justify-center"
					>
						<img
							class=" h-full w-auto"
							src={meta.thumbnail}
							alt="{meta.title} preview"
							loading="lazy"
						/>
					</div>
				{/if}
			</div>
			<div class="prose prose-invert text-token max-w-4xl">
				<svelte:component this={content} />
			</div>
		</div>
	</div>
{/key}

<!-- <pre>{JSON.stringify(meta, null, 2)}</pre> -->
