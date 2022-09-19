* Based on Bayesian inference
* Non-deterministic variables are called random variables
	* Each random variable is tied with a probability distribution function which converts a possibility into a probability value
		* Discrete distributions assign probabilities to an enumerable set of possibilities
* You often have a prior, which is an initial distribution which you kind of guess and is without observations
	* After making observations in coordination with contingencies, you can update the prior into a posterior
		* For example, if you have a murder and your butler would be likely to use a pistol and your cook would likely use a knife, you can use new information from the coroner's report in coordination with this information to create a posterior distribution.
		* Repeatedly using posteriors as priors for future updates is called online learning
* 