Markov's inequality states that $P(x \geq a) \leq \frac{\mathbb{E}(x)}{a}$ for any real number $a$ which is greater than 0 (realistically 1). If we apply this to the random variable $|x - \mu|$ or the equivalent statement $X - \mathbb{E}(x)$, then the RHS simplifies to $\frac{Var(x)}{a^2}$:
$$
\begin{aligned}
P(x \geq a) &\leq \frac{\mathbb{E}(x)}{a}\\
P(|x-\mu| \geq a) &\leq \frac{\mathbb{E}(|x-\mu|)}{a} \\
P((x-\mu)^2 \geq a^2) &\leq \frac{\mathbb{E}((x-\mu)^2)}{a^2}
\end{aligned}
$$
The statements $\mathbb{E}((x-\mu)^2)$ and $Var(x)$ are interchangeable...
$$
\begin{aligned}
P((x-\mu)^2 \geq a^2) &\leq \frac{Var(x)}{a^2}\\

\end{aligned}
$$
An easier to understand, but equivalent, formulation is:
$$
\Pr(|X - \mu| \geq k\sigma) \leq \frac{1}{k^2}
$$
where $X$ is a random variable, $\mu$ is the expected value/mean, and $\sigma$ is standard deviation (square root of variance). $k$ can be any real number greater than 0. It means that the probability that values lie outside
$$
(\mu-k\sigma, \mu + k\sigma)
$$ is less than $\frac{1}{k^2}$.