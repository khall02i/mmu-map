// This file contains the datapoints for the map.
// Datapoints look like this.

const exampleDatapoint = {
	// The name of this location. Should be human readable if
	// this node is important.
	name: "C1.01",
	// Whether this location is 'important' or not.
	// Important points can be selected by users to be
	// somewhere to come from or go to.
	//
	// Un-important locations would be things like paths through
	// hallways.
	// Important locations would be things like rooms or entrances.
	important: true,

	// a map of nodes this point is connected to.
	// Also contains the distance between the two points in meters.
	connections: {
		"1st_floor_hallway_01": 1,
		"1st_floor_hallway_03": 1,
	},
};

/**
 * Utility function for defining a datapoint.
 *
 * @param {string} name - The name for this datapoint.
 * @param {boolean} important - Whether this datapoint is important or not.
 * @param connections - An object of name -> dist mappings.
 */
function d(name, important, connections) {
	return {
		name,
		important,
		connections
	}
}

export const datapoints = [];

export const datapointMap = new Map(
	datapoints.map(e => [e.name, e])
);
