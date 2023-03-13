Summary:
* Abstract gives a brief overview of the motivation for the data structure, and then describes the different sections of the paper analyzing the data structure, ending with a comparison to the state-of-the-art.
* Structure
	* Describing the problem of set containment operations, the motivation for solving the problem (including relevant fields of study)
* Introduction
	* A set is simply a collection of values, without any particular order. For example, a set can be {1, 2, 3, 4} which just means a collection of the numbers 1, 2, 3, and 4, although the values can be other kinds of things, like other sets. For example, maybe we could represent the favorite colors of a student as a set, but then we could have a set for all the student's favorite colors like so: {{Red, Purple}, {Blue, Green, Red}, {Green, Red}, ...}. This is would be an example of a set of sets.
		* A superset of a set contains all the values of the original set, but potentially more. For example, in the example above, {Blue, Green, Red} would be a superset of {Green, Red} since that student also has Green and Red as favorite colors, but also Blue. A subset is the reverse of this --- in this example, {Green, Red} is a subset of {Blue, Green, Red} since it contains some of the values from {Blue, Green, Red}, but not all of them.
	* Set containment queries ask, "does this set have any subsets?" or "does this set have any supersets?" and retrieval set containment queries find those relevant subsets/supersets.
	* 
Analysis:
* "is considered"