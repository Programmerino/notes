Hierarchical [[state machine]]s use a [[state refinement]] on a [[state]] (e.g. $B$) containing another [[finite-state machine]] (e.g. containing $C$, the initial [[state]], and $D$). The meaning of being in the [[state]] being refined ($B$) is that it is one of the [[state]]s in the contained [[finite-state machine]] ($C$ or $D$). The contained [[finite-state machine]] should have an initial [[state]] which will be reached whenever the outer [[state]] is reached in the case of a [[reset transition]] ($B$ becomes $C$ when reached) or takes on it's previous state in the case of a [[history transition]]. To leave that [[state]], either a transition inside the inner [[finite-state machine]] will occur, or a guard in the outer [[finite-state machine]] becomes true (the order is [[semantics of hierarchical composition|semantics-specific]]).
![[Pasted image 20221225140003.png]]
See [[semantics of hierarchical composition]] for more details