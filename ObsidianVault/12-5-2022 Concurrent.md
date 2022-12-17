* You can emulate shared memory on distributed systems, and emulate distributed systems on shared memory. For all intents and purposes, they are technically equivalent.
* Types of distributed system failures include...
	* Fail-stop (nodes crash and stop)
	* Byzantine failures (nodes execute arbitrary code)
	* Network partitioning (links might go down, separating the network into disconnected groups
	* Most algorithms try to abate/tolerate some of these failures (Crypto is notable for Byzantine failure tolerance)