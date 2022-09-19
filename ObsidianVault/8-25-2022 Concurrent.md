* Deep learning allows modeling and processing perception through multi-layer models
* Deep RL learning allows end-to-end decision-making from the model, where previous actions drive future perception and decisions (closing the sensorimotor loop)
	* It is more promising because it can process much more complex sensory input and can choose complex actions based on it's processing
* Non-deep learning uses multiple models highly specialized for each task in getting a result (for example, in CV, you might have multiple feature extraction networks, and other processing models before a basic classifier). Deep learning manages each step that a non-deep solution might require different models for.
* Systems which are not making single isolated decisions or have decisions which affect future decisions should probably use RL.
* Learning reward functions from example is Inverse Reinforcement Learning
* Imitation learning tries to replicate an action by observing many samples of the action being taken.