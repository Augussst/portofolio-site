<script>
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	// Site setting
	import * as sites from '$content/settings.md';
	const site = sites.metadata;
</script>

<div>
	<AppBar
		background="bg-default"
		padding="p-2"
		gridColumns="grid-cols-3"
		slotLead="font-bold text-4xl font-heading-token"
		slotDefault="place-self-center"
		slotTrail="place-content-end font-bold text-4xl font-heading-token"
	>
		<svelte:fragment slot="lead">{site.siteName}</svelte:fragment>
		<img class="h-10" src={site.siteLogo} alt="okreate logo" />
		<svelte:fragment slot="trail">{site.author}</svelte:fragment>
	</AppBar>
	<div class="w-full h-8 border-token border-secondary-500 dark:border-primary-500">
		<ul class="flex items-center h-full w-fit mx-auto gap-5 font-heading-token">
			<li
				class="flex text-xl px-1 h-full items-center transform transition duration-250 bg-default-hover text-default-hover"
			>
				<a href="#projects">projects</a>
			</li>
			<li
				class="flex text-xl px-1 h-full items-center transform transition duration-250 bg-default-hover text-default-hover"
			>
				<a href="#social">social</a>
			</li>
			<li
				class="flex text-xl px-1 h-full items-center transform transition duration-250 bg-default-hover text-default-hover"
			>
				<a href="#contact">contact</a>
			</li>
		</ul>
	</div>
	<LightSwitch />
</div>
