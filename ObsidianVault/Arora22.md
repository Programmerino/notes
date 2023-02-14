# [**Arora et al.** **'22** (11/19/2022, arXiv:2210.02441 [cs], "Ask Me Anything: A simple strategy for prompting language models", arXiv, arXiv.org, [http://arxiv.org/abs/2210.02441](http://arxiv.org/abs/2210.02441), Accessed On: 02/13/2023)](zotero://select/library/items/AQW6HS4A)
## Extracts
* Don't restrict the output for questions to multiple choice, etc. ask it to give a general answer and categorize the real answer based on that (this also goes for questions which have yes/no answers)
	* For example "The pronoun 'his' refers to 'Mark' in the context. True or False?" should be "What does 'his' refer to?"
	* "Did Jack camp with Mark?" should be "Who did Jack camp with?"
	* For example, questions starting with...
		* "Is"
		* "Was"
		* "Did"
		* "Do"
		* "Are"
		* "Will"
		* are ineffective and can be phrased with...
			* "When"
			* "Where"
			* "Why"
			* "Who"
			* "What"
			* "How many"
* Add precision to the prompt
	* In the previous example, what is even better is to make the context as precise as possible, and then ask "Whose dog?"
* Use multiple questions leading to the real question you want answered:
	* "Who went to the park?"
	* "Did John go to the park?"
	* "Where did John go?"
	* The idea is that it allows the model to reason towards the answer better
* Avoid certain kinds of error...
	* Knowledge errors
		* When a model needs to recall encoded factual knowledge or apply real-world knowledge to a context, it is is less successful. It is better if the knowledge can be included in the prompt
	* Instruction-following
		* Don't ask questions with restrictive output spaces
	* Long-context errors
		* Avoid long context questions
## Content

### arXiv Fulltext PDF
![[storage/TH7DNMSB/Arora et al. - 2022 - Ask Me Anything A simple strategy for prompting l.pdf]]

### arXiv.org Snapshot
![[storage/LLIKAAQG/2210.html]]


%% Import Date: 2023-02-13T16:14:05.073-07:00 %%
