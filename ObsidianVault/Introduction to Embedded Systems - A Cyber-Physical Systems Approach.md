## Analysis
```query
[ANALYSIS] file:"Introduction to Embedded Systems - A Cyber-Physical Systems Approach.md"
```
## Preface
### xi
* CPS is embedded software which interacts with physical processes, usually with a feedback loop
	* Computer science is “procedural epistemology”, while physical processes are not so procedural
	* Bridges sequential semantics with a concurrent physical world
### xiii
* CPS models are for dynamics, the evolution of a system state over time. They have formal properties which are predictive of the real physical system.
### 4
* The physical plant is the “physical” part of a cyber-physical system (e.g., mechanical parts, biological/chemical processors, human operators)
* Computational platforms are sensors, actuators, 1+ computers, and potentially 1+ OSes.
* The network fabric is networking
* The platforms and network fabric make up the cyber in cyber-physical system.
* A control law determines based on sensor data what commands to issue to the actuator
	* This creates a feedback control loop.
### 9
* Models gain a deeper understanding of a system through imitation and specify **what** a system does.
* Design is the structured creation of artifacts, it specifies **how** a system does what it does.
* Analysis dissects a system to gain a deeper understanding, the **why**
### 12
* A model has high fidelity if it accurately describes the properties of a system, and abstracts it if it omits details
* Static properties do not change during the operation of the system
## 2: Continuous Dynamics
### 18
* Classical mechanics deals with moving mechanical parts, and the same strategies are used for circuits, chemical processes, and biological processes and are typically modeled with differential/integral equations for continuous motion, and as instantaneous events for discrete motion (collisions). The mix of both is called hybrid systems modeling
### 19
* Motion of physical objects can be represented with 6 degrees of freedom: x, y, z, roll (angle of rotation around x), yaw (angle of rotation around y), pitch (rotation around z). Each of these are functions of time, yielding distance/angle along/relative to an axis (continuous-time signals). They can be combined into vector-valued functions as well.
* Newton's second law relates force with acceleration where acceleration is the second derivative of position: $\textbf{F}(t) = M\ddot{x}(t)$
	* This yields a force vector in three direction.
	* Velocity is the integral of acceleration, given by: $\forall t>0, \quad \dot{\mathbf{x}}(t)=\dot{\mathbf{x}}(0)+\int_0^t \ddot{\mathbf{x}}(\tau) d \tau$ where $\dot{\mathbf{x}}(0)$ is the initial velocity in three directions or $\forall t>0, \quad \dot{\mathbf{x}}(t)=\dot{\mathbf{x}}(0)+\frac{1}{M} \int_0^t \mathbf{F}(\tau) d \tau$.
	* Position is the integral of velocity, given by: $\begin{aligned} \mathbf{x}(t) & =\mathbf{x}(0)+\int_0^t \dot{\mathbf{x}}(\tau) d \tau \\ & =\mathbf{x}(0)+t \dot{\mathbf{x}}(0)+\frac{1}{M} \int_0^t \int_0^\tau \mathbf{F}(\alpha) d \alpha d \tau\end{aligned}$ where x(0) is the initial position.
* Torque is a three-element vector as a function of time: $\mathbf{T}(t)=\frac{d}{d t}(\mathbf{I}(t) \dot{\theta}(t))$ where $\textbf{I}(t)$ is the **moment of inertia tensor** of the object (3x3 matrix based on the geometry and orientation of the object). For a sphere, I can be replaced with a single constant scalar $\mathit{I}$. 
### 22
* Rotation velocity is the integral of acceleration: $\dot{\theta}(t)=\dot{\theta}(0)+\int_0^t \ddot{\theta}(\tau) d \tau$. For a spherical object, this becomes $\dot{\theta}(t)=\dot{\theta}(0)+\frac{1}{I} \int_0^t \mathbf{T}(\tau) d \tau$.
* Orientation is the integral of rotational velocity: $\begin{aligned} \theta(t) & =\theta(0)+\int_0^t \dot{\theta}(\tau) d \tau \\ & =\theta(0)+t \dot{\theta}(0)+\frac{1}{I} \int_0^t \int_0^\tau \mathbf{T}(\alpha) d \alpha d \tau\end{aligned}$
* A model-order reduction simplifies a model given some knowledge about where it is used. For example, we might be able to ignore the y-axis for something like a car's movement, since we don't expect it to rise or fall.
### 24
* A model of a physical system is a differential/integral equation relating input signals (force or torque) to output signals (position, orientation, velocity, or rotational velocity). These can be composed into larger systems.
### 25-27
* A continuous-time system is one which operates on continuous-time signals. An actor is a function mapping functions ($\mathbb{R} \rightarrow \mathbb{R}$) to functions of the same type given some parameters. An example of a potential actor would be one changing a component torque function to a component rotation velocity function given initial angular velocity and moment of inertia.
	* Composing actors is called cascade composition.
	* The Scale actor takes a parameter $a$ and multiply the result of $x_1$ by $a$ to produce $y_1$. It looks like a triangle
	* The Integrator actor takes an initial value $i$ and is defined by $\forall t \in \mathbb{R}, \quad y_2(t)=i+\int_0^t x_2(\tau) d \tau$. It is written with an integration symbol inside a box`
	* They can accept multiple input signals
	* A signal adder adds the results of two signals
		* For substracting, add a minus sign near the signal which should be $x_2(t)$ in $x_1(t) - x_2(t)$. You could describe this with: $\forall t \in \mathbb{R}, \forall x_1, x_2 \in(\mathbb{R} \rightarrow \mathbb{R}), \quad\left(S\left(x_1, x_2\right)\right)(t)=y(t)=x_1(t)-x_2(t)$
	* [ANALYSIS] It seems like these actors have a very clear representation in Functional Reactive Programming
### 28-29
* A system is causal if its output only depends on current and past inputs and is defined as…
	* For a continuous-time signal $x: \mathbb{R} \rightarrow A$ where $\left.x\right|_{t \leq \tau}$ is the "current and past inputs” at time $\tau$, then a continuous-time system $S: A^\mathbb{R} \rightarrow B^\mathbb{R}$ is causal if $\forall_{x_1,x_2 \in A^\mathbb{R}}\forall_{\tau\in\mathbb{R}}\left(\left.x_1\right|_{t \leq \tau}=\left.\left.x_2\right|_{t \leq \tau} \Rightarrow S\left(x_1\right)\right|_{t \leq \tau}=\left.S\left(x_2\right)\right|_{t \leq \tau}\right)$. That is, if two inputs are identical up to $\tau$, then the outputs are identical up to $\tau$. It is strictly causal if $\leq$ is changed to $<$ (typically used in feedback systems).
### 29-30
* A system is memoryless if it does not rely on past inputs, AKA can be written as a function of only $x(t)$ at a time $t$ ([ANALYSIS] can easily be represented with `map` in FRP). The Integrator actor is not memoryless, but an adder is.
* If a system is strictly causal and memoryless, then its output is constant for all inputs.
* Linear and time invariant (LTI) systems are both linear, and time invariant...
	* A system is linear if it satisfies superposition: $\forall x_1, x_2 \in X$ and $\forall a, b \in \mathbb{R}, \quad S\left(a x_1+b x_2\right)=a S\left(x_1\right)+b S\left(x_2\right)$.
	* A system is time-invariant if "sliding" the value for $t$ does not change the result. In other words...
		* If $\forall x \in X$ and $\forall t \in \mathbb{R}, \quad\left(D_\tau(x)\right)(t)=x(t-\tau)$ then $\forall x \in X$ and $\forall \tau \in \mathbb{R}, \quad S\left(D_\tau(x)\right)=D_\tau(S(x))$.
	* If you can achieve an LTI model, you should do so if the sacrifice isn't too great.
### 30
* A system is bounded-input bounded-output stable if there is a maximum bound on the outputs for any inputs which have a maximum bound.
### 31
* A system with feedback has an output feeding into a prior actor. Systems which seek to compensate for error are examples. The value used in the feedback is also called the feedback, and the signal produced from it is called the correction signal. Since it can normally only affect future errors, the system usually includes at least one strictly causal actor.
### 32
* In a proportional control feedback loop, the control signal is scaled by the error
## 38