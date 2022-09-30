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
First, let's think of the problem as a binomial. The first consideration is how many trials there are. We can do this by considering how many possible combinations of the inserted elements there are which need to be considered. The easiest way is to think about the cardinality of the Cartesian product of the set of elements with itself, barring ordered pairs of the form $(a, b)$ where $a = b$, as well as using them as unordered pairs, and thus reducing pairs like $(1, 2), (2, 1)$ to just $(1,2)$ or $(2,1)$:

$$
\begin{aligned}
& n^2 & & \text{Cardinality of Cartesian product of a set with itself}\\
\rightarrow\text{ } & n^2 - n & & \text{Since each original element in the set is paired with a pair (a, a) in the Cartesian product, to remove them simply subtract by n}\\
\rightarrow\text{ } & \frac{n^2 - n}{2} & & \text{Remove double counting due to the presence of a pair (b, a) for each (a, b)}\\
\end{aligned}
$$
Therefore, the number of trials is $\frac{n^2 - n}{2}$. The probability for “success” of each trial is given as $\frac{1}{\beta n}$, and the probability for "failure" is simply $1 - \frac{1}{\beta n}$. The “expected value”, or mean of a binomial distribution, is $np$ where $n$ is the number of trials and $p$ is the probability of success:

$$
\begin{aligned}
np &= \left(\frac{n^2 - n}{2}\right)\left(\frac{1}{\beta n}\right)\\
&= \fbox{$\frac{n-1}{2\beta}$}\\
\end{aligned}
$$


(B, 15 points) Assume now that the hash function family $\mathcal{H}$ from previous problem satisfies some additional guarantees, as follows:

1. For all triples of distinct keys $x_{i}, x_{j}, x_{k}, \mathbb{P}\left(h\left(x_{i}\right)=h\left(x_{j}\right)=h\left(x_{k}\right)\right)=\frac{1}{(m)^{2}}=\frac{1}{\beta^{2} n^{2}}$.

2. For all four-tuples of distinct keys $x_{i}, x_{j}, x_{k}, x_{l}, \mathbb{P}\left[h\left(x_{i}\right)=h\left(x_{j}\right)\right.$ and $\left.h\left(x_{k}\right)=h\left(x_{l}\right)\right]=\frac{1}{(m)^{2}}=$ $\frac{1}{\beta^{2} n^{2}}$.

One way to satisfy this is to construct a 4-uniform hash function (see the notes for details). Prove that the variance of the total number of collisions: $\operatorname{VAR}\left(\sum_{i=1}^{n-1} \sum_{j=i+1}^{n} X_{i j}\right) \leq \frac{4 n}{3 \beta}$. Recall that for a random variable $Y, \operatorname{VAR}(Y)=\mathbb{E}\left(Y^{2}\right)-\mathbb{E}(Y)^{2}$. In particular for the number of collisions, the variance is given by:

$$
\mathbb{E}\left(\left(\sum_{i=1}^{n-1} \sum_{j=i+1}^{n} X_{i j}\right)^{2}\right)-\left(\mathbb{E}\left(\sum_{i=1}^{n-1} \sum_{j=i+1}^{n} X_{i j}\right)\right)^{2}
$$

Hint: Focus on the first term in the variance and use the fact that $\left(z_{1}+\cdots+z_{k}\right)^{2}=z_{1}^{2}+\cdots+$ $z_{k}^{2}+2 z_{1} z_{2}+\cdots+2 z_{k-1} z_{k}$. Next, note that the assumptions on the hash function above should allow you to compute the terms corresponding to $\mathbb{E}\left(X_{i j} X_{i k}\right)$ and $\mathbb{E}\left(X_{i j} X_{k l}\right)$ where $i \neq k$ and $j \neq l$. The second term in the expression of variance above should be copied over from part A (and squared). The rest is just a detailed calculation that should yield the bound upon simplification.

We can disregard the additional guarantees, as they would only lower the bound for the variance. If I can demonstrate that the variance is less than $\frac{4n}{3\beta}$ without the additional guarantees, I also demonstrate that bound applies for the system with more guarantees.

Variance of a binomial distribution is $npq$:
$$
\begin{aligned}
npq &= \left(\frac{n^2 - n}{2}\right)\left(\frac{1}{\beta n}\right)\left(1-\frac{1}{\beta n}\right)\\
&\rightarrow \frac{\left(n^2-n\right) \left(1-\frac{1}{\beta  n}\right)}{2 \beta  n}\leq \frac{4 n}{3 \beta} & \text{for $\beta \geq 1$ and $n\geq 1$}\\
&= \frac{\left(n^2-n\right) \left(1-\frac{1}{\beta  n}\right)}{2n}\leq \frac{4 n}{3} \\
&= \frac{3\left(n^2-n\right) \left(1-\frac{1}{\beta  n}\right)}{2n}\leq 4 n \\
&= \frac{3\left(n^2-n\right) \left(1-\frac{1}{\beta  n}\right)}{2}\leq 4 n^2 \\
&= 3\left(n^2-n\right) \left(1-\frac{1}{\beta  n}\right)\leq 8 n^2 \\
&= 3n^2-3n \left(1-\frac{1}{\beta  n}\right)\leq 8 n^2 \\
&= \frac{3}{\beta}+3n^2-3n\leq 8 n^2 \\
&= \frac{3}{\beta}-3n\leq 5 n^2 \\
&= \frac{3}{\beta}\leq 5 n^2+3n \\
&= 3\leq \beta(5 n^2+3n)
\end{aligned}
$$
The last statement is trivially true since $5n^3 + 3n$ starts at $5(1)^3+3(1) = 8$ and is monotone increasing. $\beta$ doesn't affect this since it is limited to being at least $1$, so it can only increase the RHS.

(C, 10 points) Chebyshev's inequality is a very useful inquality for bounding probabilities. It states that for any random variable $X$,

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

In a similar manner, compute the $99 \%$ confidence interval as well? Compare the value of $t$ with $2.58$ times the standard deviation.

**Standard Deviation:**
$$
\begin{aligned}
\sigma_{H_n} &= \sqrt{npq} & & \text{Where p and q are $\frac{1}{2}$}\\
&=\sqrt{n\left(\frac{1}{2}\right)\left(\frac{1}{2}\right)}\\
&=\frac{\sqrt{n}}{2}
\end{aligned}
$$
**Calculate T**:
**0.95**:
I used a binary search algorithm to find the optimal value for $t$:
```fsharp
open FSharp.Stats
open FSharp.Stats.Distributions

let mutable gLower = 1.
let mutable initial = 2.

let binSearch (target: float) n =
    let binomial = DiscreteDistribution.binomial 0.5 n
    let rec go prev repetitions lower upper topCap =
        let midpoint = (upper + lower) / 2.
        let result = (binomial.CDF ((float(n)/2.) + midpoint)) - (binomial.CDF ((float(n)/2.) - midpoint))
        // printfn "%A-%A-%A Us: %A Target: %A" lower midpoint upper result target
        if repetitions > 100 || (lower = midpoint && midpoint = upper)  then
            gLower <- midpoint
            initial <- topCap
            // printfn "gLower: %A initial: %A" gLower initial
            midpoint
        else
            let newReps = if result = prev then repetitions + 1 else 0
            if result > target then
                // printfn "Going down!"
                go result newReps lower midpoint topCap
            else if midpoint = topCap then
                // printfn "Increasing cap to %A and going up!" (upper * 2.)
                go result newReps midpoint (upper * 2.) (upper * 2.)
            else 
                // printfn "Going up!"
                go result newReps midpoint upper topCap
    go 0 0 gLower initial initial

let f n = 1.96 * ((sqrt n) / 2.)

[<EntryPoint>]
let main argv =
    Seq.initInfinite id
    |> Seq.iter(fun x -> let res = (binSearch 0.95 x) in printfn "%A,%A" x ((f (float(x))) - res))

    0

```

 **n** | **Calculated t** 
-------|------------------
 5     | 2.5              
 6     | 2.5              
 7     | 2.5              
 8     | 3                
 9     | 3                
 10    | 3                
 11    | 3.5              
 12    | 3.5              
 13    | 3.5              
 14    | 4                
 15    | 4                
 16    | 4                
 17    | 4                
 18    | 4                
 19    | 4.5              
 20    | 4.5              
 21    | 4.5              
 22    | 5                
 23    | 5                
 24    | 5                
 25    | 5                
 26    | 5                
 27    | 5.5              
 28    | 5.5              
 29    | 5.5              
 30    | 5.5              
 31    | 5.5              
 32    | 6                
 33    | 6                
 34    | 6                
 35    | 6                
 36    | 6                
 37    | 6                
 38    | 6                
 39    | 6.5              
 40    | 6.5              
 41    | 6.5              
 42    | 6.5              
 43    | 6.5              
 44    | 6.5              
 45    | 6.5              
 46    | 7                
 47    | 7                
 48    | 7                
 49    | 7                
 50    | 7                
 51    | 7                
 52    | 7                
 53    | 7.5              
 54    | 7.5              
 55    | 7.5              
 56    | 7.5              
 57    | 7.5              
 58    | 7.5              
 59    | 7.5              
 60    | 8                
 61    | 8                
 62    | 8                
 63    | 8                
 64    | 8                
 65    | 8                
 66    | 8                
 67    | 8                
 68    | 8                
 69    | 8.5              
 70    | 8.5              
 71    | 8.5              
 72    | 8.5              
 73    | 8.5              
 74    | 8.5              
 75    | 8.5              
 76    | 9                
 77    | 9                
 78    | 9                
 79    | 9                
 80    | 9                
 81    | 9                
 82    | 9                
 83    | 9                
 84    | 9                
 85    | 9.5              
 86    | 9.5              
 87    | 9.5              
 88    | 9.5              
 89    | 9.5              
 90    | 9.5              
 91    | 9.5              
 92    | 9.5              
 93    | 9.5              
 94    | 9.5              
 95    | 9.5              
 96    | 10               
 97    | 10               
 98    | 10               
 99    | 10               
 100   | 10               

![[Pasted image 20220929225902.png]]

**0.99**:
 **n** | **Difference** 
-------|----------------
 5     | 2.5            
 6     | 3.0            
 7     | 3.5            
 8     | 3.5            
 9     | 3.5            
 10    | 4.0            
 11    | 4.5            
 12    | 4.5            
 13    | 4.5            
 14    | 5.0            
 15    | 5.0            
 16    | 5.0            
 17    | 5.5            
 18    | 5.5            
 19    | 5.5            
 20    | 6.0            
 21    | 6.0            
 22    | 6.0            
 23    | 6.5            
 24    | 6.5            
 25    | 6.5            
 26    | 6.5            
 27    | 6.5            
 28    | 7.0            
 29    | 7.0            
 30    | 7.0            
 31    | 7.5            
 32    | 7.5            
 33    | 7.5            
 34    | 7.5            
 35    | 7.5            
 36    | 8.0            
 37    | 8.0            
 38    | 8.0            
 39    | 8.0            
 40    | 8.0            
 41    | 8.5            
 42    | 8.5            
 43    | 8.5            
 44    | 8.5            
 45    | 8.5            
 46    | 9.0            
 47    | 9.0            
 48    | 9.0            
 49    | 9.0            
 50    | 9.0            
 51    | 9.5            
 52    | 9.5            
 53    | 9.5            
 54    | 9.5            
 55    | 9.5            
 56    | 10.0           
 57    | 10.0           
 58    | 10.0           
 59    | 10.0           
 60    | 10.0           
 61    | 10.0           
 62    | 10.0           
 63    | 10.5           
 64    | 10.5           
 65    | 10.5           
 66    | 10.5           
 67    | 10.5           
 68    | 11.0           
 69    | 11.0           
 70    | 11.0           
 71    | 11.0           
 72    | 11.0           
 73    | 11.0           
 74    | 11.0           
 75    | 11.5           
 76    | 11.5           
 77    | 11.5           
 78    | 11.5           
 79    | 11.5           
 80    | 11.5           
 81    | 11.5           
 82    | 12.0           
 83    | 12.0           
 84    | 12.0           
 85    | 12.0           
 86    | 12.0           
 87    | 12.0           
 88    | 12.0           
 89    | 12.5           
 90    | 12.5           
 91    | 12.5           
 92    | 12.5           
 93    | 12.5           
 94    | 12.5           
 95    | 12.5           
 96    | 13.0           
 97    | 13.0           
 98    | 13.0           
 99    | 13.0           
 100   | 13.0           


![[Pasted image 20220929230650.png]]

( $B, 20$ points) One way to perform a statistical test of randomness is to count the number of $1 \mathrm{~s}$ for each bit in the sequence and check that the value lies within a $99 \%$ CI of the expected value gleaned from the problem above.

If all the bit positions have this property, can we be sure that our sequence is random? Find a counterexample and try to refine the argument to avoid such counterexamples.

Implement this test in your favorite programming language and test it against some pseudo random sequences generated using the random number generated as well as some common sequences of numbers converted into 32 bits. Explain what your randomness test concludes for each sequence.

Extra Credit Read about and implement the Wald-Wolfowitz runs test: a standard statistical test for precisely this purpose.

(C, 25 points) Take some $n$ strings from a text file (you can use get words from a file of Hemingway's writings or a web page) and apply a hash function to it.

You can use your own hash function or inbuilt functions from some hashing libraries that have been implemented in $\mathrm{C}, \mathrm{C}++$, python and other languages. Hash the strings into 64 bit numbers. Run a randomness tests from previous part on the resulting 64 bit numbers. What do tests conclude? Try at least 2-3 different hash functions and at least 10,000 words from different sources.