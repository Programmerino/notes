#saved
Dataflow [[models of computation]] provide communication between [[actor]]s in the form of sequences of [[tokens]], where signals are then [[partial functions]] of the form $s : \mathbb{N} \rightharpoonup V_s$ which maps some subset of $\mathbb{N}$ called the **initial segment** to the [[tokens]]. See [[representation of actors in dataflow MoCs]] for more info

Common examples include:
* [[synchronous dataflow MoC]]

When [[composed]], [[tokens]] are buffered until destination [[actor]]s are ready to consume the [[input]]. This leads to two problems, both of which are undecidable for arbitrary [[model]]s (although, some [[models of computation]] can fix this with additional constraints):
1. [[unbounded execution]]
2. [[dataflow deadlock]]

As opposed to the [[synchronous-reactive MoC]], dataflow [[model]]s are much more asynchronous and are ordered based on data dependencies rather than strict guarantees of [[simultaneous and instantaneous]] operation.