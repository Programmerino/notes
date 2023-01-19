The Kahn process network (PN) [[MoC]] is a [[dataflow MoC]]-like model invented in [[Kahn74]] where each [[actor]]/coroutine executes concurrently as a non-terminating program which reads from [[input]] [[port]]s and writes to [[output]] [[port]]s. Unfortunately, the presence of [[bounded buffers]] and [[deadlock]] is undecidable with this [[MoC]].

The modern technique for guaranteeing that analyzing if the actors can be ran concurrently is determinate came from [[Kahn77]] and is the use of [[blocking reads]]. Writes are typically unaffected, similarly to how in [[dataflow MoC]]s, [[firing rule]]s only apply to [[input]]s, however, some variants also perform [[blocking writes]].