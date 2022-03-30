// This file contains the datapoints for the map.
// Datapoints look like this.

function p(floor, xPos, yPos) {
	return { floor, x: xPos, y: yPos };
}

/**
 * Utility function for defining a datapoint.
 *
 * @param {string} name - The name for this datapoint.
 * @param {boolean} important - Whether this datapoint is important or not.
 * @param {Position} position - Where this point should be rendered visually.
 * @param connections - An object of name -> dist mappings.
 */
function d(name, important, position, connections) {
	return {
		name,
		important,
		connections,
	};
}

// eslint-disable-next-line no-unused-vars
const _exampleDatapoint = d(
	// The name of this location. Should be human readable if
	// this node is important.
	"C1.01",
	// Whether this location is 'important' or not.
	// Important points can be selected by users to be
	// somewhere to come from or go to.
	//
	// Un-important locations would be things like paths through
	// hallways.
	// Important locations would be things like rooms or entrances.
	true,
	// Where this node should visually be drawn on the maps.
	// this is FLOOR, X, Y.
	p(1, 10, 20),
	// a map of nodes this point is connected to.
	// Also contains the distance between the two points in meters.
	{
		"1st_floor_hallway_01": 1,
		"1st_floor_hallway_03": 1,
	}
);

export const datapoints = [
	d("Room A", true, p(0, 10, 25), { "Hallway A": 0.5 }),
	d("Hallway A", false, p(0, 20, 25), { "Room B": 10, "Room A": 0.5 }),
	d("Room B", true, p(0, 30, 25), { "Hallway A": 10 }),
];

export const datapointMap = new Map(datapoints.map((e) => [e.name, e]));
