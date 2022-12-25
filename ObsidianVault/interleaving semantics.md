For [[asynchronous composition]], it means that a [[reaction]] of $C$ is a [[Non-deterministic state machine|non-deterministic]] [[reaction]] of either $A$ or $B$, but not both. This means that even if $A$ and $B$ are present, only one of the state machines will see the input if they have independent [[input]]s. To fix this, you can either set a specific scheduling scheme for ordering between the two, or you can use [[synchronous composition]].

* A benefit to these semantics is that it enforces accesses to any [[shared variables]] will be atomic since only one [[actor]] will be running at a given time.
* A downside is that without a scheduling strategy, [[state machine]]s [[state machine composition|composed]] together for concurrency purposes might make improper use of resources since requests may be directed to already-busy machines.

The formal definition is nearly identical to [[formal side-by-side composition]], but 
$update_C((s_A, s_B), (i_A, i_B)) = ((s'_A,s'_B),(o'_A, o'_B))$ where either $(s'_A, o'_A) = update_A(s_A,i_A)$ and $s'_B = s_B$ and $o'_B = \{absent\}$
or
$(s'_B,o'_B) = update_B(s_B, i_B)$ and $s'_A = s_A$ and $o'_A =\{absent\}$. $o'_B$ should be taken to mean all outputs of $B$ are absent.