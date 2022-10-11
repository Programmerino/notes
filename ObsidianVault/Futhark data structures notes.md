* Implement linked-list as a dynamic array where each element is a pair of the value and the index of the successor
	* The problem is that you change worst-case Cons to O(n) since a copy will be required, but maybe this isn't real with amortized analysis since the dynamic array has O(1) insert. To avoid this, we need some hack to get persistence in Futhark
	* We can get additional cache efficiency if we put linked values close to each other…
		* It wouldn't have the exact same properties, but what if we just did an in-place swapping of the array elements such that the next element is always the successor of a linked list node? You might even get the same properties (e.g. cycles) if you bring back the value-index pair, and this ordering is just there for cache efficiency.
			* Maybe you can do this with some cool tree trickery mapped onto the array
* Avoid copies during deletion by replacing the value with () and adjusting the functions to skip the value when encountered
	* This can be split into two separate data structures depending on what the user wants
	* This might be problematic since I seem to remember there being an issue where values of a discriminated union is the size of their largest element, so maybe this should really just be a tuple with a neutral element and a flag to say if it is valid or not
* Memblock
	* You could create an interface so that you can use pointers in Futhark based on an underlying array, since they are essentially equivalent. The disadvantage is that you have to know a starting size. Every operation would be an in-place mutation on that array. The trick is typing.
		* One strategy is to have an array of the largest type available and bit manipulate that type. For example, you can have an array of unsigned 64-bit integers, and serialize all your data in that integer. You might also choose