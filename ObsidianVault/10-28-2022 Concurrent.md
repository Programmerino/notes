* MSI
	* Modified
		* I've written to or am about to write to this cache line
		* There shouldn't be any other copy of the cache line
	* Shared
		* Read-only, multiple cores have it
	* Invalid
		* You can't use the cache line for anything
	* Processor events…
		* PrWr(...) -- write to a cache line
			* Send BusUp(...) with the cache-line across the bus. All other cores will invalidate their copies
		* PrRd(...) - read from a cache line
	* Bus events…
		* BusRd: Request the cache line
			* It will initially be shared after doing this
		* BusRdX: Request the cache line and invalidate the line in the caches of other processors (because I'm about to write)
		* BusUp: Request the line is invalidated from other processors (I already have the line, I need to upgrade it)
		* Flush: Request a line to be written back to memory
	* If we have a shared cache line...
		* If we get PrRd, we don't need to do anything
		* If we get PrWr, we need to change to modified and send BusUp to everyone
		* If we receive BusUp or BusRdX, we need to change to invalid
	* If we have a modified cache line...
		* If we get PrRd or PrWr, we don't do anything
		* If we get BusRd, we transition to shared by trickling our changes up the cache hierarchy (a flush)
		* If we get BusRdX, we do the same thing as BusRd, but we transition to invalid
	* If we have an invalid cache line...
		* If we get PrWr, we send a BusRdX to get a validate copy of the line we need to write to, and to make it writable
		* If we get PrRd, we send BusRd to get a shared copy of the line
		* Ignore BusRd, BusRdX, and BusUp
	* This is dogshit:
		* If we want to do a read and then a write (e.g. an increment), if the first read is a miss, we have to:
			* Go into shared, invalidate everything else, then go into modified, then write.
		* This increment scenario is common enough where this is just too much unnecessary traffic.
	* MESI:
		* If we instead make it the responsibility of other nodes to tell us if they want to share the cache line, then it's more efficient
		* If we have an invalid cache line...
			* Ignore BusRd, BusRdX, and BusUp
			* If we get PrWr, send a BusRdX and transition to modified
			* If we get PrRd, either send a BusRd(E) or BusRd(S)
				* If we just got the cache line from memory, we'll do BusRd(E) and if we got it from a neighbor, we know it's not exclusive, so we'll do BusRd(S)
		* If we have a shared line…
			* Ignore PrRd
			* If we get BusRdX or BusUp, transition to invalid
			* If we get PrWr, send a BusUp and transition to modified
		* If we have an exclusive line…
			* If we get BusRd, transition to shared
			* If we get BusUp, transition to invalid
			* Ignore PrRd
			* If we get PrWr, I can go directly to modified with no bus communication.
		* If we have a modified line...
			* Ignore PrRd and PrWr
			* If we get BusRd, transition to shared and flush our changes
			* If we get BusRdX, transition to invalid and flush our changes
* Source
	* Costs 2-hops for most operations
	* It's a lot more complicated because the bus doesn't enforce an order anymore
	* MESI  + Forward:
		* When a cache-line is shared, at most one node is designated “forward” which can provide copies if needed
	* 