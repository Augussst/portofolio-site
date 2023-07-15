<script>
	let path = {
		top: '50% 50%, 20% 0, 20% 0, 80% 0, 80% 0',
		left: '50% 50%, 25% 100%, 0 100%, 0 0, 25% 0',
		bottom: '50% 50%, 80% 100%, 80% 100%, 20% 100%, 20% 100%',
		right: '50% 50%, 75% 0, 100% 0, 100% 100%, 75% 100%'
	};
	let deg = 0;
	function closestEquivalentAngle(from, to) {
		var delta = ((((to - from) % 360) + 540) % 360) - 180;
		return from + delta;
	}
	let clipPath = path.right;
</script>

<!-- <div class="">
	<button
		on:click={() => {
			clipPath = path.top;
			deg = closestEquivalentAngle(deg, 270);
		}}
		class="btn variant-ghost-success rounded-full">Top</button
	>
	<button
		on:click={() => {
			clipPath = path.left;
			deg = closestEquivalentAngle(deg, 180);
		}}
		class="btn variant-ghost-success rounded-full">Left</button
	>
	<button
		on:click={() => {
			clipPath = path.bottom;
			deg = closestEquivalentAngle(deg, 90);
		}}
		class="btn variant-ghost-success rounded-full">Bottom</button
	>
	<button
		on:click={() => {
			clipPath = path.right;
			deg = closestEquivalentAngle(deg, 0);
		}}
		class="btn variant-ghost-success rounded-full">Right</button
	>
</div> -->

<section class="h-screen flex flex-col gap-5 items-center justify-center overflow-hidden">
	<div
		class="variant-glass-primary relative md:aspect-video aspect-[9/16] border rounded-xl h-[98vh] overflow-hidden"
	>
		<button
			on:click={() => {
				clipPath = path.top;
				deg = closestEquivalentAngle(deg, 270);
			}}
			class="
            absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto -translate-y-60
            btn h-fit w-fit variant-ghost-success rounded-full
            ">Top</button
		>
		<button
			on:click={() => {
				clipPath = path.left;
				deg = closestEquivalentAngle(deg, 180);
			}}
			class="
            absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto -translate-x-60
            btn h-fit w-fit variant-ghost-success rounded-full
            ">Left</button
		>
		<button
			on:click={() => {
				clipPath = path.bottom;
				deg = closestEquivalentAngle(deg, 90);
			}}
			class="
            absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto translate-y-60
            btn h-fit w-fit variant-ghost-success rounded-full
            ">Bottom</button
		>
		<button
			on:click={() => {
				clipPath = path.right;
				deg = closestEquivalentAngle(deg, 0);
			}}
			class="
            absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto translate-x-60
            btn h-fit w-fit variant-ghost-success rounded-full
            ">Right</button
		>

		<svg
			class="
			absolute z-30 top-0 bottom-0 left-0 right-0 mx-auto my-auto
			scale-[0.07] fill-primary-500 transition-all duration-300
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
		<div
			style="clip-path: polygon({clipPath});"
			class="w-full h-full variant-glass-secondary transition-all duration-300"
		>
			<div class="w-full h-full relative">
				<div
					id="top"
					class="
                    absolute right-0 left-0 top-0 mx-auto
                    h-1/2 border border-blue-500 flex items-center justify-center
                    "
				>
					top
				</div>
				<div
					id="right"
					class="
                    absolute right-0 top-0 bottom-0 my-auto
                    w-1/2 border border-red-500 flex items-center justify-center
                    "
				>
					right
				</div>
				<div
					id="left"
					class="
                    absolute left-0 top-0 bottom-0 my-auto
                    w-1/2 border border-green-500 flex items-center justify-center
                    "
				>
					left
				</div>
				<div
					id="bottom"
					class="
                    absolute right-0 left-0 bottom-0 mx-auto
                    h-1/2 border border-orange-500 flex items-center justify-center
                    "
				>
					bottom
				</div>
			</div>
		</div>
	</div>
</section>
