The following procedure will find a [[fixed point]] for most [[well formed]] [[synchronous-reactive MoC]] [[model]]:
For each [[reachable state]] $i$:
1. Start with $s(n)$ unknown.
2. Determine as much as you can about $f_i(s(n))$ where $f_i$ is the [[firing function]] of [[state]] $i$ through [[must-may analysis]]. Your analysis should be isolated to the [[state machine]] being analyzed.
3. Repeat step 2 until all values in $s(n)$ become known (whether they are [[present]] and what their values are)
4. If unknown values remain, reject the model.

For [[non-deterministic state machine]]s, arbitrary choices can be made to act as if the model was [[deterministic]]. If this leads to an [[ill formed]] model, then the choice can be blacklisted and the computation retried.

If this procedure works, then the [[state machine]] is **constructive**