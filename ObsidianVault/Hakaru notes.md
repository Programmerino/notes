# Hakaru notes
## What is Probabilistic Programming
Bayesian programs are written by writing the scenario, and then restricting simulations which do not fit information you have. For example, you can write a tug-of-war simulation to guess who will win the last match by first simply modelling winning each round, and then restricting the observed simulations to only contain results where the first and second match had certain results, for example ([[What is Probabilistic Programming?#Example Bayesian Tug-of-War|ref]]). This is called *rejection sampling* ([[What is Probabilistic Programming?#Simulation and Inference|ref]]). The Metropolis-Hastings algorithm is implemented in Hakaru which uses Markov Chain Monte Carlo methods to find good samples which are clustered near each other. This can often be more efficient. This can be accessed with the `mc` command ([[What is Probabilistic Programming?#The Metropolis-Hastings Algorithm A Markov Chain Monte Carlo Method|ref]]). Let should be used for simple values, and bind (`<~`) for the action of unwrapping a probabilistic variable into an actual value.
## Quick Start: A Mixture Model Example & Tutorial: Hakaru Workflow for a Discrete Model
`categorical` accepts an array of possibilities (type `prob`), and the result can be mapped to be values with syntax: `[true, false][b]` where `b` is the result of a use of `categorical` ([[Quick Start - A Mixture Model Example#Modeling a Bernoulli Experiment|ref]]). This isn't unique syntax, b is just a number which can be used to index the array. To convert a real number to a probability, use `real2prob(x)`. This is ordinarily inferred, but not always.

Pattern matching looks like:
```hakaru
sample <~ match coin:
    true: normal(0,1)
    false: uniform(0,1)
```

Conditionals look like ([[Tutorial - Hakaru Workflow for a Discrete Model#Modelling|ref]]):
```hakaru
if cond: x1 else: x2
```

Whatever is passed to `return` is what is output to the console  ([[Quick Start - A Mixture Model Example#Creating a Mixture Model|ref]]). The values should be returned in order of known followed by unknown knowledge ([[Tutorial - Hakaru Workflow for a Discrete Model#Modelling|ref]]). For `disintegrate`, the leftmost values are used to create the distribution for the last value. 

``hk-maple`` uses Maple to algebraically simplify a disintegrated Hakaru model, and often produces heavily simplified results.
## Compile to Haskell
To compile to Haskell, use ``compile`` ([[Compiling to Haskell#Compiling to Haskell|ref]])
## Compile to C
To compile to C (uses OpenMP for parallelism on multicore machines when called with `-j` to `hkc`) use `hkc foo.hk -o foo.c` or `hkc foo.hk --make gcc` to directly make the executable ([[Compiling to C#Compiling to C|ref]], [[Compiling to C#Parallel Programs|ref]]).
## Primitive Probability Distributions
![[Primitive Probability Distributions]]
## Functions
```hakaru
def fnName(x1 type, x2 type) rettype:
	x1 + x2

fnName = fn x1 x2 retType: x1 + x2
```
([[Functions|ref]])
![[Types and Coercions]]
## Arrays and Plate
![[Arrays and Plate#Arrays]]
``size(a)`` gets the length of an array as a `nat`
([[Arrays and Plate#Array size and indexing|ref]]).
![[Arrays and Plate#Plate]]
![[Loops]]
![[Expect]]

## Transformations
`normalize` removes weights from probability distributions ([[Normalize|ref]]).
``disintegrate`` transforms a Hakaru model to a representation using anonymous functions which can be passed to other applications, and reformulates the program into a function which maps known knowledge into wanted knowledge.
``density`` generates a function which computes the density of a distribution at a point. A program cannot use return, but instead needs to return a measure to use this ([[Density|ref]]).
### Maple
``hk-maple -c Simplify prog.hk`` optimizes a program for sampling efficiency ([[Hakaru-Maple#Simplify|ref]])
`hk-maple -c disintegrate prog.hk` is an alternative implementation for the built-in disintegrate. It should be used for programs with "superpositions with complicated conditions" or "complicated rational polynomials" ([[Hakaru-Maple#Disintegrate|ref]])
#### Summarize
![[Hakaru-Maple#Summarize]]
## Metropolis Hastings
![[Metropolis Hastings]]

## Misc
``reduce(fn, init, arr)`` is available. ([[Examples#Gaussian Mixture Model|ref]])