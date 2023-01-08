A finite-state machine (FSM) is a [[state machine]] with a finite [[state space]]. They define all possible behavior and can thus be formally checked more easily. They are graphically depicted using [[transition|transitions]]. When the [[state space]] is large, [[extended-state machine]] can be more apt, although they are essentially equivalent.
* FSMs are [[deterministic state machine|deterministic state machines]] since [[formal FSM representation|update]] is a function and cannot return multiple “next” [[state|states]]. The non-mathematical graphical representation is not necessarily [[deterministic state machine|deterministic]] since there could potentially be overlapping [[transition]]s ([[transition]]s which have non-mutually exclusive [[guard]]s).
* FSMs are [[receptive state machine|receptive]] since [[formal FSM representation|update]] is a total function and thus is defined for all [[state|states]] and [[input|inputs]]. In the graphical notation, the implicit [[default transition]]s guarantee this property as well.
* Given the two properties above, FSMs are [[deterministic and receptive state machine]]s.
* See [[formal FSM representation]]