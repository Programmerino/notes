## Team: Davis Davalos-DeLosh
[Futhark](https://futhark-lang.org/) is a purely functional, research programming language which aims to be highly performant through heavy optimization and efficient generation of GPU code. Because the language is GPU-oriented, it lacks many ordinary features (such as recursion or references) since they cannot be used efficiently in the programming model it imposes. Because of this, there exist very few, if any, non-trivial data structures in the language.

Despite these limitations, Futhark supports [uniqueness types](https://futhark-lang.org/blog/2022-06-13-uniqueness-types.html) which are a kind of linear typing which allow for heavily-restricted in-place mutation of some types of data (at least records and arrays). Because of this, I think a data structure could still practically be made in the language.

I would like to try to implement a performant hash table under these restrictions. While I don't have an exact plan, and the general methodology might change, I expect to base my implementation on the open-address hash table described in class, since it seems like the only practical solution which is representable in Futhark without implementing additional data structures[^1]. I plan to use probing based on the double-hashing algorithm described in class, although if time allows, I may investigate the performance benefits of using other methods like quadratic probing.

To make a hash table, I would have to implement some common hash functions used in hash tables since it doesn't seem like anyone as implemented any (outside of [Poseidon](https://github.com/filecoin-project/neptune-triton) which seems to be highly specialized).

Since that doesn't seem like two weeks work, I would also try to create a dynamic array, avoiding the pitfalls discussed in class, since that seems like it would be valuable to the community if it ended up being practical to use.

## References
[1] T. Henriksen, “Should we ban recursive functions from Futhark? · Issue #273 · diku-dk/futhark,” GitHub, Jan. 11, 2017. https://github.com/diku-dk/futhark/issues/273 (accessed Oct. 03, 2022).

[2] DIKU, “Uniqueness Types and In-Place Updates,” Jun. 13, 2022. https://futhark-lang.org/blog/2022-06-13-uniqueness-types.html (accessed Oct. 03, 2022).

[3] T. Henriksen, N. G. W. Serup, M. Elsman, F. Henglein, and C. E. Oancea, “Futhark: purely functional GPU-programming with nested parallelism and in-place array updates,” in Proceedings of the 38th ACM SIGPLAN Conference on Programming Language Design and Implementation, New York, NY, USA, Jun. 2017, pp. 556–571. doi: 10.1145/3062341.3062354.


[^1]: Futhark does not have anything similar to linked lists built-in, so I wouldn't be able to create a hash table using chaining without first implementing an array-based linked-list-like structure.