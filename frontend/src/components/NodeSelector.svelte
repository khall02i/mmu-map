<script>
	export let nodes;
	export let selectedValue;

	function FormatFloor(floor) {
		if (floor === 0) {
			return "Ground Floor";
		}

		return "Floor " + floor;
	}
</script>

<select bind:value={selectedValue}>
	<option value={null}>Please select a room</option>
	{#each nodes as node}
		<option value={node.name}
			>{FormatFloor(node.position.floor)}: {node.name}</option
		>
	{/each}
</select>
