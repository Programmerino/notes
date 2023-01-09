#saved

A [[state machine]] is deterministic if, for each [[state]], each [[input]] value enables at most one [[transition]]. This solves the problem of which [[transition]] to choose if multiple have true [[guard|predicates]] since there will always only be one! All deterministic [[state machine|state machines]] are also [[determinate state machine|determinate]].

These have exactly one possible [[behavior]] and can be viewed as a function mapping [[input]] sequences to [[output]] sequences for any given [[state]]. This is called the [[firing function]] when used with the [[synchronous-reactive MoC]].