
* SOACs
	* Parallel operators have equivalent *work* (conventional complexity) to their sequential counterparts (e.g, reduce and foldl), but *span* differs as it refers to the longest chain of sequential dependencies. In this case, `foldl` would have a span of `O(n)` while `reduce` would have a span of `O(log(n))`.
* Scans and reductions
	* Avoid using arrays as the values being iterated over (e.g. when using a 2D array)
	* Sequentialize loops over small arrays, either by unrolling it manually or using a fold
	* If used as a value/dependency to another parallel operation, fusion does not occur.
* Nested parallelism
	* Multicore generates a parallelized and sequential version for each instance of nested parallelism which a scheduler chooses at runtime
	* Irregular parallelism can cause the compiler to sequentialize code on GPU backends
* Use Futhark autotune
* Types
	* Unsigned and signed variants of numbers can be converted between each other for free
	* Sum types
		* Memory inefficient and store the composite size of all constructors (they are implemented as tuples) unless the constructors store elements of the same type
			* Option, etc. should be avoided
	* Tuples/Records
		* Copied by value as loop parameters and in function calls
			* You could probably box this by making a singleton array…
		* Records are syntactic sugar for tuples
	* 2D+ arrays
		* Stored in flattened form
		* Creating them requires copying the subarrays so they can be flattened which can be expensive if they are large
		* Generally uses row-major order
	* Arrays of tuples/records/sum types
		* Stored as a tuple of arrays for each element. Thus, `zip` and `unzip` are free.
	* Arrays
		* Slicing, take, drop, transpose, and reverse are usually free, but…
			* Returning different arrays from an `if` branch can cause a copy
			* Using an array as a loop accumulator can cause a copy if it is modified
			* Using it as the element in a multidimensional array always causes a copy, as well as when a `map` expression returns an array
		* Avoid them when there are 5 or less elements
			* Use tuples, records, or athas vectors instead
* Modules can be used to help the inliner optimize more
* Sequential loops
	* Avoid having a large tuple as the accumulator in a loop expression
* HOFs
	* Incurs slight overhead
* 