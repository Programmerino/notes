The counter [[state machine]] is an example of a [[state machine]]. It comprises an Adder which emits an increase [[CPS signal]] (a [[pure signal]]) and a counter which emits a new, incremented value whenever it receives a [[CPS signal]] (an [[valued signal]]). In this example, the [[CPS reaction|reactions]] are triggered by an increase or decrease event, and no [[CPS reaction]] occurs when neither event is occurring. If the [[state space]] of the counter is capped (e.g., the max int), then the [[state space]] is finite up to that value and thus has a finite [[state space]] which makes this a [[finite-state machine]]. It is also an [[accumulator]] since the counter relies on previous values to produce new values.

An example [[behavior]] for this could be...
$s_{u p}=($ present, absent, present, absent, present,$\cdots)$
$s_{\text {down }}=($ present, absent, absent, present, absent,$\cdots)$
$s_{\text {count }}=($ absent, absent $, 1,0,1, \cdots)$, but not $s_{\text {count }}^{\prime}=(1,2,3,4,5, \cdots)$.

See [[counter extended-state machine]]