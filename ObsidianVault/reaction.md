In the context of [[Discrete Dynamics in CPS]], a reaction is a step in a sequence of steps triggered by the surrounding environment which observes the input values and calculates outputs at the same time $t$.

They are several ways to categorize reactions…
* [[Time-triggered reaction]]
* [[Event-based reaction]]

## inputs/outputs
The inputs/outputs are also called **ports**, and each port has an accompanying type $V_p$ characterizing the set of possible values it can take on when present. Therefore, the total set of values the port can be is described by $p \in V_p \cup \{absent\}$. For a [[pure signal]], $V_p$ will always be $\{present\}$. The input/output is **valuated** when it is assigned a value or absence.