Your lab write-up, called WRITEUP.md should include:
* Experimental results as required by the prompt
* Analysis of results using perf as necessary to support explanations
* A description of your code organization
* A description of every file submitted
* Compilation instructions
* Execution instructions, particulary for any results presented in the write-up
* Any extant bugs
## Code Organization
I have a header and implementation file for each algorithm implemented (save for the optimizations for the SGLStack, which are implemented using preprocessor directives), and a `runner.cpp` and `main.cpp` files which handle running the tests for the given algorithm and parsing CLI arguments respectively. All algorithms are implemented as C++ classes, and most implement an abstract class which allows the tests to be quite generic (my implementation for SGLQueue and SGLStack have a unique API, so they do not).
## Submitted files
`barrier.cpp/barrier.h`: Wrapper around the default C++ barrier implementation
`Algorithm.h`: Used for parsing which algorithm was chosen with an enum
`Container.h`: Implemented by queues and stacks
`main.cpp`: Handles CLI parsing
`Makefile`: Builds the project
`MSQueue.cpp/MSQueue.h`: An M&S queue
`mutex.cpp/mutex.hpp`: Light wrapper around the pthreads mutex
`Queue.hpp`: Abstract class for queues
`runner.cpp`: Runs the test for the given algorithm and prints the time in nanoseconds taken. Thread creation, task creation, etc. is done here
`SGLQueue.cpp/SGLQueue.h/SGLQueueNoOpt.cpp/SGLQueueNoOpt.h`: A SGL queue, implemented with and without FC (this was before I realized the preprocessor directives were a little more concise)
`SGLStack.cpp/SGLStack.h`: Implementation of a SGLStack with and without elimination and/or FC
`TreiberStack.cpp/TreiberStack.h`: Implementation of a Treiber Stack.
`com_shared.cpp/com_shared.h`: An implementation of the concurrent ordered map using a shared mutex.
`com.cpp/com.h`: The baseline implementation of the concurrent ordered map.
## Compilation instructions
`make`
## Execution Instructions
`main [-t threads] [--algo<treiber,msqueue,sglstack,sglqueue,dictionary>] [-iterations]`
It will print out the nanoseconds taken to run the associated benchmark for that algorithm. This is used for the time elapsed graph, and the `perf` results can be generated using `perf stat -e L1-dcache-load-misses ...` and `perf stat -e page-faults ...`
## Extant Bugs
None that I'm aware of (other than the lack of good memory management for the concurrent containers). The CLI is a bit iffy, but I wouldn't say it's buggy.
## Experimental results
## Concurrent Containers/Concurrent Ordered Map
### Time Elapsed (ns) As a Function of Thread Count
I plotted `Thread Count vs. (Time Elapsed / Thread Count)` since my test had each thread do a fixed amount of work. Given this, the ideal plot is a flat line since a thread count of one is the least amount of work -- the algorithms whose times increase the least as the thread count increases are arguably better suited for these scenarios then.
| Treiber      |              |                  |
|--------------|--------------|------------------|
| Thread Count | Time Elapsed | Corrected Time   |
| 1            | 712573       | 712573           |
| 3            | 3719240      | 1239746.66666667 |
| 6            | 8409423      | 1401570.5        |
| 9            | 13680861     | 1520095.66666667 |
| 12           | 16653318     | 1387776.5        |
| 15           | 22439305     | 1495953.66666667 |
| 18           | 27263955     | 1514664.16666667 |
| 21           | 30724987     | 1463094.61904762 |
![[Pasted image 20221207221300.png]]
| MSQueue      |              |                  |
|--------------|--------------|------------------|
| Thread Count | Time Elapsed | Corrected Time   |
| 1            | 725879       | 725879           |
| 3            | 2470195      | 823398.333333333 |
| 6            | 8578669      | 1429778.16666667 |
| 9            | 13480599     | 1497844.33333333 |
| 12           | 17002463     | 1416871.91666667 |
| 15           | 22059554     | 1470636.93333333 |
| 18           | 27123022     | 1506834.55555556 |
| 21           | 27200952     | 1295283.42857143 |
![[Pasted image 20221207221905.png]]
| SGLStack (with elimination) |              |                  |
|-----------------------------|--------------|------------------|
| Thread Count                | Time Elapsed | Corrected Time   |
| 1                           | 706238       | 706238           |
| 3                           | 2813582      | 937860.666666667 |
| 6                           | 8552289      | 1425381.5        |
| 9                           | 8398407      | 933156.333333333 |
| 12                          | 17661848     | 1471820.66666667 |
| 15                          | 22257505     | 1483833.66666667 |
| 18                          | 25958297     | 1442127.61111111 |
| 21                          | 31175950     | 1484569.04761905 |
![[Pasted image 20221207222220.png]]
| SGLQueue (with FC) |              |                  |
|--------------------|--------------|------------------|
| Thread Count       | Time Elapsed | Corrected Time   |
| 1                  | 729363       | 729363           |
| 3                  | 2543249      | 847749.666666667 |
| 6                  | 7808049      | 1301341.5        |
| 9                  | 12618365     | 1402040.55555556 |
| 12                 | 16843662     | 1403638.5        |
| 15                 | 38167142     | 2544476.13333333 |
| 18                 | 26975012     | 1498611.77777778 |
| 21                 | 31471914     | 1498662.57142857 |
![[Pasted image 20221207222403.png]]
| Concurrent Ordered Map |              |                  |
|------------------------|--------------|------------------|
| Thread Count           | Time Elapsed | Corrected Time   |
| 1                      | 751881       | 751881           |
| 3                      | 2448463      | 816154.333333333 |
| 6                      | 7485319      | 1247553.16666667 |
| 9                      | 13325873     | 1480652.55555556 |
| 12                     | 16893643     | 1407803.58333333 |
| 15                     | 15418045     | 1027869.66666667 |
| 18                     | 26909283     | 1494960.16666667 |
| 21                     | 32425529     | 1544072.80952381 |
![[Pasted image 20221207231355.png]]
## Perf Results
### Page Faults
| Algorithm | Page Faults |
|-----------|-------------|
| SQLQueue  | 979         |
| SGLStack  | 981         |
| MSQueue   | 976         |
| Treiber   | 983         |
![[Pasted image 20221207222924.png]]
## L1 Cache Misses
| Algorithm | L1 Cache Misses |
|-----------|-----------------|
| SQLQueue  | 142424          |
| SGLStack  | 140060          |
| MSQueue   | 145054          |
| Treiber   | 138880          |
![[Pasted image 20221207223159.png]]