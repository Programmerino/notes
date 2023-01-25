#saved
Cascade/serial composition occurs when the [[output]] of a [[state machine]] is used as the [[input]] for another and is naturally a form of [[synchronous composition]], although buffering can be used to achieve [[asynchronous composition]].
![[Pasted image 20221225134335.png]]
* A composition **type checks** if the data type of $o_1$ is a subset of the data type of $i_2$.
* We consider the reactions of $A$ and $B$ to be occurring simultaneously and instantaneously, since you can express cascade composition in a single state machine (see [[Pasted image 20221225134833.png|here]])