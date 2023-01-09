#saved

Unbounded execution refers to when a [[model]] with a [[dataflow MoC]] runs forever or for a very long time and poses resource exhaustion concerns, particularly since intra-[[actor]] communication uses memory-based buffers.

A simple instance of a [[state machine]] which could encounter memory exhaustion is ![[Pasted image 20221230144521.png]] whenever the firing rate of $A$ is faster than $B$.

The solution to this is [[bounded buffers]].