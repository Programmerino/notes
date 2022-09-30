**Solution 1:**
$$
\mathbb{P}(X_{ij}=1) =\frac{1}{\beta n}\\
$$
$$
\begin{aligned}
\mathbb{E}\left(\sum_{i=1}^{n-1} \sum_{j=i+1}^{n} X_{i j}\right) &= \sum_{i=1}^{n-1} \sum_{j=i+1}^{n}\mathbb{E}\left(X_{ij}\right) & \text{Linearity of expectation}\\
&= \sum_{i=1}^{n-1} \sum_{j=i+1}^{n}\frac{1}{\beta n} & \text{Indicator expected value}\\
&= \sum_{i=1}^{n-1} (n-(i+1)+1)\frac{1}{\beta n}\\
&= \sum_{i=1}^{n-1} \frac{n-i}{\beta n}\\
\\
a_1 &=\frac{n-1}{\beta n}\\
a_k &= a_1 + \left(-\frac{1}{\beta n}\right)(k-1)\\
S_{n-1} &= \frac{1}{2}(n-1)\left(2\frac{n-1}{\beta n} + \left(-\frac{1}{\beta n}\right)(n-2)\right)\\
&= \frac{(n-1) \left(\frac{2 (n-1)}{\beta  n}-\frac{n-2}{\beta  n}\right)}{2}\\
&=\frac{(n-1) (2 (n-1)+2-n)}{2 (\beta  n)}\\
&=\frac{(n-1) \left(2 n-2+2-n\right)}{2 \beta  n}\\
&=\frac{(2 n-n)+(2-2) (n-1)}{2 n \beta }\\
&=\fbox{$\frac{n-1}{2\beta}$}\\
\end{aligned}
$$