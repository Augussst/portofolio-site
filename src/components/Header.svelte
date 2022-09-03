<script>
	import MenuList from './MenuList.svelte';
	import { fly, slide, fade } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';

	export let menuMargin = 100;

	function ToggleNav() {
		if (menuMargin == 100) {
			menuMargin = 0;
		} else {
			menuMargin = 100;
		}
	}
</script>

<div class="h-12" />

<header
	class="flex fixed top-0 w-full justify-between navbar items-center bg-containerbg text-gray text-xl h-12 px-7 lg:px-20 z-40"
>
	<div on:click={ToggleNav} class="btn-menu lg:hidden sm:visible inline-flex z-10 cursor-pointer">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-7 h-7">
			<path
				fill-rule="evenodd"
				d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
				clip-rule="evenodd"
			/>
		</svg>
	</div>
	<div class="menus gap-8 inline-flex z-10 h-full lg:visible invisible">
		<MenuList />
	</div>
	<h1 class="title absolute inset-x-0 inset-y-0 text-white flex justify-center items-center">
		okreate
	</h1>
	<div class="menus inline-flex z-10 h-full">
		<a on:click={ToggleNav} href="#contact">Contact</a>
	</div>
</header>

{#key menuMargin}
	<div
		id="slide-menu"
		class="sm-menus-container flex fixed lg:hidden z-50"
		style="margin-left: {menuMargin}%;"
	>
		<div
			transition:slide={{ duration: 500, easing: quintInOut }}
			class="sm-menus text-xl flex gap-2 flex-col h-screen text-gray bg-containerbg py-5 w-60"
		>
			<MenuList />
		</div>
		<div
			in:fly={{ delay: 350, duration: 500 }}
			out:fly={{ duration: 500 }}
			on:click={ToggleNav}
			class="sm-menus-bg w-screen h-screen bg-rootbg bg-opacity-80"
		/>
	</div>
{/key}

<style global lang="postcss">
	.menus,
	.sm-menus {
		a {
			display: flex;
			align-items: center;
			height: 100%;

			&:hover {
				color: var(--white);
			}

			&:active {
				color: var(--white);
			}
		}
	}
	.menus {
		a:not(:first-child):active {
			border-bottom: 1px solid white;
		}
	}

	.sm-menus {
		a {
			position: relative;
			height: 2.5rem;
			padding-left: 1.75rem;

			&:not(:first-child):active::before {
				content: '';
				width: 100%;
				height: 100%;
				position: absolute;
				left: 0;
				background-color: var(--white);
				opacity: 0.3;
			}
		}
	}
</style>
