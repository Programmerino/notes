* The Treiber stack and M&S queue don't scale well because...
	* They promote too much fairness which hurts cache locality
	* There is too much wasted work on failed CAS operations
	* There is contention on the head for the Treiber stack and the head/tail for the M&S queue