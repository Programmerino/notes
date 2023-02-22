* [[Root]] represents the [[empty set]], and every [[node]] is the next element in that [[set]] (meaning that a [[node]]'s [[children]] must be greater than that [[node]]'s value). A full [[set]] is constructed when a [[node]] with an "end flag" is found:
![](https://cdn.mathpix.com/cropped/2023_02_20_3fc9f7b0437c356105c2g-02.jpg?height=434&width=548&top_left_y=523&top_left_x=754)
Represents {1, 3}, {1, 3, 5}, {1, 4}, {1, 2, 4}, {2, 4}, {2, 3, 5}

Augmentations:
* Store a table for each node which tells if a value is an end node anywhere below, and if it is, how many nodes to get there (and maybe a pointer to that node or some other data?)
* Store the depth of each node w/ the node
* Store sorted arrays of pointers in the tree for each possible value

An algorithm for finding edges is:
* Check if the current node (a) has a end node descendant  (b) (a direct child is best case, definitely an edge, must continue searching though)
* Recursively search up the tree...
	* Check the current node's siblings' flag table for the current node's value

>That is, a ⊂ b and there does not exist some other set c ∈ S where a ⊂ c ⊂ b.
> {1, 3} -> {1, 3, 5} (direct end node)
> {1, 4} -> {1, 2, 4}
> {2, 4} -> {1, 2, 4}

* Overlapping "prefixes" for sets are represented by a common path from the root to some [[internal vertex]] of the tree
* Every value from the global set is assigned a unique identifier used as an index, so really the values in the above tree would be indices.
Inserting a set:
![[Pasted image 20230219204134.png]]
Traverses the tree by either finding the next element of the set in a path, or creating a new branch to accommodate the new element, setting the last node's end-flag to true.

Exists:


* Maybe when the [[tree]] is being created, create a data structure for each [[node]] which stores the [[depth]] of each sub[[tree]], and then the minimal [[superset]] is

Source: [[storage/66G6TGQ4/paper06]]