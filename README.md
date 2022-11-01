# Knight Travails
This is another project from the Odin Project's JavaScript path.
You can find the assignment [here](https://www.theodinproject.com/lessons/javascript-knights-travails)

## Goal
Find the shortest path between `Start` and `Target`.

## Data Structure 
To solve this problem I've utilized a graph data structure. The graph consists of connected vertices. 
For the problem at hand, an unweighted and undirected graph is the fitting choice. 
The edges between vertices (cells on a chessboard) are made up of legal moves the Knight can make.

## Algorithm
The shortest path between `Start` and `Target` positions is found by using a breadth-first-search algorithm.
All neighboring cells are queued up and checked if they match the target. Each newly visited vertex
represents a new step on the path and keeps track of its parent vertex. This way, when the target is reached,
the path may be printed step-by-step by backtracking the parent vertecies. 

### Resources
[This article](https://aquarchitect.github.io/swift-algorithm-club/Shortest%20Path%20(Unweighted)/) helped
me with understanding how to track the distance between `Start` and `Target`.
The Geeks for Geeks [article](https://www.geeksforgeeks.org/implementation-graph-javascript/) about implementing
a Graph in JavaScript came in handy, too. 

### Difficulties
Knight's Travails has been the hardest coding problem I've come to face with, yet. The hardest part for me was to
figure out a way to track the steps in the path. But I've also put myself in a bad position as I've tried many different 
approaches to creating a graph data structure. Also I had problems with thinking of an efficient way to manage my
vertices. In the end I resorted to creating objects that hold the data. 
Instead of using as little code as possible, I've tried to make the code as readable and understandable as possible -
at this point. All in all, this project took me four weeks to finish (only the console program, no GUI).