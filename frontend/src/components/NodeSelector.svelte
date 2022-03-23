<script>
	export let nodeNames;
	export let selectedValue;
</script>

<select bind:value={selectedValue}>
	<option value={null}>Please select a room</option>
	{#each nodeNames as node}
		<option>{node}</option>
	{/each}
</select>
