# Primitive Probability Distributions

Hakaru comes with a small set of primitive probability distributions.

#### normal(mean. _real_, standard_deviation. _prob_): _measure(real)_

univariate Normal (Gaussian) distribution

-

#### uniform(low. _real_, high. _real_): _measure(real)_

Uniform distribution is a continuous univariate distribution defined from low to high

-

#### gamma(shape. _prob_, scale. _prob_): _measure(prob)_

Gamma distribution with shape and scale parameterization

-

#### beta(a. _prob_, b. _prob_): _measure(prob)_

Beta distribution

-

#### poisson(l. _prob_): _measure(nat)_

Poisson distribution

-

#### categorical(v. _array(prob)_): _measure(nat)_

Categorical distribution

-

#### dirac(x. _a_): _measure(a)_

Dirac distribution

-

The Dirac distribution appears often enough, that we have given an additional keyword in our language for it: `return`. The following programs are equivalent.

```
dirac(3)
```

```
return 3
```

#### lebesgue(low. _real_, high._real_): _measure(real)_

the distribution constant between `low` and `high` and zero elsewhere. `high` must be at least `low`.

-

#### weight(x. _prob_, m. _measure(a)_): _measure(a)_

a _m_ distribution, reweighted by _x_

-

#### reject: _measure(a)_

The distribution over the empty set

-

Finally, we have a binary choice operator `<|>`, which takes two distributions, and returns an unnormalized distribution which returns one or the other. For example, to get a distribution which where with probability 0.5 draws from a uniform(0,1), and probability 0.5 draws from uniform(5,6).

```
weight(0.5, uniform(0,1)) <|>
weight(0.5, uniform(5,6))
```