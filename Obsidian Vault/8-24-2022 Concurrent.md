* Scaling up refers to buying better quality hardware, larger memory, etc. while scaling out refers to buying cheap servers in higher quantities. Scaling out tends to be better bang for buck, but scaling up tends to be faster in general and can have more quality control.
* Decomposition breaks down a program into components which aren't reliant on each other's results, and thus can be run in parallel.
* Throughput is the # of operations per unit time and is the same as…
	* Bandwidth when transferring data
	* IPS when running instructions on a processor
	* IOPS when running many I/O operations.
	* FLOPS when running floating point operations.
* Latency is time to operation completion.
* Throughput can almost always be improved by adding more resources
	* FLOPS/IPS by adding more cores, etc.
* Latency, however, can't usually be improved with more resources and requires better technology
	* Better processor, etc.
* Throughput and latency are typically antithetical to each other since having less units lowers latency since you don't have to deal with managing multiple units, while processing multiple units at the same time is very important to throughput. This is also mathematically true due to Little's Law
	* Balancing the two typically looks like raising throughput until latency spikes.
* Little's Law says that concurrency/latency = bandwidth as long as concurrency and latency are constant. This also means that sequential programs are 1/latency = bandwidth.
* Amdahl's Law calculates the speed-up of a program when a portion is optimized and is $\frac{1}{(1-p) + \frac{p}{s}}$ where $p$ is the portion optimized, $s$ is how much faster the optimized portion runs, and the result is the speedup of the whole program.
	* If the optimization is making it parallel, $s$ is typically the number of threads and $p$ is the portion which can be parallelized.
* “Embarrassingly” parallel problems can be completely parallelized.