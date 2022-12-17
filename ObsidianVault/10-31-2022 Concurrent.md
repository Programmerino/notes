* MESIF
	* All cache lines have a home node
	* For each transaction:
		* The requester broadcasts to all nodes in the P2P network one at a time
		* All nodes respond with:
			* The cache line state
			* Potentially additional data
			* An indication if there is a conflicting transaction
		* The requester tells the home node of its transaction and conflicts
		* The home node mediates the conflict, and sends a new cache line if needed
	* If we are in an invalid state and want to read the cache line, we will send BusRd to every node, one at a time. Every node will respond with it's state of the cache line, and the forward node will transition to shared and send the cache line to us. We will then transition to forward. This means that the forward node will always be the latest node to receive the cache line
		* We then tell the home node that we don't need it to do anything, and then tell the previous forward node that we got the data, all is good
	* If two nodes want to write to the same cache line...
		* They will both send their requests, and by the time both nodes receive all their responses, they will know that they are conflicting, although one will have their request fulfilled from the follow node through a conceptually random process and the other will still be waiting for a response from the follow node since an ACK hasn't been sent back yet. Whoever got the data asks the home node for conflict resolution. The node with the data follows the instructions, sends the ACK to the previous follow node. After the ACK, the cucked node will receive it's response and ask for help from the home node. The home node knows that the sigma node is already going to resolve the conflict, so it tells the cuck to wait. 
* Directory protocols
	* Cache-lines reside at home nodes (designated with maybe a hash or based on their physical addresses)
	* The directory at the home node keeps track of where the cache lines are and their status. All state changes will go through the home node
	* It works because the home node creates a total order and simulates the bus from the broadcast protocol. There is greater latency
	* MSI for directories:
		* Events from processor:
			* PrRd: Processor request to read a cache line
			* PrWr: Processor request to write a cache line
		* Network events from cache:
			* Rd: Request read-only access to a line
			* RdX: Request write-access to a line
			* Upgr: Upgrade permissions from read to write
			* Flush: Flush the line back to the backing store
		* Network events from the directory:
			* Downgr: Downgrade permissions from write to read
			* Inv: Invalidate a line
			* Data: Actual data transfer
	* Example:
		* If CPU 1 wants to write to cache line B, it will send Upgr(B) to the directory which will send Inv(B) to CPU 2 which will invalidate it's cache line, send back ACK, and then the directory can ACK CPU 1
		* If CPU 2 wants to read cache line B from an invalid state and CPU 1 has it in a modified state, it will send a Rd(B) to the directory which will send Downgr(B) to CPU 1 which will transition to shared and flush its data back to the directory. When it sees that, it gives the data to CPU 2 and allows it to transition to shared
* OpenMP
	* `critical` creates a critical section, conceptually a lock unlock