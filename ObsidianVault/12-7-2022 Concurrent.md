# Flat Combining
There is a global array which threads push requests to, and there is a guarantee that at least one thread will be deemed the "combiner" through a CAS operation who will undertake all the requests. There is greater cache performance, and writing to the global structure is done by one thread which ends up being quicker
# Elimination
Tries to pair up with another thread such that a push and pop operation matches up such that the global queue structure doesn't experience any changes. In scenarios where this happens often, it can improve performance.
* Safety - bad things never happen
* Liveness - good things eventually happen
* Recovery - what we do when our transaction aborts
* Concurrency control - Method for detecting conflicting transactions
* UNDO Logging - UNDO incomplete transactions, write directly to shared medium and revert
* REDO Logging - REDO complete transactions, write to privatized copies of areas of shared medium and replay changes
* Object Semantics - Strict definitions of an object's behavior defined on a particular history -- meant to define precisely allowed and disallowed behavior