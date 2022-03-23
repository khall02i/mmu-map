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

	// an array of nodes this point is connected to.
	// Also contains the distance between the two points in meters.
	connections: [
		{ name: "1st_floor_hallway_01", dist: 1 },
		{ name: "1st_floor_hallway_03", dist: 1 },
	],
};

/**
 * Utility function for defining a connection.
 * @param {string} name - The name of the node this node is connected to.
 * @param {number} dist - How far away this node is.
 */
function c(name, dist) {
	return { name, dist };
}

/**
 * Utility function for defining a datapoint.
 *
 * @param {string} name - The name for this datapoint.
 * @param {boolean} important - Whether this datapoint is important or not.
 * @param {...connections} connections - The rest of the arguments are { name, dist } objects.
 */
function d(name, important, ...connections) {
	return {
		name,
		important,
		connections
	}
}

const datapoints = [];
