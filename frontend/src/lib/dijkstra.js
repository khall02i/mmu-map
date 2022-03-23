import Graph from "node-dijkstra";
import { datapoints } from "./datapoints";

const route = new Graph();

for (const datapoint of datapoints) {
	route.addNode(datapoint.name, datapoint.connections);
}

/**
 * Returns the path between two nodes.
 * @returns An array of node names under path
 * and the distance in meters under cost.
 */
export function PathBetween(node1, node2) {
	return route.path(node1, node2, { cost: true });
}
