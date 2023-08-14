<script>
	import { page } from '$app/stores';
</script>

<main class="flex flex-col gap-5 h-full items-center justify-center">
	<div class="text-center">
		<h1 class="h1 text-8xl">NOT OK</h1>
		<h2 class="h2 font-token text-2xl">{$page.status}: {$page.error.message}</h2>
	</div>
	<a href="/" class="btn variant-outline-primary hover:variant-filled-primary rounded-xl">Home</a>
</main>
