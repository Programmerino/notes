# Michael & Scott lock-free queue
Idk, the comments kind of explain it but I translated the psuedocode from the paper for this
# Flat Combining
There is a global array which threads push requests to, and there is a guarantee that at least one thread will be deemed the "combiner" through a CAS operation who will undertake all the requests. There is greater cache performance, and writing to the global structure is done by one thread which ends up being quicker
# Elimination
Tries to pair up with another thread such that a push and pop operation matches up such that the global queue structure doesn't experience any changes. In scenarios where this happens often, it can improve performance.
# SGLQueue
Uses FC or elimination.