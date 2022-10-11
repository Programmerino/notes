In this article, I will describe step-by-step why constraining solutions on their complexity (both algorithmically and by other measures such as "closed-form", etc.) is often not good enough to describe the properties of the expression you are desiring.

## Does Chess Have A Closed-Form Solution?
Yes, and provably so. Let's say that we want to create a function that maps any (board position, turn) pair to the best next move for that player. The definition of a function is an expression which maps values from the doma
in to values from the range. Under this definition, any function with a finite-sized domain must have a closed-form solution. There is a simple algorithm which demonstrates this when a non-closed form solution exists.

Chess is an MDP, which means that a non-closed form solution can provably be found with an exhaustive search, or through the convergence of many other algorithms (Monte Carlo, etc.)

$$
\begin{aligned}
&\text{Let $f : X \rightarrow Y $ be a non-closed form expression and let $f' : X \rightarrow Y$ by an equivalent closed-form expression. It can be constructed simply with:}\\\\
&\text{For $x \in X:$}\\
&\text{f'(x)} \leftarrow f(x)
\end{aligned}
$$
The $\leftarrow$ operation could be implemented by having $f'(x)$ be a hash table, or a variety of other methods. In standard notation, this would look like:
$$
f(x) = \left\{
    \begin{array}{lr}
        X_0, & V_1\\
        X_1, & V_2\\
        \dots, & \dots\\
        X_n, & V_n\\
    \end{array}
\right\}
$$
where $X_i$ is defined by some ordinal numbering of the domain, and $V_n$ is the result of $f(X_n)$.

There are no further restrictions you can put on closed-form solutions without excluding things you would ordinarily consider to be closed-form. For example, if you ban piecewise functions, then you can simply create an equivalent Lagrange polynomial, which when restricted to the same, finite, domain, will yield the exact same result. There are countless other methods, including the many function approximators (e.g., neural networks) which provably converge to the approximated function.

### What About Time Complexity?
Ok, so closed-form is clearly a useless concept, at least to the end above. What if we used algorithmic complexity instead? The problem is that, as long as the inputs and outputs of the function are fixed, which is necessarily true when the domain is finite, we can always construct a perfect hash function for that set of inputs which yields worst-case O(1) access time when used in a hash table.

### Space Complexity?
Space complexity actually seems like it could be a good solution to this problem, since the perfect hashing method above has $O(n)$ space complexity. The problem is that the size of the table can be fixed to the cardinality of the domain of the approximated function because the domain size never varies, and thus the perfect hashing function space complexity is also constant.

### Analytical vs. Numerical?
People often use the expression "closed-form analytical" to seemingly try to get around this problem. The issue is that “analytical”, when defined as providing an exact solution, doesn't express anything which isn't solved by the algorithms above, which also provide exact solutions.

### Justification-based?
An alternative to all of this is to simply ask if the function has a reasonable definition which is explainable. This would cut out any of the above solutions which are clearly just ways to get around the definition, however, it also would cut out numerous mathematical expressions which were empirically derived, such as Newton's laws, which have no inherent explanations other than their relationship to other laws of physics. Despite that, I actually think is the best way to categorize expressions in the expected way above, since we shouldn't be aiming for properties of theories of physics to be “explainable”, nor would we expect axiomatic properties of mathematical foundations to be explainable solutions. If we add a “closed-form” requirement atop this, then we get a good way to exclude the above algorithms for solving Chess without grouping too many reasonable expressions in with it. Obviously, a glaring issue with this is that it is no longer something which can be determined “objectively”, since what is a “reasonable definition” is practically undefinable without running into the workarounds described above. Another non-objective definition would be “practically-obtainable”, which wouldn't exclude laws of physics, but would exclude the methods above which require a non-closed form solution which inherently have high computational expense asymptotically.  If it was the case that given 3 years with massive computers, we could create a closed-form expression to solve Chess by simply sampling all combinations of board state and player turns, we would still find it unsatisfying, so I think this solution is a bit worse.


The solution to this issue is to instead consider the utility of the solution. With all the hacks around the definitions above, we get a solution with near zero utility since we are essentially just caching the results of the already computed values from the non-closed form expression. If we were to find an exact, useful solution to Chess, then we could plausibly apply the same methods to other areas like Go, or other massive state-space problems. Therefore, I argue we should skip the middleman of rule-based descriptions of mathematical expressions, and talk directly above the usefulness of a solution.