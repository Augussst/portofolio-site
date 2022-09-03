<script>
	import Window from './Window.svelte';
	import VideoPlayer from './VideoPlayer.svelte';
</script>

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
