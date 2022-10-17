# Knight Travails
This is another project from the Odin Project's JavaScript path.
You can find the assignment [here](https://www.theodinproject.com/lessons/javascript-knights-travails)

## Goal
Find the shortest path between `Start` and `Target`

### Pitfalls
Strict equality check of Map.prototype.get(): This method performs a strict equality check. 
I've used arrays to set the keys in my Map. It took me a while until I figured out why I can't
use `get()` to access my key arrays. Stric equality returns `false` for array comparison. Therefore I had 
to store the arrays as strings. 

#### Resources
[This video](https://www.youtube.com/watch?v=Y40bRyPQQr0&ab_channel=GeeksforGeeks) from the GeeksForGeeks YT channel
helped me with tying together the knowledge from previous lessons with the current problem of the Knights Travails.
It goes over the depth first traversal of a graph.
[This article](https://www.digitalocean.com/community/tutorials/understanding-map-and-set-objects-in-javascript) explains the `Map()`-object. `Map()` is basically an object that stores key-value pairs in an array-type fashion (indexed list).
I ended up studying [this solution](https://www.geeksforgeeks.org/minimum-steps-reach-target-knight/?ref=gcse) and rewire 
it to fit my initial approach.