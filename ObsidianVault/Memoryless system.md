A system is memoryless if it does not rely on past inputs, AKA, can be written as a function of only $x(t)$ at a time $t$.
* These can easily be represented with `map` in [[Functional Reactive Programming]]
* The [[Integrator actor]] is thus not memoryless since it is an [[accumulator]], while the [[Signal adder]] is since it does not rely on past values.