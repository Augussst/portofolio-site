<script>
	let deg = 0;
	let mouseEnter = false;
	setTimeout(() => {
		mouseEnter = true;
	}, 500);

	function revealAnimation(mouseEnter) {
		return `${mouseEnter ? 'w-[1500px] h-[1500px]' : 'w-0 h-0'}`;
	}

	function closestEquivalentAngle(from, to) {
		var delta = ((((to - from) % 360) + 540) % 360) - 180;
		return from + delta;
	}
</script>

<section class="relative h-[97vh] border-2 overflow-hidden m-3 rounded-xl variant-glass-secondary">
	<div
		class="
		absolute z-20 top-0 bottom-0 left-0 right-0 mx-auto my-auto w-fit h-fit
		transition-all
		"
		style="rotate: {deg}deg;"
	>
		<div
			class="absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto rotate-45
			translate-x-[20.5%] transition-all duration-500 {revealAnimation(mouseEnter)}
			bg-primary-500/50"
		/>
	</div>

	<div
		on:mouseenter={() => {
			mouseEnter = true;
		}}
		on:mouseleave={() => {
			if (deg !== 0) {
				mouseEnter = false;
				setTimeout(() => {
					deg = 0;
					setTimeout(() => {
						mouseEnter = true;
					}, 500);
				}, 500);
			}
		}}
		class="absolute z-50 w-[2100px] h-[2100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45"
	>
		<div
			class="
			grid grid-rows-2 grid-cols-2 w-[2100px] h-[2100px]
			"
		>
			<div
				id="top"
				on:click={() => {
					deg = closestEquivalentAngle(deg, 270);
				}}
				on:keydown={() => {
					deg = closestEquivalentAngle(deg, 270);
				}}
				class="bg-transparent w-full h-full relative overflow-hidden"
			>
				<div
					class="
				absolute -bottom-40 -right-40 -rotate-45 w-full h-full
				flex items-end justify-center
				"
				>
					<div class="flex items-center h-[29.5rem]">
						<span class="rounded-full bg-secondary-500 w-5 h-5 border-2 border-primary-500" />
					</div>
				</div>
			</div>
			<div
				id="right"
				on:click={() => {
					deg = closestEquivalentAngle(deg, 0);
				}}
				on:keydown={() => {
					deg = closestEquivalentAngle(deg, 0);
				}}
				class="bg-transparent w-full h-full relative overflow-hidden"
			>
				<div
					class="
				absolute -bottom-40 -left-40 -rotate-45 w-full h-full
				flex items-center justify-start
				"
				>
					<div class="flex justify-center w-[45rem]">something</div>
				</div>
			</div>
			<div
				id="left"
				on:click={() => {
					deg = closestEquivalentAngle(deg, 180);
				}}
				on:keydown={() => {
					deg = closestEquivalentAngle(deg, 180);
				}}
				class="bg-transparent w-full h-full relative overflow-hidden"
			>
				<div
					class="
				absolute -top-40 -right-40 -rotate-45 w-full h-full
				flex items-center justify-end
				"
				>
					<div class="flex justify-center w-[45rem]">something</div>
				</div>
			</div>
			<div
				id="bottom"
				on:click={() => {
					deg = closestEquivalentAngle(deg, 90);
				}}
				on:keydown={() => {
					deg = closestEquivalentAngle(deg, 90);
				}}
				class="bg-transparent w-full h-full relative overflow-hidden"
			>
				<div
					class="
				absolute -top-40 right-40 -rotate-45 w-full h-full
				flex items-start justify-center
				"
				>
					<div class="flex items-center h-[29.5rem]">something</div>
				</div>
			</div>
		</div>
	</div>

	<div
		class="
		absolute z-10 top-0 bottom-0 left-0 right-0 mx-auto my-auto
		flex items-center w-36 h-36 bg-secondary-500 rounded-full border-2
		"
	/>
	<svg
		class="
			absolute z-30 top-0 bottom-0 left-0 right-0 mx-auto my-auto
			scale-[0.045] fill-primary-500 transition-all
			"
		style="rotate: {deg}deg;"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 165.15 173.99"
		><path
			d="M109.79,139.84l17.79,17.78c-12.82,8.05-27.98,12.7-44.24,12.7C37.31,170.33,0,133.02,0,87S37.31,3.66,83.33,3.66c16.26,0,31.42,4.65,44.24,12.7l-17.79,17.78-.55,.55c-7.95-3.95-16.77-6.03-25.9-6.03-15.58,0-30.23,6.07-41.25,17.09-11.02,11.02-17.08,25.67-17.08,41.25,0,15.58,6.07,30.23,17.09,41.25,11.02,11.02,25.67,17.08,41.25,17.08,9.14,0,17.95-2.09,25.9-6.04l.55,.55Z"
		/><path
			d="M161.49,152.65c4.88,4.88,4.88,12.8,0,17.68-2.44,2.44-5.64,3.66-8.84,3.66s-6.4-1.22-8.84-3.66l-14.09-14.09-18.16-18.16-42.24-42.24c-4.88-4.88-4.88-12.8,0-17.68l42.24-42.24,18.16-18.16,14.09-14.09C146.25,1.22,149.45,0,152.65,0s6.4,1.22,8.84,3.66c2.44,2.44,3.66,5.64,3.66,8.84s-1.22,6.4-3.66,8.84l-56.81,56.82c-4.88,4.88-4.88,12.8,0,17.68l56.82,56.81Z"
		/></svg
	>
</section>
