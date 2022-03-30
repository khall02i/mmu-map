<script>
	import NodeSelector from "./components/NodeSelector.svelte";
	import MapComponent from "./components/MapComponent.svelte";
	import { datapoints } from "./lib/datapoints";
	import { PathBetween } from "./lib/dijkstra";

	let node1;
	let node2;

	const importantNodes = datapoints.filter((e) => e.important);
</script>

<main>
	<h1>John Dalton Map</h1>

	Take me from
	<NodeSelector nodes={importantNodes} bind:selectedValue={node1} />

	to
	<NodeSelector nodes={importantNodes} bind:selectedValue={node2} />

	{#if node1 && node2}
		<hr />

		<code>
			{JSON.stringify(PathBetween(node1, node2), null, "\t")}
		</code>
	{/if}
	<hr />

	<section>
		<MapComponent />
	</section>

	<hr />
	<footer>(c) 2022 Team 1Indigo</footer>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		min-height: 100%;
		margin-bottom: -30px;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	footer {
		position: sticky;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
