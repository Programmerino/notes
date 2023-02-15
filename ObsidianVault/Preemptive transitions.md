#saved
Preemptive [[transition]]s are used in [[hierarchical composition]] and explicitly specify their [[guard]]s to be evaluated *before* a [[state refinement|refinement]] [[CPS reaction|reacts]], and if any are true, then the [[state refinement|refinement]] does not have any of its [[action]]s performed. They are denoted with a red circle at the origin of the [[transition]].
![[Pasted image 20221225142821.png]]
In this example, $a_3$ and $a_4$ will never be performed if $g_1$.