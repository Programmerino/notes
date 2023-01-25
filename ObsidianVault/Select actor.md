#saved
![[Pasted image 20230118215226.png]]

The Select [[actor]] is a basic [[actor]] found in [[DDF]] consisting of the following rule which is repeated after every produced [[output]]:

Take in one [[token]] on the bottom [[input]] [[port]]. If it is $true$, then activate a new [[firing rule]] which redirects the next [[input]] to $T$ to the [[output]]. If it is $false$, then it activates a [[firing rule]] which redirects the the next [[input]] to $F$ to the [[output]]. Thus, it fires twice in order to produce one [[output]].

Essentially, it uses a [[CPS signal]] sent to it to pick between $T$ and $F$ for which to pass on.