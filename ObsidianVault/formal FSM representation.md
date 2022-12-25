[[Finite-state machine|Finite-state machines]] can be represented as (States, Inputs, Outputs, update, initialState):
* States is a finite set of [[state|states]].
* Inputs is a set of input [[valuation|valuations]] and can be represented as a function mapping each [[port]] index to their corresponding $V_p$
* Outputs is a set of output [[valuation|valuations]], with a similar math representation to inputs
* update takes a [[state]] and input [[valuation]] and returns the next [[state]], and an output [[valuation]] ($States \times Inputs \rightarrow States \times Outputs$)
	* This is also called the transition function
* initialState is the initial [[state]].
* From this representation, it can be described as a formula:
	* At each reaction, the [[finite-state machine]] has a current [[state]] and next [[state]]. $s$ is a function mapping an index number to the corresponding [[state]] and $s(0) = initialState$. $x$ and $y$ are similar functions for input [[valuation|valuations]] and output [[valuation|valuations]] respectively. From this, it can be described as $(s(n+1), y(n)) = update(s(n), x(n))$