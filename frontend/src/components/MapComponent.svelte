<script>
	let floor = 0;

	import svgPanZoom from "svg-pan-zoom";

	function applyZoom() {
		svgPanZoom("#map");
	}
</script>

<div class="map-container">
	<div class="floor-select">
		Map Floor:
		<select bind:value={floor}>
			<option value={0}>Ground Floor</option>
			<option value={1}>1st Floor</option>
			<option value={2}>2nd Floor</option>
			<option value={3}>3rd Floor</option>
		</select>
	</div>
	<hr />
	<div class="map-img-container">
		<object
			on:load={() => applyZoom()}
			id="map"
			data={"/maps/" + floor + ".svg"}
			title="A map of MMU"
			height={1000}
			width={1000}
		/>
	</div>
</div>

<style>
	hr {
		width: 100%;
		margin: 0;
	}

	.map-container {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.floor-select {
		margin-left: auto;
		margin-right: auto;
	}

	.map-img-container {
		width: 100%;
	}
</style>
