<script>
	import NodeSelector from "./components/NodeSelector.svelte";
	import { datapoints } from "./lib/datapoints";
	import { PathBetween } from "./lib/dijkstra";

	let node1;
	let node2;

	const importantNodeNames = datapoints
		.filter((e) => e.important)
		.map((e) => e.name);
</script>

<main>
	<h1>John Dalton Map</h1>

	Point A:
	<NodeSelector nodeNames={importantNodeNames} bind:selectedValue={node1} />

	Point B:
	<NodeSelector nodeNames={importantNodeNames} bind:selectedValue={node2} />

	{#if node1 && node2}
		<hr />

		<code>
			{JSON.stringify(PathBetween(node1, node2), null, "\t")}
		</code>
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
