<script>
	let x;
	let y;
	let sh;
	let sw;
	let deg;
	let centerXCoordinate;
	let centerYCoordinate;
	let mouseEnter = false;

	function handleMousemove(event) {
		x = event.clientX;
		y = event.clientY;

		centerXCoordinate = sw / 2;
		centerYCoordinate = sh / 2;
		const deltaX = centerXCoordinate - x;
		const deltaY = centerYCoordinate - y;
		const rad = Math.atan2(-deltaY, -deltaX);
		deg = Math.round(rad * (180 / Math.PI));
		if (deg < 0) {
			deg = (deg + 360) % 360;
		}
	}

	function revealAnimation(mouseEnter) {
		return `${mouseEnter ? 'w-[1500px] h-[1500px]' : 'w-0 h-0'}`;
	}
</script>

<section
	on:mousemove={handleMousemove}
	bind:clientHeight={sh}
	bind:clientWidth={sw}
	on:click={() => {
		mouseEnter = !mouseEnter;
	}}
	on:keypress={() => {
		mouseEnter = !mouseEnter;
	}}
	class="relative h-[97vh] border-2 overflow-hidden m-3 rounded-xl variant-glass-secondary"
>
	<div
		class="absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto w-fit h-fit"
		style="rotate: {deg ?? 0}deg;"
	>
		<div
			class="clip absolute -z-10 top-0 bottom-0 left-0 right-0 mx-auto my-auto rotate-45
			translate-x-[20.5%] transition-all duration-500 {revealAnimation(mouseEnter)}
			border bg-primary-500"
		/>
	</div>
	<svg
		id="Layer_1"
		style="rotate: {deg ?? 0}deg;"
		class="h-24 fill-primary-500 absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 165.15 173.99"
		><path
			d="M109.79,139.84l17.79,17.78c-12.82,8.05-27.98,12.7-44.24,12.7C37.31,170.33,0,133.02,0,87S37.31,3.66,83.33,3.66c16.26,0,31.42,4.65,44.24,12.7l-17.79,17.78-.55,.55c-7.95-3.95-16.77-6.03-25.9-6.03-15.58,0-30.23,6.07-41.25,17.09-11.02,11.02-17.08,25.67-17.08,41.25,0,15.58,6.07,30.23,17.09,41.25,11.02,11.02,25.67,17.08,41.25,17.08,9.14,0,17.95-2.09,25.9-6.04l.55,.55Z"
		/><path
			d="M161.49,152.65c4.88,4.88,4.88,12.8,0,17.68-2.44,2.44-5.64,3.66-8.84,3.66s-6.4-1.22-8.84-3.66l-14.09-14.09-18.16-18.16-42.24-42.24c-4.88-4.88-4.88-12.8,0-17.68l42.24-42.24,18.16-18.16,14.09-14.09C146.25,1.22,149.45,0,152.65,0s6.4,1.22,8.84,3.66c2.44,2.44,3.66,5.64,3.66,8.84s-1.22,6.4-3.66,8.84l-56.81,56.82c-4.88,4.88-4.88,12.8,0,17.68l56.82,56.81Z"
		/></svg
	>
</section>
