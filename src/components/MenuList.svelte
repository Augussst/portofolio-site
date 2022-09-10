<script>
	import { fly, slide } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import Header from './Header.svelte';
</script>

<a on:click href="#home"
	><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-7 h-7">
		<path
			fill-rule="evenodd"
			d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
			clip-rule="evenodd"
		/>
	</svg>
</a>
<a on:click href="#about">About</a>
<a on:click href="#work">Work</a>
<a on:click href="#social">Social</a>
