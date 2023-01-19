The dynamic [[dataflow MoC]] (DDF) provides additional expressiveness over [[SDF]] without retaining the same verifiability benefits. [[Actor]]s in this [[MoC]] can have multiple [[firing rule]]s and can produce variable [[output]] [[token]]s. The [[Delay actor]] can be represented efficiently without needing special treatment of [[initial tokens]].

There are two basic [[actor]]s specific to DDF: [[Select actor]] and [[Switch actor]] which provide for conditional routing of [[token]]s, similar to goto statements in programming languages.

[[Buck93]] demonstrated that [[bounded buffers]] and [[deadlock]] are undecidable with this [[MoC]].