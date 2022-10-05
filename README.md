# Knight Travails
This is another project from the Odin Project's JavaScript path.
You can find the assignment [here](https://www.theodinproject.com/lessons/javascript-knights-travails)

## Goal
Find the shortest path between `Start` and `Target`

## Personal notes
This project was to me the hardest since (badly) coding the ToDo app a couple months back. 
In the weeks prior to this project, I went through all the info about 
Binary Search Trees, breadth-first-search, depth-first-search and level-order-traversal.
It started off with linked lists, which was not too bad. But going into BST, I felt absolutely overwhelmed.
Now, Knights Travails to me is another kind of beast. It took me days to comprehend what kind of problems I'd be 
about to solve - and I'm not too sure if I genuinely did comprehend the scope of this project.

## Approach
This time I really needed some extra inspiration. I've resorted to looking up other people's code since
I couldn't come up with any starting point myself whatsoever. 

### The chessboard
The chessboard where the Knight should move on was the first part I've coded. My intuiton told me
to use CSS grid for this and of course, one can easily create an 8x8 chessboard with it. 
The problem I've faced with this approach was, that I couldn't figure out a practical way of
assigning coordinates to the board's fields. 
So I had to go back and create the board using a table element. 

#### Origin of the board
I had to start the loop with a negative integer and turn it into an absolute value later on. This way I could preserve
the logic of having the board's origin in the lower left hand corner, which translates to the coordinates [0,0].

#### Resources
[This video](https://www.youtube.com/watch?v=Y40bRyPQQr0&ab_channel=GeeksforGeeks) from the GeeksForGeeks YT channel
helped me with tying together the knowledge from previous lessons with the current problem of the Knights Travails.
It goes over the depth first traversal of a graph.