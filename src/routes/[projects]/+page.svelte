<script>
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	export let data;
</script>

{#key data.url}
	<section class="p-3" in:fade={{ delay: 250 }} out:fade>
		<pre>{JSON.stringify(data, null, 2)}</pre>
		<h1>This is left</h1>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione modi optio quasi obcaecati
			dignissimos, distinctio expedita beatae aliquam nemo quis vero, repellendus, sapiente enim
			rem? Rerum doloremque quibusdam molestias veniam.
		</p>
	</section>
{/key}
