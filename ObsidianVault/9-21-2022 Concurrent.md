* An order is a definition of $\preceq$ (precedes or equals) for a set where $\preceq$ is [[reflexive]], [[antisymmetric]], and [[transitive]]
	* A total order allows for comparison across all objects (comparability)
* A total order can have each element chained based on the definition (e.g., integers) while a partial order does not define comparison for each pair of elements (for example, $\subseteq$ with $\{1,2\} \subseteq \{1,3\}$ being incomparable while $\{1\} \subseteq \{1,2\}$ is comparable ({1} precedes {1, 2})). If two elements are incomparable under a partial order, we use the syntax $a \asymp b$ or $a \mid b$.
	* A cover is the graph of an order without edges following from the transitive property.
* For concurrency…
	* Incomparable means unordered, or that they can happen in any order or at the same time
	* This appears because events typically form a total order with time in single-threaded programming – an instruction is run after this instruction, and so on. Concurrent programs form partial orders with time because certain sections (e.g., an initialization step before multithreaded processing) can be ordered, but many parts cannot (e.g., the instruction sin the multithreaded section).
* Critical sections under a lock form a total order at runtime, but form a partial order with multiple locks...
* The Sequenced-Before order is the direct interpretation of a program (the obvious one, barring optimizations by the compiler and processor)
* The Synchronizes-with order connects two threads of execution. For example, if thread 1 obtains a lock and increments a counter by 1 (then unlocking), followed by thread 2 obtaining the lock and incrementing, there is an order between these threads of execution
	* This can be runtime-based or known at compile-time
* The ~~Intra-thread~~ happens-before (or program) order is the combination of the Sequenced-Before order and the Synchronizes-with order
* A data race happens when two critical sections or barrier phases are unordered with respect to each other, access the same memory, and have at least one writing access.
* Valgrind can be used to detect data races, lock starvation using a timeout, and can trace the ~~intra-thread~~ happens-before order at runtime