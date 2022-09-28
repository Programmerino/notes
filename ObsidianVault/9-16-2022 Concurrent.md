* A task is a unit of work in task-oriented/dataflow parallelism
	* The program needs to map tasks to threads, and consider task dependencies
* In a task graph, every node at every level can be done in parallel, but they all depend on their ancestors
* Task-oriented parallelism is typically faster than fork/join
	* No explicit joins, no master thread, there can be more tasks than threads, and you don't constantly join and create new threads
* Task-oriented parallelism can often be abstracted by libraries
* When a task queue is used, each thread runs the first task with its dependencies met and inserts new tasks into the queue repeatedly