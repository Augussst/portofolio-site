<script>
	import { getRoutes } from '../../metadata';

	const routes = getRoutes();
	console.log(routes);
</script>

<ul>
	{#each routes as route}
		<li>
			<a href={route.path}>{route.title}</a>
		</li>
	{/each}
</ul>
