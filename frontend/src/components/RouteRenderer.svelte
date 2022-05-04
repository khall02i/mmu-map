<script>
	import { PathBetween } from "../lib/dijkstra";

	export let node1;
	export let node2;

	$: path = PathBetween(node1, node2);
</script>

<code>
	{JSON.stringify(path, null, "\t")}
</code>
