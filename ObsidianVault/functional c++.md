### Fold
`std::accumulate`
### Function Type Notation
``auto name(args) -> out`
### Map
`std::transform`
OR with ranges:
``std::views::transform([](const int x) {return n * n;})``
### Option
`std::optional`
### Pipe
With ranges, simply use `|`.
### Filter
With ranges:
```
std::views::filter([](const int n) {return n % 3 == 0; })
```
### Type Inference
Use `auto`
### Ranges Overview (Functor operators)
Can be enabled with `c++latest`.
* Ranges are iterators, and when operators are used on collections, they become views
* View overhead is constant time
* Range adaptors (functors) do not mutate the ranges they are applied to
* View elements are evaluated lazily
* There are different kinds of ranges:
	* Input ranges can be iterated from beginning to end at least once
	* Forward ranges can be iterated from beginning to end more than once
	* Bidirectional ranges can be iterated forward and backward more than once
	* Random access ranges allow arbitrary element access in constant time
	* Contiguous ranges have elements stored in memory consecutively.
`all` takes all elements
`filter`
`transform` is map
`take`
`take_while`
`drop`
`drop_while`
`join` is flatten
`split/lazy_split` splits strings, etc. with more or one characters or other collections
`reverse`
`elements` returns the Nth components from a view of tuples
`keys`
`values`
`zip`
`zip_transform`
`adjacent` creates a tuple for each element with the left and right neighbors
``adjacent_transform``
``join_with``
``slide`` seems like it makes a sliding window
``chunk``
``chunk_by``
`counted` gets a range from i to k from a view
##### Range operators (excluding ones which have view implementations)
`adjacent_find` finds two adjacent elements which are equal to each other
`all_of` checks if a bool applies to all elements
`any_of` checks if a bool applies to any elements
`none_of` checks if a bool is false for all elements
`count` is length
`count_if` is length but doesn't count elements not satisfying a condition
`contains/contains_subrange
`find/find_if/find_if_not/find_end/find_last...`
`fold_left`
`fold_right`
`for_each`
...
#### Creating Views ("Factories")
`empty`
`single` creates a singleton view
`iota`
`istream` converts an istream into a view
`repeat`
`cartesian_product`
##### Range Factories
`iota_result` is like iota with step size


