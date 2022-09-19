# CSCI 4830/7000
## Deep Reinforcement Learning and Robotics
## Homework #1 - Grid World (v2)
The grid world is often used in reinforcement learning to introduce students to the concepts of policies and state values.

![](https://cdn.mathpix.com/cropped/2022_09_12_42666f0f675ce7d133ccg-1.jpg?height=401&width=431&top_left_y=580&top_left_x=847)

In our grid world, your agent can move in the four cardinal directions, and there are four types of cells. Your agent starts in the blue cell (Start), wants to get to the green cell (Goal), cannot enter the black cell (Obstacle), and wants to avoid the tangerine cell (Trap). Entering the green or tangerine cell ends the episode - the agent either reaches the goal or falls into the trap. If the agent attempts to move in an illegal direction (i.e., out of the grid world boundaries or into an obstacle), it remains in the same cell.

![](https://cdn.mathpix.com/cropped/2022_09_12_42666f0f675ce7d133ccg-1.jpg?height=404&width=431&top_left_y=1354&top_left_x=847)

An optimal policy for this grid world will look something like this. Note that you can have more than one optimal action in a given state. For Q1 to Q4, "optimal" means the shortest path to the goal (and well, that means you can't go into the trap cell).

1. From the start state, how many optimal sequences of actions are there to the goal state? [5]
==From the start state, there are two optimal sequences of actions to the goal state.==
2. What is one of these sequences? Give a sequence of actions, e.g., " $\uparrow \rightarrow \downarrow \downarrow \leftarrow \uparrow \uparrow ” .$ [5]

==One of these sequences is $\uparrow \rightarrow \uparrow \uparrow \rightarrow$ .==

Let us now add some stochasticity to our grid world. So far, our actions have been deterministic – when the agent elects to move up, it always ends up in the cell above in the next step. What happens when the agent has some probability of moving in an unintended direction? Say, the agent moves in the intended direction $70 \%$ of the time, and in a random orthogonal direction the other $30 \%$ of the time (i.e., if it wants to move up, it will end up in the cell to the left with probability $0.15$, and the cell to the right with probability $0.15$ ).

3. With what probability will the agent reach the goal state if it's following the sequence you gave in Q2? Show your work. [10] Note: The agent follows the exact sequence you gave in Q2, regardless of whether the actions work out as intended.

==I wrote the following model to evaluate the success rate of the sequence I provided above:==
```haskell
module Main where

import Control.Monad.Bayes.Class (
  MonadSample,
  categorical,
 )
import Control.Monad.Bayes.Enumerator (enumerate)
import Data.Vector as V (fromList)
import Main.Utf8 qualified as Utf8
import Prelude hiding (Down, Left, Right, state)

data Direction = Left | Right | Up | Down

data TileState = Empty | Goal | Obstacle | Fail deriving stock (Show, Eq, Ord)

board :: [[TileState]]
board =
  [ [Empty, Empty, Empty, Goal]
  , [Empty, Obstacle, Empty, Fail]
  , [Empty, Empty, Empty, Empty]
  , [Empty, Empty, Empty, Empty]
  ]

deterministic :: forall {a}. Num a => Direction -> [a]
deterministic x =
  case x of
    Left -> [1, 0, 0, 0]
    Right -> [0, 1, 0, 0]
    Up -> [0, 0, 1, 0]
    Down -> [0, 0, 0, 1]

stochastic :: forall {a}. Fractional a => Direction -> [a]
stochastic x = case x of
  Left -> [0.7, 0, 0.15, 0.15]
  Right -> [0, 0.7, 0.15, 0.15]
  Up -> [0.15, 0.15, 0.7, 0]
  Down -> [0.15, 0.15, 0, 0.7]

stochasticAction :: forall {m :: Type -> Type}. MonadSample m => Direction -> m Direction
stochasticAction x =
  do
    real <- categorical (V.fromList (stochastic x))
    return
      ( case real of
          0 -> Left
          1 -> Right
          2 -> Up
          3 -> Down
          _ -> error "Wrong categorical result"
      )

fromPosition :: (Int, Int) -> Maybe TileState
fromPosition (x, y) = board !!? x >>= (!!? y)

data ActionResult
  = Continue (Int, Int)
  | StopGoal
  | StopFail

futureState :: (Int, Int) -> Maybe Direction -> (TileState, (Int, Int))
futureState (x, y) act =
  let prospectivePosition = case act of
        Just Left -> (x, y - 1)
        Just Right -> (x, y + 1)
        Just Up -> (x - 1, y)
        Just Down -> (x + 1, y)
        Nothing -> (x, y)
   in case (fromPosition prospectivePosition, fromPosition (x, y)) of
        (Just a, _) -> (a, prospectivePosition)
        (Nothing, Just currState) -> (currState, (x, y))
        _ -> error "impossible scenario"

applyAction :: (Int, Int) -> Maybe Direction -> ActionResult
applyAction pos act =
  let (state, newPos) = futureState pos act
   in case state of
        Empty -> Continue newPos
        Goal -> StopGoal
        Obstacle -> Continue pos
        Fail -> StopFail

model1 :: forall {m :: Type -> Type}. MonadSample m => (Int, Int) -> [Direction] -> m TileState
model1 position [] = do
  let (newState, _) = futureState position Nothing
  return newState
model1 position (action : remainingActions) = do
  realAction <- stochasticAction action
  let newState = applyAction position (Just realAction)
  do
    case newState of
      Continue pos -> model1 pos remainingActions
      StopGoal -> return Goal
      StopFail -> return Fail

main :: IO ()
main = do
  Utf8.withUtf8 $ do
    let x = enumerate (model1 (3, 1) [Up, Right, Up, Up, Right])
    do print x

```
==By enumerating each possible combination of events and weighing them by probability, the overall likelihood of reaching the goal is only around ~17.578750000002552.==
4. What are the optimal actions in the two marked cells? Draw the arrows. [10]

Hint: The optimal actions should never allow the agent any chance to fall into the trap.

![](https://cdn.mathpix.com/cropped/2022_09_12_42666f0f675ce7d133ccg-2.jpg?height=404&width=437&top_left_y=1121&top_left_x=844)

![[Pasted image 20220912200604.png]]

==Since the optimal policy must always avoid the possibility of failing, each tile only has one possible solution. For the upper-left choice, the available options are moving up, down, and left since moving right obviously goes into the trap. If you move up, actually moving right could occur since right is orthogonal to up, and if you move down, the same could occur. Thus, the only possibility is left. For the bottom-right, left and right are eliminated since they both have up and an orthogonal direction. Up obviously doesn't work, so down is the only available choice==

Now let us return to the deterministic grid world and start considering rewards. Instead of having explicitly labeled goal and trap states, let them now be implicitly defined with rewards. We define the following rewards:

- $g$, the reward for landing in the green state;

- $t$, the reward for landing in the tangerine state; and

- $w$, the reward for landing in the white states.

Recall also that the discount factor is represented by $\delta$. For $Q 5$ onwards (now that we have introduced rewards to the setting), "optimal" means maximizing the cumulative discounted reward.

5. For $g=50, t=-50, w=-1, \delta=0.9$, what is the value of each state in the grid world? A few of them are filled in for you. [10]

Note: It can be annoying to calculate state values, since there are multiple conventions regarding when and how rewards are granted to the agent. To steer clear of this (and the need for us to work with rigorous notation), we provide a few state values in Q5. From the numbers there, it should be pretty unambiguous how you are expected to calculate the rest of the state values. As a sanity check, the state value of the cell to the right of the start cell in $Q 5$ is $29.366$ (you can round your answers to one decimal place). 

![](https://cdn.mathpix.com/cropped/2022_09_12_42666f0f675ce7d133ccg-3.jpg?height=404&width=437&top_left_y=237&top_left_x=844)

$$
\begin{aligned}
\text{Distance 2} &\Rightarrow -1 + (0.9 \cdot 44) = 38.6\\
\text{Distance 3} &\Rightarrow -1 + (0.9 \cdot 38.6) = 33.74\\
\text{Distance 4} &\Rightarrow -1 + (0.9 \cdot 33.74) = 29.366\\
\text{Distance 5} &\Rightarrow -1 + (0.9 \cdot 29.366) = 25.4294\\
\text{Distance 6} &\Rightarrow -1 + (0.9 \cdot 25.4294) = 21.88646\\
\end{aligned}
$$
![[Pasted image 20220912203728.png]]
6. For $g=10, t=-10, w=-20, \delta=0.9$, what is the optimal policy? [10]

![](https://cdn.mathpix.com/cropped/2022_09_12_42666f0f675ce7d133ccg-3.jpg?height=399&width=434&top_left_y=768&top_left_x=843)

==I first calculated the value of each state (see below), and then followed the path with the highest cumulative reward. In this case, it can be found by greedily choosing the action with the highest reward from the options at each step. From this, it can either be $\uparrow \rightarrow \uparrow \uparrow \rightarrow$ or $\rightarrow \uparrow \uparrow \uparrow \rightarrow$.==

7. Continuing from $Q 6$, what is the value of each state? [10]

![](https://cdn.mathpix.com/cropped/2022_09_12_42666f0f675ce7d133ccg-3.jpg?height=401&width=437&top_left_y=1298&top_left_x=844)
![[Pasted image 20220912204441.png]]
$$
\begin{aligned}
\text{Distance 1} &\Rightarrow -20 + (0.9 \cdot 10) = -11\\
\text{Distance 2} &\Rightarrow -20 + (0.9 \cdot -11) = -29.9\\
\text{Distance 3} &\Rightarrow -20 + (0.9 \cdot -29.9) = -46.91\\
\text{Distance 4} &\Rightarrow -20 + (0.9 \cdot -46.91) = -62.219\\
\text{Distance 5} &\Rightarrow -20 + (0.9 \cdot -62.219) = -75.9971\\
\text{Distance 6} &\Rightarrow -20 + (0.9 \cdot -75.9971) = -88.39739\\
\end{aligned}
$$
8. For $g=100, t=-100, w=1, \delta=1$, what is the optimal policy? [10]

![](https://cdn.mathpix.com/cropped/2022_09_12_42666f0f675ce7d133ccg-3.jpg?height=401&width=434&top_left_y=1830&top_left_x=843)
$$
\begin{aligned}
\text{Distance 1} &\Rightarrow 1 + 100 = 101\\
\text{Distance 2} &\Rightarrow 1 + 101 = 102\\
\text{Distance 3} &\Rightarrow 1 + 102 = 103\\
\text{Distance 4} &\Rightarrow 1 + 103 = 104\\
\text{Distance 5} &\Rightarrow 1 + 104 = 105\\
\text{Distance 6} &\Rightarrow 1 + 105 = 106\\
\end{aligned}
$$
==This assumes the reward function considers future reward using the shortest path to the goal as is done in the previous questions. Given this, the best policy would be to go left and hug the left wall until you reach the top, and then to turn right until the goal is reached.==
9. Continuing from $Q 8$, what is the value of the highest valued state? [5]
==The value of the highest valued state would be 106 using the reasoning above==