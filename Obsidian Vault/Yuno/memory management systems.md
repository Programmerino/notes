* Vale memory system
	* Exactly one owning reference to mutable values at any given time,  and multiple for immutable objects. It is deallocated when the reference goes out of scope.
		* Calling a function without constructing another reference moves the owning reference to that function
		* The drop function, custom or automatic, is run when it goes out of scope and doesn't have a particular function signature (can take arguments, etc.). If it doesn't have a standard signature, it must be called manually.
		* If DeriveStructDrop is used without creating a drop function, the object will never be automatically destroyed.
		* If there are multiple owning references, small objects (32 bits or fewer) are copied and passed by value while larger objects use SNRC (strategic nonatomic reference counting)
			* No info on SNRC
	* Non-owning references…
* ASAP ([[Proust '17]])
	* The implementation in micro-mitten was significantly slower than a standard GC strategy [[Corbyn '20]].
	* ...
* Passerine's Vaporization
	* Ensures that values are only alive when they are still useful and that all mutations occur in-place
	* Enforced with: 
		* All function parameters are passed as CoW references, and thus only returned objects from a function need to be kept after returning
		* “A form of SSA is performed, where the last usage of any value is not a copy of that value” (is not a CoW reference to that value)
			* See [more](https://slightknack.dev/passerine/vaporization/)
		* All closure references are immutable copies that can be RCd “in an acyclical manner”
		* Functions don't return CoW references
	* Requires a small runtime
* “Counting Immutable Beans” ([[Ullrich '20]])
* Lobster
	* Structs are inlined into the parent. For example, if you create an instance of struct s, the fields are treated as locals in the parent. This is used for objects up to 4 fields. This is particularly useful in areas where small types are used frequently, such as in games and computer graphics where small vectors are used frequently
	* Automated ownership analysis picks an owner for a heap allocation, usually where the first assignment happens, and tries to make all future uses borrows. Rather than erring where this isn't the case, it reference counts at that point.
	* The developer claims it removes around 95% of runtime RC operations
	* It is done concurrently with the type checking algorithm