# CSCI 4830/7000
## Deep Reinforcement Learning and Robotics
## Homework #2A - Synchronous Dynamic Programming and the Gym API

In this homework, you will try some of the prediction and control algorithms we covered in class in a setting you are well familiar with by now - the grid world (with stochastic dynamics)! You will also be implementing the grid world as an environment in preparation for Homework #2B, in which you will train an agent using $Q$-learning (which is model-free).

![](https://cdn.mathpix.com/cropped/2022_10_06_0110c22aa7ad1a6317e3g-1.jpg?height=398&width=434&top_left_y=679&top_left_x=843)

In our grid world, your agent can move in the four cardinal directions, and there are four types of cells. Your agent starts in the blue cell (Start), wants to get to the green cell (Goal), cannot enter the black cell (Obstacle), and wants to avoid the tangerine cell (Trap). Entering the green or tangerine cell ends the episode - the agent either reaches the goal or falls into the trap. If the agent attempts to move in an illegal direction (i.e., out of the grid world boundaries or into an obstacle), it remains in the same cell.

We define the following rewards:

- $g$, the reward for landing in the green state;

- $t$, the reward for landing in the tangerine state; and

- $w$, the reward for any other outcome following an action.

Recall also that the discount factor is represented by $\gamma$.

The agent has some probability of ending up in a cell orthogonal to its intended direction of movement. It ends up in the neighboring cell in the intended direction with probability $p$, and in an orthogonal neighboring cell with probability $q=(1-p)$.

Hint: To clarify with an example, if the agent elects to move east when it is in the bottomright corner, it will end up in the cell to its north with probability $\frac{q}{2}$ and remain in the same cell otherwise (Fig. 1 and 2). 

![](https://cdn.mathpix.com/cropped/2022_10_06_0110c22aa7ad1a6317e3g-2.jpg?height=404&width=434&top_left_y=283&top_left_x=843)

Fig. 1. At $t=0$, the agent is at $\mathbf{X}_{\mathbf{0}}$. It elects to move east.

![](https://cdn.mathpix.com/cropped/2022_10_06_0110c22aa7ad1a6317e3g-2.jpg?height=395&width=434&top_left_y=770&top_left_x=843)

Fig. 2. At $t=1, P\left(\mathbf{Y}_{\mathbf{1}}\right)=\frac{q}{2}$ and $P\left(\mathbf{Z}_{1}\right)=p+\frac{q}{2}$.

1. Let $g=50, t=-50, w=-1, \gamma=0.9, p=0.7$

(i) Implement iterative policy evaluation and find the state values when following the uniform random policy. [30 pts]

Attached.
Results after 1000 steps:
```
0 0 -4.736842105
0 1 -4.956349031
0 2 -4.736842105
0 3 -4.956349031
1 0 -4.956349031
1 1 -5.29961089
1 2 -6.179660843
1 3 -5.29961089
2 0 -5.817526681
2 1 -6.179660843
2 2 -12.54282037
2 3 -6.179660843
3 0 -4.736842105
3 1 -24.12520064
3 2 0.0
3 3 0.0
```

(ii) Implement policy iteration and find the optimal policy and state values. [30 pts]

Attached.
Results:
```
0 0 Up
0 1 Up
0 2 Up
0 3 Right
1 0 Up
1 1 Left
1 2 Up
1 3 Right
2 0 Up
2 1 Up
2 2 Up
2 3 Up
3 0 Left
3 1 Up
3 2 Left
3 3 Left
0 0 -2.31929798
0 1 1.50067636
0 2 6.274646944
0 3 11.05698069
1 0 -3.538294336
1 1 -0.8486521501
1 2 10.44526513
1 3 16.90385027
2 0 -5.131624647
2 1 -3.527034032
2 2 5.990154444
2 3 22.58730497
3 0 -10.65153708
3 1 -41.38467213
3 2 0.0
3 3 0.0
```

(iii) Bonus: Implement value iteration and find the optimal policy and state values. [Bonus: 20 pts]

2. Implement the grid world environment while adhering to the API popularized by OpenAI Gym. [40 pts] You are not required to render the grid world (though you may, of course). At a minimum, your environment class should contain the following methods:
a. $\operatorname{make}(g, t, w, p)$,
b. reset(),
c. step (action).

```python
from enum import Enum, auto
from typing import Optional, Tuple, cast
import gym
from gym import spaces
from gym.envs.registration import register

register(
    id='StochasticGridWorld-v0',
    entry_point='__main__:StochasticGridWorldEnv'
)

Pos = Tuple[int, int]
Vector = Tuple[int, int]

initAgentPos: Pos = (1, 0)
targetLocation: Pos = (3, 3)
trapLocation: Pos = (3, 2)
obstacleLocation: Pos = (1, 2)


class Move(Enum):
    Up = auto()
    Left = auto()
    Down = auto()
    Right = auto()


actionToMove: dict[int, Move] = {
    0: Move.Up,
    1: Move.Left,
    2: Move.Down,
    3: Move.Right
}


moveToVec: dict[Move, Tuple[int, int]] = {
    Move.Up: (0, 1),
    Move.Right: (1, 0),
    Move.Left: (-1, 0),
    Move.Down: (0, -1),
}


stochastic: dict[Move, Tuple[Move, Move, Move]] = {
    Move.Up: (Move.Up, Move.Left, Move.Right),
    Move.Down: (Move.Down, Move.Left, Move.Right),
    Move.Left: (Move.Left, Move.Up, Move.Down),
    Move.Right: (Move.Right, Move.Up, Move.Down),
}


def adjustPosition(pos: Pos, a: Move, grid_size: int) -> Pos:
    (x, y) = pos
    (x_, y_) = moveToVec[a]
    newX = x + x_
    newY = y + y_
    new = (newX, newY)
    return pos if new == obstacleLocation or newX > (grid_size - 1) or newY > (grid_size - 1) or newX < 0 or newY < 0 else new


class StochasticGridWorldEnv(gym.Env):

    size: int
    observation_space: spaces.Tuple
    action_space: spaces.Discrete
    _agentLocation: Pos
    p: float
    g: float
    t: float
    w: float
    intended: Optional[Move] = None
    actual: Optional[Move] = None

    def __init__(self, g: float, t: float, w: float, p: float, size: int = 4) -> None:
        self.size: int = size
        self.p: float = p
        self.g: float = g
        self.t: float = t
        self.w: float = w
        self.observation_space: spaces.Tuple = spaces.Tuple(
            (spaces.Discrete(3), spaces.Discrete(3)))

        self.action_space: spaces.Discrete = spaces.Discrete(4)

    def _obs(self):
        return self._agentLocation

    def _info(self):
        return {"size": self.size, "intended": self.intended, "actual": self.actual, "location": self._agentLocation, "p": self.p, "g": self.g, "t": self.t, "w": self.t}

    def reset(self, seed=None, options=None):
        # We need the following line to seed self.np_random
        super().reset(seed=seed)  # type: ignore

        self._agentLocation: Pos = initAgentPos

        return self._obs(), self._info()

    def step(self, action: int):
        (corr, bad1, bad2) = stochastic[actionToMove[action]]
        realAction: Move
        if self.np_random.binomial(1, self.p):  # type: ignore
            realAction = corr
        else:
            if self.np_random.binomial(1, 0.5):  # type: ignore
                realAction = bad1
            else:
                realAction = bad2

        self.intended = corr
        self.actual = realAction

        self._agentLocation: Pos = adjustPosition(self._agentLocation,
                                                  realAction, self.size)
        # An episode is done iff the agent has reached the target
        terminated: bool
        reward: float
        if self._agentLocation == trapLocation:
            terminated = True
            reward = self.t
        elif self._agentLocation == targetLocation:
            terminated = True
            reward = self.g
        else:
            terminated = False
            reward = self.w

        return self._obs(), reward, terminated, False, self._info()


def policy(i: int) -> int:
    return {
        0: 0,
        1: 3,
        2: 0,
        3: 0,
        4: 3
    }[i % 5]


env = cast(StochasticGridWorldEnv, gym.make(
    "StochasticGridWorld-v0", g=50, t=-50, w=-1, p=0.7))
for j in range(10):
    print(
        "=====================resetting======================\n\n\n\n")
    observation, info = env.reset(seed=j)
    print(info)
    for i in range(1000):
        action = policy(i)
        observation, reward, terminated, truncated, info = env.step(action)
        print(actionToMove[action], " -> ", info, " reward: ", reward)
        if terminated or truncated:
            break

env.close()

```

Bonus: Instead of simply implementing the environment class while adhering to the Gym API, actually create a custom Gym environment. [Bonus: 15 pts]

If the above links don't work, please use these:

- https://github.com/openai/gym

- https://www.gymlibrary.dev/content/environment creation/