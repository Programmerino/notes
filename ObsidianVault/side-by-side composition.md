#saved
A type of [[concurrent composition]] where an [[actor]] with multiple [[input]]s and [[output]]s assigns some [[input]]s and [[output]]s to particular internal [[actor]]s. They can either not communicate at all, or use [[shared variables]] (below is an example of independent [[actor]]s). This has the benefit of making the [[state machine composition|composed]] [[actor]] look like and act like a normal [[actor]] which can also be [[state machine composition|composed]].
![[Pasted image 20221225125050.png]]
* Under [[synchronous composition]], a [[reaction]] of $C$ is a simultaneous [[reaction]] of $A$ and $B$. See [[formal side-by-side composition]] for more details.
* In the context of side-by-side composition, the following properties are [[compositional property|compositional]]:
	* [[Deterministic state machine|Determinism]]
	* [[finite-state machine|FSM]]