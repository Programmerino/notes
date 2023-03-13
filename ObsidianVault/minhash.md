The use of a [[hash function]] or [[hash function]]s to quickly approximate [[Jaccard similarity]].

Let's assume we are using the method using a [[universal family]] of [[hash function]]s and we have a [[set]] $A$. The [[algorithm]] looks like this:
* For each hash function $H_i(x)$, apply it to all the elements of the $A$ and choose the lowest hash value produced $h_i$. The hash of the set is then $h_0\dots h_n$.
* If we do this for another set $B$,  the approximation of of the [[Jaccard similarity]] between $A$ and $B$ is the number of shared hash values (i.e., components) between the two. They are not necessarily in the same position.
	* With $n \rightarrow \infty$, it is the same as [[Jaccard similarity]]. 

A more optimal version uses just one [[hash function]]. If all the sets in question have at least $n$ elements, then you can apply the hash function to all the elements in the set and choose the lowest $n$ as your signature.

The [[hash function]] should be [[k-wise independent]] or use [[tabulation hashing]].

For a [[homomorphic]] extension to this, see [[homomorphic minhash]].

Source: [[Wikipedia23]], [[McCormick23]]