A non-deterministic [[state machine]], as opposed to a [[deterministic state machine]], allows for incomplete [[CPS Models|models]] to be constructed more easily. With the ability to have multiple enabled [[transition]]s at a given time, randomness can be represented. These conflicting [[transition]]s are typically colored red. See [[pedestrian state machine]] for an example.

They are also used for [[state machine]]s with more than one possible initial [[state]], and when modeling a [[CPS|system]] with unconstrained details. For example, if I want to interact with a browser and there are portions of the specification which don't enforce a specific behavior or timing, a non-deterministic state machine may be used.

These typically have more than one possible [[behavior]] as opposed to [[deterministic state machine]]s which must have one.

See [[formal non-deterministic finite-state machine representation]].