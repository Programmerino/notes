Most [[CPS|systems]] combine [[classical mechanical problems in CPS|physical dynamics]] most easily [[CPS models|modeled]] with [[Continuous Dynamics in CPS|continuous]] differential equations and computational systems best [[CPS models|modeled]] with [[Discrete Dynamics in CPS|discrete]] [[state machine]]s, and hybrid systems combine these two in much simpler ways than if only one was used by generalizing [[Discrete Dynamics in CPS|discrete]] [[state machine]]s with [[actor]]s. 
* Instead of having [[input]]s and [[output]]s being conceptually absent between [[reaction]]s, a [[transition]] occurs when a [[guard]] on an outgoing [[transition]] from the current [[state]] becomes enabled. Between [[reaction]]s, transitions are still not happening. This allows them to accommodate [[continuous-time system|continuous-time inputs]]. 
	* To allow [[continuous-time system|continuous-time outputs]], [[state refinement]] are used
* See the [[thermostat hybrid system]] example
* [[Hybrid systems graphical notation|Graphical notation]]
* Common hybrid systems include...
	* [[Timed automata]]
* They can be categorized in several ways...
	* [[Zeno system]]