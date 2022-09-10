<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
	import Logo from '../components/Logo.svelte';
	import Window from '../components/Window.svelte';
	import Work from '../components/Work.svelte';
	import Table from '../components/Table.svelte';
</script>

<svelte:head>
	<title>okreate</title>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
	/>
	<script src="https://kit.fontawesome.com/ecb271c71c.js" crossorigin="anonymous"></script>
</svelte:head>

<Header />

<Window>
	<span id="about" slot="name" class="scroll-mt-main">about</span>
	<div slot="top">
		<div class="logo mx-auto mt-3 mb-8 w-60">
			<Logo />
		</div>
	</div>
	<p slot="inner" class="text-white lg:text-4xl text-3xl text-center font-bold">
		<span class="text-accent font-mono">Hello world</span>, I'm Muhamad Oka Augusta. I'm a web
		developer, instructional designer, video editor, and student based in Bandung, Indonesia.
	</p>
</Window>

<Work />

<Window>
	<span id="other-work" slot="name">other work</span>
	<Table />
</Window>

<Window>
	<span id="social" slot="name">social</span>
	<div class="flex justify-around">
		<div class="social px-5 py-5 lg:px-16 lg:py-10">
			<i class="fa-brands text-5xl lg:text-8xl fa-instagram" />
			<a class="btn capitalize" href="https://www.instagram.com/oka.augusta" target="_blank"
				>instagram</a
			>
		</div>
		<div class="social px-5 py-5 lg:px-16 lg:py-10">
			<i class="fa-brands text-5xl lg:text-8xl fa-behance" />
			<a class="btn capitalize" href="https://www.behance.net/" target="_blank">Behance</a>
		</div>
		<div class="social px-5 py-5 lg:px-16 lg:py-10">
			<i class="fa-brands text-5xl lg:text-8xl fa-linkedin-in" />
			<a class="btn capitalize" href="https://www.linkedin.com/in/okaaugust/" target="_blank"
				>Linkedin</a
			>
		</div>
	</div>
</Window>

<Window>
	<span id="contact" slot="name" class="scroll-mt-main">contact</span>
	<div slot="inner">
		<p class="text-white lg:text-4xl text-3xl text-center font-bold">
			Interested in working with me? or just want a little chat? Get&nbsp;in&nbsp;touch!
		</p>
		<a href="mailto:okreate@gmail.com" class="btn mx-auto mt-5 text-3xl"> Contact Me </a>
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

	.social {
		display: flex;
		flex-direction: column;
		align-items: center;
		/* padding: 2.5rem 4rem; */
		border: 1px solid var(--inner-container-accent);
		background-color: var(--inner-container-bg);
	}

	.fa-brands {
		color: var(--white);
		margin-bottom: 34px;
	}
</style>
