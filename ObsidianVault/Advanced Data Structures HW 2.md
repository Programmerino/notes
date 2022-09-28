CSCI 4830/7000: Problem Set # 2

Reading: Jeff Erickson's notes posted on canvas for hashtables.

Due Date: Thursday, September 29th

Your Name: Davis Davalos-DeLosh

$\mathbf{P} 1$. We are inserting $n$ elements $x_{1}, \ldots, x_{n}$ into a hash table $T$ of size $m=\beta n$, where $\beta>1$ using a hash function $h$ chosen at random from a universal hash function family $\mathcal{H}$. Assume that for all keys $x_{i}, x_{j}$ such that $x_{i} \neq x_{j}$ :

$$
\mathbb{P}\left(h\left(x_{i}\right)=h\left(x_{j}\right)\right)=\frac{1}{m}=\frac{1}{\beta n} .
$$

(A, 5 points) What is the expected number of collisions? In other words, let random variable $X_{i j}$ for $1 \leq i<j \leq n$ be the indicator variable for keys $x_{i}$ and $x_{j}$ colliding. Find an expression for the expectation below in terms of $n, \beta$ :

$$
\mathbb{E}\left(\sum_{i=1}^{n-1} \sum_{j=i+1}^{n} X_{i j}\right)
$$

(B, 15 points) Assume now that the hash function family $\mathcal{H}$ from previous problem satisfies some additional guarantees as follows:

1. For all triples of distinct keys $x_{i}, x_{j}, x_{k}, \mathbb{P}\left(h\left(x_{i}\right)=h\left(x_{j}\right)=h\left(x_{k}\right)\right)=\frac{1}{(m)^{2}}=\frac{1}{\beta^{2} n^{2}}$.

2. For all four-tuples of distinct keys $x_{i}, x_{j}, x_{k}, x_{l}, \mathbb{P}\left[h\left(x_{i}\right)=h\left(x_{j}\right)\right.$ and $\left.h\left(x_{k}\right)=h\left(x_{l}\right)\right]=\frac{1}{(m)^{2}}=$ $\frac{1}{\beta^{2} n^{2}}$.

One way to satisfy this is to construct a 4-uniform hash function (see the notes for details). Prove that the variance of the total number of collisions: $\operatorname{VAR}\left(\sum_{i=1}^{n-1} \sum_{j=i+1}^{n} X_{i j}\right) \leq \frac{4 n}{3 \beta}$. Recall that for a random variable $Y, \operatorname{VAR}(Y)=\mathbb{E}\left(Y^{2}\right)-\mathbb{E}(Y)^{2}$. In particular for the number of collisions, the variance is given by:

$$
\mathbb{E}\left(\left(\sum_{i=1}^{n-1} \sum_{j=i+1}^{n} X_{i j}\right)^{2}\right)-\left(\mathbb{E}\left(\sum_{i=1}^{n-1} \sum_{j=i+1}^{n} X_{i j}\right)\right)^{2}
$$

Hint: Focus on the first term in the variance and use the fact that $\left(z_{1}+\cdots+z_{k}\right)^{2}=z_{1}^{2}+\cdots+$ $z_{k}^{2}+2 z_{1} z_{2}+\cdots+2 z_{k-1} z_{k}$. Next, note that the assumptions on the hash function above should allow you to compute the terms corresponding to $\mathbb{E}\left(X_{i j} X_{i k}\right)$ and $\mathbb{E}\left(X_{i j} X_{k l}\right)$ where $i \neq k$ and $j \neq l$. The second term in the expression of variance above should be copied over from part A (and squared). The rest is just a detailed calculation that should yield the bound upon simplification. (C, 10 points) Chebyshev's inequality is a very useful inquality for bounding probabilities. It states that for any random variable $X$,

$$
\mathbb{P}(X-\mathbb{E}(X) \geq t) \leq \frac{\operatorname{VAR}(X)}{t^{2}}
$$

where $\operatorname{VAR}(X)$ denotes its variance. Using this inequality and results from the two previous problems, prove that the probability that if we insert $n$ elements in a hashtable of size $\beta n$, we have $\frac{n-1}{2 \beta}+c n$ or more collisions is at most $O\left(\frac{1}{\beta c^{2} n}\right)$ for some $c>0$. This is a vanishingly small probability if $n$ is large.

Consider the following design using multiple hash tables: we will use some number $t+1$ hash tables $T_{0}, \ldots, T_{t}$, wherein each $T_{j}$ uses randomly selected hash function $h_{j}$ drawn from some universal family $\mathcal{H}$ satisfying the conditions laid out in the previous problems.

The insertion algorithm for a key $x$ is simple: starting with the hashtable $j=0$, we try to insert $x$ into hash table $T_{j}$ using hash function $h_{j}$. If $T_{j}\left[h_{j}[x]\right]$ slot is already occupied by another key, we increment $j$ and continue. Otherwise, we insert element $x$ into hashtable $T_{j}$. If this process reaches $j>t$ without inserting $x$, we declare a failure, draw new random hash functions and rehash.

We will insert $n$ distinct keys into the overall data structure and each table has size $2 n$.

(D, 5 points) Prove that with probability at least $1-O\left(\frac{1}{n}\right)$, at least $\frac{n}{2}$ will be reside in the hash table $T_{0}$.

(E, Extra Credit) Suppose we $\frac{n}{c_{i}}$ elements cause collisions in the first $i-1$ hash tables and thus "percolate" to the $i^{t h}$ hash table. Prove that with probability at least $1-O\left(\frac{1}{n}\right)$, fewer than $\frac{n}{2 c_{i}^{2}}$ will be inserted into the $i+1^{\text {th }}$ hash table.

$\mathbf{F}$, Extra Credit Prove that with high probability at least $\frac{n}{2^{2^{i}}}$ elements will be inserted into the $i^{t h}$ hash table $T_{i}$.

Therefore, we will conclude that the total number of hash tables needed is $t=O\left(\log _{2} \log _{2}(n)\right)$.

P2. One of the key assumptions of hyper-log-log is that the input keys when passed through the hash functions produce a random set of hash values. How do we test this?

Suppose we are given some $k$ bitstrings each of which is of $n$ bits. We are told that the bits are all generated randomly, wherein each bit of each string has a probability $\frac{1}{2}$ of being 1 or 0 . As an example, let us take $k=5$ and $n=4$ with the sequence:

$$
1001,0110,1101,1000,1001
$$

How do we know that this is a random sequence? The simple answer is that we can never know. However, we can test various aspects of this sequence and check how likely one would observe them by "pure chance". In this problem, we would like to try some ways of performing this test.

(A, 20 points) Suppose we toss a coin with probability $\frac{1}{2}$ of heads/tails $n$ times. Let $H_{n}$ be the number of heads. We know that $\mathbb{E}\left(H_{n}\right): \frac{n}{2}$. What is the standard deviation of $H_{n}$ in terms of $n$ ? Calculate a number $t$ such that the probability

$$
\mathbb{P}\left(\frac{n}{2}-t \leq H_{n} \leq \frac{n}{2}+t\right) \simeq 0.95
$$

Expressing $t$ as a function of $n$ is hard to do, especially for smaller values of $n$. Instead, use a computer to generate a table with values of $t$ for various values of $n$ from 5 to 100 . You should use the known properties of binomial distribution to carry out the estimation of the number $t$.

Verify that as $n$ increases, the value of $t$ approach $1.96$ times the standard deviaton. The interval $n / 2 \pm t$ is the $95 \%$ confidence interval (CI).

In a similar manner, compute the $99 \%$ confidence interval as well? Compare the value of $t$ with $2.58$ times the standard deviation. ( $B, 20$ points) One way to perform a statistical test of randomness is to count the number of $1 \mathrm{~s}$ for each bit in the sequence and check that the value lies within a $99 \%$ CI of the expected value gleaned from the problem above.

If all the bit positions have this property, can we be sure that our sequence is random? Find a counterexample and try to refine the argument to avoid such counterexamples.

Implement this test in your favorite programming language and test it against some pseudo random sequences generated using the random number generated as well as some common sequences of numbers converted into 32 bits. Explain what your randomness test concludes for each sequence.

Extra Credit Read about and implement the Wald-Wolfowitz runs test: a standard statistical test for precisely this purpose.

(C, 25 points) Take some $n$ strings from a text file (you can use get words from a file of Hemingway's writings or a web page) and apply a hash function to it.

You can use your own hash function or inbuilt functions from some hashing libraries that have been implemented in $\mathrm{C}, \mathrm{C}++$, python and other languages. Hash the strings into 64 bit numbers. Run a randomness tests from previous part on the resulting 64 bit numbers. What do tests conclude? Try at least 2-3 different hash functions and at least 10,000 words from different sources.