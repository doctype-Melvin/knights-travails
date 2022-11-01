# Knight Travails
This is another project from the Odin Project's JavaScript path.
You can find the assignment [here](https://www.theodinproject.com/lessons/javascript-knights-travails)

## Goal
Find the shortest path between `Start` and `Target`

## Data Structure 
To solve this problem I've utilized a graph data structure. The graph consists of connected vertices. 
For the problem at hand, an unweighted and undirected graph is the fitting choice. 
The edges between vertices (cells on a chessboard) are made up of legal moves the Knight can make.

## Algorithm
The shortest path between `Start` and `Target` positions is found by using a breadth-first-search algorithm.

### Resources
[This article](https://aquarchitect.github.io/swift-algorithm-club/Shortest%20Path%20(Unweighted)/) helped
me with understanding how to track the distance between `Start` and `Target`. 