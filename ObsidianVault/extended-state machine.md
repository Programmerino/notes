#saved
An extended [[state machine]] augments the [[finite-state machine]] by adding variables which may be read and written during the [[transition]] between [[state]]s with [[set action]]s. They are particularly useful for [[finite-state machine]]s with large [[state space]]s where the inclusion of these variables can greatly reduce their complexity. Since the variables are often members of infinite sets, they are not necessarily [[finite-state machine]]s.
* The state space is $np^m$ where $n$ is the number of [[Discrete Dynamics in CPS|discrete]] [[state]]s, $m$ is the number of variables, and $p$ is the number of possible values per variable.
* The [[extended-state machine]]s can be represented almost 1-to-1 with an Elm-like MVU framework since the model can just be a union of possible states and the global variables, and the messages are transitions.
	* Outputs can be done with Cmd or with messages that are picked up by the parent.
	* Inputs come from the `view` function or through subscriptions

Rules for graphically notating an ESM:
* Specify the types of the variables in the upper left, alongside the [[input]]s and [[output]]s
* The initial [[transition]] points to the initial [[state]] and sets the variables
* [[Transition]] notation is now “[[guard]] / [[output]] [[action]] [[set action]](s)”