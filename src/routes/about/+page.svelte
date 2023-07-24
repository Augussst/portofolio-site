<script>
	import * as about_metadata from '$cms/settings/about.md';
	const about = about_metadata.metadata;
</script>

<div class="flex flex-col gap-3 items-center justify-center w-full h-full">
	<img class="w-28 rotate-[-15deg] rounded-full grayscale" src={about.picture} alt="" />
	<span>Hi, I'm {about.name}</span>
</div>
