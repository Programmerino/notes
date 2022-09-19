## Central Ideas
* Automatic/deterministic Rust-like inferred lifetimes (or anything which performs better)
	* Perceus reference counting ([[Reinking '21]])
	* Functional but in-place technologies (FBIP)
* Inferred static types
* FBIP mutation with cache-friendly data structures
* Non-performant operations are made explicit
* Best-effort TypeScript/WASM type-sharing and code sharing
	* Bindings should almost never be necessary
	* First-class support for HTML DSLs which are type-checked, etc. (maybe first-class Web Components?)
	* FFI interfaces can be declared easily by users, type converters are specified which implicitly convert between language data structures
* F#/ML syntax
* Function-level permissions
	* e.g., a function must be granted network permissions to make web requests, etc.
	* This lowers the impact of malicious packages.
	* If possible, make this also work with JavaScript code
* Allocation based on path analysis (maybe assisted with dependent types?)
	* For example, say we start with a user input that we know will be between 0 and 100. We can allocate this as a small, unsigned int, but we notice that it is passed to a function that multiplies its input by 2. Looking ahead, we know that we should allocate a number type that can accommodate numbers up to 200.
* Cases-based optimization
	* If a function accepts a boolean, we can compile two versions of the function, one where the boolean was true and one where the boolean was false. This allows for more optimizations for each variant.
* No meta-programming or reflection.
	* OOP objects/interfaces from JavaScript can be treated like discriminated unions which must be matched against
	* Can this be achieved while also getting type providers?
* Type providers
* No special error-handling language support
* TCO
* Consider parametric modules
* Consider how to handle effects
* Typed holes
* IDE support with LSP
* Nix-based compilation
* Name-based visibility
	* functions/values starting with an underscore are private to the module
* IDE code-path visualization
	* allows typing example inputs to a function and showing the values throughout the function (and how long each step took)
		* Functions passed to map, filter, etc. have their values shown over time with a left/right arrow button and an animation
	* tests can include a link that activates the visualization for the failed case
* IDE optimization analysis
	* List the reasons why optimizations couldn't be performed
	* show optimized IR translated back into the language.
* F# dollar sign-like string interpolation, forcibly type checked.
* Allow vectors to be optimized into arrays by analyzing if new elements are added, or if the pattern in which new elements are added is simple
* Futhark-style lambdas
* Universal Function Call Syntax (UFCS):
```vale
a.f(3).g(true).h("Vendor") = h(g(f(a, 3), true), "Yendor")
```
* Structs, records, and other data structures are accessed with lenses, no special syntax
* Automatically derived functionality…
	* ToString?
* Tuples are anonymous structs with members 0, 1, 2, …
## Language Inspiration
Carp:
![[carp analysis#Goals]]
Vale: