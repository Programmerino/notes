![[Pasted image 20221230152525.png|here]]
The above is a [[synchronous dataflow MoC]] [[actor]]. Suppose $A$ fires $q_A$ times and $B$ $q_B$ times. $B$ will consume all the [[token]]s of $A$ if and only if $q_AM = q_BN$. A scheduler can then ensure that the communication buffer will be bounded. A trivial example would be firing $A$ $q_A$ times and then $B$ $q_B$ times, over and over. Whole [[model]]s can then be scheduled for with a system of equations. If there is no non-trivial solution to the system then it is **inconsistent**, and is otherwise **consistent**.

Lee and Messerschmitt 