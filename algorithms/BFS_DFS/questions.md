# When to use Breadth First Search or Depth First Search

## If you know a solution is not far from the root of the tree

Breath First Search because starts at the root and explores all of the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level.

## If the tree is very deep and solutions are rare

Breath First Search because DFS will take longer to find the solution. Depth first search will take longer because it will go deeper in each branch before exploring the other branches. Since solutions are rare it will most likely keep repeating the same nodes over and over again.

## If the tree is very wide

Depth First Search because BFS will need too much memory. BFS will need to store all of the nodes at each level in memory.

## If solutions are frequent but located deep in the tree

Depth First Search because it will find the solution faster than BFS because it will go deeper in each branch before exploring the other branches.

## Determining whether a path exists between two nodes

Depth First Search because that is what DFS does. It will find a path between two nodes.

## Finding the shortest path

Breadth First Search because that is what BFS does. It will find the shortest path between two nodes
