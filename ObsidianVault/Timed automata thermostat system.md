The [[thermostat hybrid system]] can be changed from using hysteresis to using a minimum time limit on the heater using [[timed automata]] which might look like:
![[Pasted image 20221223203458.png]]
* $s(t) := T_c$ is used so that the heater can immediately turn on if the temperature is lower than 20.
* In this example, the [[state]] consists of the [[mode]] (heating/cooling) and the current value of the clock $s(t)$.