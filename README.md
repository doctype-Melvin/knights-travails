# Knight Travails
This is another project from the Odin Project's JavaScript path.
You can find the assignment [here](https://www.theodinproject.com/lessons/javascript-knights-travails)

## Goal
Find the shortest path between `Start` and `Target`

### Prerequisites
A `graph` can represent a network and can be used to determin an optimal path between two `vertices`.
This makes the graph the desired data structure to solve the Knight's travails problem.
A chessboard will be represented in a `graph` data structure. A `graph` consists of a set of 
`vertices` which are connected by `edges`. An `edge` is made up of a pair of `vertices`. 
In this particular case the vertices are the cells of the chessboard. The edges are determined 
by the legal moves the knight can make.
[This article](https://jarednielsen.com/data-structure-graph-breadth-first-search/) was very helpful 
for setting up this project.
[GfG](https://www.geeksforgeeks.org/implementation-graph-javascript/)

### Setup 
First I've created the two dimensional board using two loops. First loop sets the x coordinate and the
second sets the y coordinate. Both go into an array. Another empty array is created which will serve as 
the adjacency list later on. Both elements (coordinates and empty adjacency list) go into an array,
which itself represents a cell on the board. Essentially this creates the graph data structure. 

Next I've created two arrays (dx & dy) that hold all the possible moves the knight can make. In another loop
I create the actual edges between the cells. The legal moves now populate the adjacency list of the cell of origin.

### Outcome
This was the hardest problem I've worked on so far. 