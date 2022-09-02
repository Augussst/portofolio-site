<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
	import Logo from '../components/Logo.svelte';
	import Window from '../components/Window.svelte';
	import VideoPlayer from '../components/VideoPlayer.svelte';
	import Table from '../components/Table.svelte';
</script>

<svelte:head>
	<title>okreate</title>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
	/>
</svelte:head>

<Header />

<Window>
	<span id="about" slot="name" class="scroll-mt-main">about</span>
	<div slot="top">
		<div class="logo mx-auto mt-3 mb-8 w-60">
			<Logo />
		</div>
	</div>
	<p slot="inner" class="text-white lg:text-5xl text-3xl text-center font-bold">
		<span class="text-accent font-mono">Hello world</span>, I'm Muhamad Oka Augusta. I'm a web
		developer, instructional designer, video editor, and student based in Bandung, Indonesia.
	</p>
</Window>

<div id="work" class="grid scroll-mt-14 [&>.window:last-child]:my-0 [&>.window:first-child]:my-0">
	<Window>
		<span id="project" slot="name">project</span>
	</Window>
	<Window>
		<span slot="name">work</span>
		<VideoPlayer />
	</Window>
	<Window>
		<span id="work-desc" slot="name">description</span>
	</Window>
</div>

<Window>
	<span id="other-work" slot="name">other work</span>
	<Table />
</Window>

<Window>
	<span id="contact" slot="name" class="scroll-mt-main">contact</span>
	<div slot="inner">
		<p class="text-white lg:text-5xl text-3xl text-center font-bold">
			Interested in working with me? or just want a little chat? Get&nbsp;in&nbsp;touch!
		</p>
		<a href="mailto:okreate@gmail.com" class="btn mx-auto mt-5 text-3xl lg:text-4xl">
			Contact Me
		</a>
	</div>
</Window>

<style global lang="postcss">
	body {
		background-color: var(--root-bg);
	}

	.btn {
		display: block;
		width: fit-content;
		padding: 6px 18px;
		background-color: var(--accent);
		border-radius: 1.5rem;
		color: var(--white);
		font-weight: bold;
		border: 2px solid transparent;

		transition: all 500ms;

		&:hover {
			border: 2px solid var(--white);
		}

		&:active {
			color: var(--root-bg);
		}
	}
</style>
