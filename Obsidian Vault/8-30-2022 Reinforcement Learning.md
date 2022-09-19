Left at: 9:21 AM
Arrival: 9:31 AM
Start Time: 9:31 AM
FULLY SAVED

* HW due on 9/12 at 11:59PM
* RL needs to reward previous actions based on rewards that happen in the far future
* Humans can learn much quicker than RL, can do transfer learning much better, and seemingly have good reward functions, etc.
* A taxonomy is a table-based categorization of ideas within a field.
* RL is composed of:
	* Optimization
		* Seeks to optimize its decision-making and wants to maximize outcome
		* Outcome is defined somehow
	* Delayed consequences
		* Decisions can impact things in the far future, so decisions might need to account for long-term effects
		* It makes it difficult to know which actions led to the future reward
	* Exploration
		* RL needs to make decisions to learn, and the decisions it focuses on impacts what it learns
	* Generalization
		* A policy is a mapping from previous experience to action
		* Most situations have quite a large state space and it's hard to preprogram a response to all of them
		* RL solves this since ML often uses neural networks to reduce the dimensions of a problem (reduces the state space by removing non-important details)
* AI Planning
	* Models a situation and looks through most or all of the state space
	* Optimization is done since the algorithm typically maximizes something.
	* It doesn't learn from experience.
	* It generalizes pretty well since the process it uses typically is quite generalizable.
	* Delayed consequences can happen
	* It doesn't explore.
* Unsupervised/Supervised Learning
	* It (kind of) optimizes, learns from experience, and generalizes
	* It does not deal with delayed consequences and does not explore.
* Reinforcement Learning
	* It optimizes for the reward function.
	* It learns from experience
	* It generalizes
	* It considers delayed consequences
	* It explores
	* It is provided with censored labels
* Imitation Learning
	* Tries to replicate actions shown to it.
	* It optimizes to replicate what it sees.
	* Furthermore, it learns from experience.
	* It can generalize.
	* It deals with delayed consequences.
	* It does not explore
	* the Middle-ground between supervised learning and reinforcement learning.
* Imitation reinforcement learning deduces a reward function by observing someone else get the reward, and then optimizes for it.
* The reward $R_t$ is a scalar feedback signal which indicates how good the model is working at a step $t$. The agent wants to maximize the sum of these rewards.
* RL uses the reward hypothesis, which states that all goals can be described by the maximization of expected cumulative reward.
* At each step $t$ the agent executes an action $A_t$, receives an observation $O_t$, and then receives a scalar reward $R_t$. The environment does the reciprocal of these.
	* The history is the sequence of observations, actions, and rewards and provides all observable variables up to time $t$ (for a robot or embodied agent, this is called the sensorimotor stream).
	* The agent state is a function of history, and is all the information needed or chosen to make future decisions
		* It tries to approximate the environment state which is the environment's private representation (could have an objectively and easily determinable best action). For the real world, this could be laws of physics, etc. which the agent might not know about.
	* The Markov (information) state contains all useful information from history and is based on a Markov chain.
		* The future is independent of the past given the present, then the history can be thrown away if this property holds.
		* This an easily be achieved by setting the state to history, but most people typically just take the last observation
	* An environment is fully observable if the agent state, environment state, and information state are equivalent. This would then be a Markov decision process (MDP)
	* An environment is partially observable if the agent makes indirect observations of the environment
		* For example, a poker playing agent can't cheat and see cards it's not supposed to see.
		* This is a Partially Observable Markov Decision Process (POMDP)
		* In these scenarios, the agent must construct its own state representation, with several methods available:
			* Complete history
			* Beliefs over the environment state
				* A probability distribution which models what the environment state probably is
			* Recurrent neural networks.
* An RL agent is composed of a…
	* Policy ($\pi$)
		* Behavior function
		* A map from state to action
		* Policies can be deterministic or stochastic:
			* Stochastic examples include imperfect motor movement in a robot, commands might get dropped, etc.
	* Value function
		* Numerically represents how good a state and/or action is
		* Prediction of future reward
		* $V_\pi(s) = E_{\pi}\left[R_{t+1} + \gamma R_{t+2} + \gamma^2R_{t+3} + \dots | S_t = s\right]$
			* $\gamma$ is a constant which might be constant or learned
	* Model
		* Understanding/representation of the environment.
		* Predicts what the environment will do next.
		* T predicts the next state given an action: $T(s,a,s') = p_{ss^t}^a = p(S_{t+1} = s'| S_t = s, A_t = a)$
			* In this representation is giving the probability of a future state given the current state and action.
			* T is a transaction matrix.
		* It also can predict the next immediate reward: $R(s,a) = E(R_{t+1}|S_t = s, A_t = a)$