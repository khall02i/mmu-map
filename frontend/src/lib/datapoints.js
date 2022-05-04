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
		position,
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
	d("Cafe Stairs", true, p(1, 0, 0), { "Doorway A": 3 }),
	d("Doorway A", true, p(1, 0, 0), { "Cafe Stairs": 3, "Hallway A": 2 }),
	d("Hallway A", false, p(1, 0, 0), {
		"Doorway A": 3,
		"Room E145": 0.01,
		"Room E127": 0.01,
		"Hallway B": 2,
	}),
	d("Room E145", true, p(1, 0, 0), { "Hallway A": 0.01 }),
	d("Room E127", true, p(1, 0, 0), { "Hallway A": 0.01 }),
	d("Hallway B", false, p(1, 0, 0), {
		"Hallway A": 2,
		"Room E128": 0.01,
		"Hallway C": 2,
	}),
	d("Room E128", true, p(1, 0, 0), { "Hallway B": 0.01 }),
	d("Hallway C", false, p(1, 0, 0), {
		"Hallway B": 2,
		"Room E129": 0.01,
		"Hallway D": 3,
	}),
	d("Room E129", true, p(1, 0, 0), { "Hallway C": 0.01 }),
	d("Hallway D", false, p(1, 0, 0), {
		"Hallway C": 3,
		"Room E130": 0.01,
		"Room E143": 0.01,
		"Hallway E": 3,
	}),
	d("Room E130", true, p(1, 0, 0), { "Hallway D": 0.01 }),
	d("Room E143", true, p(1, 0, 0), { "Hallway D": 0.01 }),
	d("Hallway E", false, p(1, 0, 0), {
		"Hallway D": 3,
		"Room E131": 0.01,
		"Hallway F": 2,
	}),
	d("Room E131", true, p(1, 0, 0), { "Hallway E": 0.01 }),
	d("Hallway F", false, p(1, 0, 0), {
		"Hallway E": 2,
		"Room E132": 0.01,
		"Hallway G": 6,
	}),
	d("Room E132", true, p(1, 0, 0), { "Hallway F": 0.01 }),
	d("Hallway G", false, p(1, 0, 0), {
		"Hallway F": 6,
		"Room E142": 0.01,
		"Hallway H": 2,
	}),
	d("Room E142", true, p(1, 0, 0), { "Hallway G": 0.01 }),
	d("Hallway H", false, p(1, 0, 0), {
		"Hallway G": 2,
		"Room E133": 0.01,
		"Hallway I": 2,
		"Hallway I": 6,
	}),
	d("Room E133", true, p(1, 0, 0), { "Hallway H": 0.01 }),
	d("Hallway I", false, p(1, 0, 0), { "Hallway H": 2, "Doorway B": 3 }),
	d("Doorway B", true, p(1, 0, 0), { "Room E136": 0.01, "Hallway J": 3 }),
	d("Room E136", true, p(1, 0, 0), { "Doorway B": 0.01 }),
];

export const datapointMap = new Map(datapoints.map((e) => [e.name, e]));
