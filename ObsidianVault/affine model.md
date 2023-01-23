A [[sensor]]/[[actuator]] can be approximated with an affine function if it represents the multiplication of a physical quantity + some bias. All [[affine model]]s are [[linear model]] with some constant offset.

To account for [[saturation]], these models can be written as a piecewise function set maximum and minimum values outside the [[range]] of the [[sensor]]/[[actuator]].

$$
f(x(t))= \begin{cases}a x(t)+b & \text { if } L \leq x(t) \leq H \\ a H+b & \text { if } x(t)>H \\ a L+b & \text { if } x(t)<L\end{cases}
$$
