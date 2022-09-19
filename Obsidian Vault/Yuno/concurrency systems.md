Go-like:
* A keyword that allows running any function on a separate green thread
* Inter-thread communication is done with channels that allow threads to wait for information to come across it
Nursery (https://vorpus.org/blog/notes-on-structured-concurrency-or-go-statement-considered-harmful):
* An object which allows running functions concurrently, but cannot be destroyed until all the functions are finished (when used in conjunction with an RAII-like system, enforces functions to not have background tasks running after returning)
* Nurseries can be passed to functions to make them outlast their return, but it's explicit and is limited to the caller's scope
* Nursery-like objects can have custom functionality, like restarting functions if they encounter an error
* Threads can be canceled which raises an exception the next time a “checkpoint” operation is executed, but the nursery won't finish until all the cleanup handlers are run
Pony:
* 