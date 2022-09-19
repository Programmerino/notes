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
`split` splits strings, etc. with more or one characters or other collections
`reverse`
`keys`
`values`