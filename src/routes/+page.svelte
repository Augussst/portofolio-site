<script>
	import { fade } from 'svelte/transition';
	import Content from '$lib/components/Content.svelte';

	let toggleMenuID = false;
	let toggleMenuWeb = false;
	let transition = 'transition-all duration-500 max-lg:transition-[height] max-lg:duration-500';
</script>

<section
	class="
        flex max-lg:flex-col h-screen w-screen p-3 overflow-hidden
        {transition}"
>
	<Content margin="lg:mr-3 max-lg:mb-3" menu={toggleMenuWeb} {transition}
		><p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore animi sequi praesentium
			necessitatibus minima consectetur corrupti quam vero sint officia ea similique labore illo ad
			repudiandae voluptatum doloremque, qui eveniet.
		</p>
	</Content>

	<div
		class="
            flex grow items-center justify-center border {transition} rounded-xl
            py-5 relative
            "
	>
		<button class="btn flex z-50 flex-col gap-2 items-center justify-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-full max-h-28 fill-primary-500"
				viewBox="0 0 165.15 173.99"
				><path
					d="M109.79,139.84l17.79,17.78c-12.82,8.05-27.98,12.7-44.24,12.7C37.31,170.33,0,133.02,0,87,0,40.97,37.31,3.66,83.33,3.66c16.26,0,31.42,4.65,44.24,12.7l-17.79,17.78-.55,.55c-7.95-3.95-16.77-6.03-25.9-6.03-15.58,0-30.23,6.07-41.25,17.09-11.02,11.02-17.08,25.67-17.08,41.25,0,15.58,6.07,30.23,17.09,41.25,11.02,11.02,25.67,17.08,41.25,17.08,9.14,0,17.95-2.09,25.9-6.04l.55,.55Z"
				/><path
					d="M161.49,152.65c4.88,4.88,4.88,12.8,0,17.68-2.44,2.44-5.64,3.66-8.84,3.66s-6.4-1.22-8.84-3.66l-14.09-14.09-18.16-18.16-42.24-42.24c-4.88-4.88-4.88-12.8,0-17.68l42.24-42.24,18.16-18.16,14.09-14.09C146.25,1.22,149.45,0,152.65,0s6.4,1.22,8.84,3.66c2.44,2.44,3.66,5.64,3.66,8.84s-1.22,6.4-3.66,8.84l-56.81,56.82c-4.88,4.88-4.88,12.8,0,17.68l56.82,56.81Z"
				/></svg
			>
			<h1 class="h1 !m-0">okreate</h1>
		</button>

		{#if !toggleMenuWeb && !toggleMenuID}
			<button
				transition:fade={{ duration: 200 }}
				on:click={() => {
					toggleMenuWeb = !toggleMenuWeb;
					toggleMenuID = false;
				}}
				class="
            btn w-36 h-36 rounded-full font-heading-token border hover:bg-primary-500 hover:text-secondary-500
            absolute max-lg:top-20 max-lg:right-0 max-lg:left-0 max-lg:mx-auto lg:left-20 flex flex-col gap-2
            "
			>
				<div>
					<svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"
						><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
							><rect width="13" height="13" x=".5" y=".5" rx="1" /><path
								d="M.5 4h13m-9 3L3 8.5L4.5 10M10 7l1.5 1.5L10 10m-3.5.5L8 6"
							/></g
						></svg
					>
				</div>
				Web Development<br />Projects
			</button>

			<button
				transition:fade={{ duration: 200 }}
				on:click={() => {
					toggleMenuID = !toggleMenuID;
					toggleMenuWeb = false;
				}}
				class="
            btn w-36 h-36 rounded-full font-heading-token border hover:bg-primary-500 hover:text-secondary-500
            absolute max-lg:bottom-20 max-lg:right-0 max-lg:left-0 max-lg:mx-auto lg:right-20 flex flex-col gap-2
            "
			>
				<div>
					<svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"
						><path
							fill="currentColor"
							d="M384 1536h128v128H256V384H128v1408h384v128H0V256h256V128h384q88 0 169 27t151 81q69-54 150-81t170-27h384v128h256v819l-128-58V384h-128v575l-128-59V256h-256q-71 0-136 24t-120 71v608l-128 58V351q-54-46-119-70t-137-25H384v1280zm1408 255l-448 225l-448-225q0-36 1-76t8-81t20-77t36-67l-193-88v582H640v-640l704-320l704 320l-321 146l8 11q21 31 32 67t17 73t7 76t1 74zm-448-627l-395 180l395 180l395-180l-395-180zm0 709l320-161q-1-26-4-47t-11-41t-16-39t-23-42l-266 121l-266-121q-15 24-24 43t-16 38t-9 40t-4 49l319 160z"
						/></svg
					>
				</div>
				Instructional Design<br />Projects
			</button>
		{/if}

		{#if toggleMenuWeb == true || toggleMenuID == true}
			<button
				id="backBtn"
				transition:fade
				on:click={() => {
					toggleMenuWeb = false;
					toggleMenuID = false;
				}}
				class="btn absolute lg:left-0 lg:right-0 lg:mx-auto lg:bottom-20 max-lg:left-20 font-heading-token w-20 border"
				>Back
			</button>
		{/if}
	</div>

	<Content margin="lg:ml-3 max-lg:mt-3" menu={toggleMenuID} {transition}
		><p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore animi sequi praesentium
			necessitatibus minima consectetur corrupti quam vero sint officia ea similique labore illo ad
			repudiandae voluptatum doloremque, qui eveniet.
		</p>
	</Content>
</section>
