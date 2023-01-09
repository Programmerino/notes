#saved

The [[Delay actor]] (or more accurately named Cons when the incoming sequence continues to produce [[token]]s over time) in the context of [[dataflow MoC]] is composed of two [[firing function]]s and [[firing rule]]:
1. $d_1(s) = x$ where $x$ is some value which will be prepended when no tokens are available.
2. $d_2(x_1,\dots) = (x_1)$ which is essentially the identity function whenever tokens are available.