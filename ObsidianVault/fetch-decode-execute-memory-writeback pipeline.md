The fetch-decode-execute-memory-writeback pipeline is a model for CPU execution made up of the following steps:
1. Fetch the address of the next instruction from the program counter (PC) and increment or otherwise change the PC
2. Decode the addresses referenced in the instruction and fetch the specified data into registers
3. Execute uses the ALU to perform an operation on the retrieved data
4. Memory reads or writes to a memory location previously fetched
5. Writeback stores the operation results in the register file.

These steps can be executed in [[parallel]], and there are a variety of strategies for dealing with the [[data hazard]] caused by this:
1. Don't handle it and make the compiler insert noops (**pipeline bubbles**) to get around it (**explicit pipeline**)
2. Have the decode stage delay the execution of an instruction if it detects that it is referencing a memory location currently being operated on (the **interlocks** strategy)
3. Use **out-of-order execution** with one of the previous strategies to further enhance [[concurrency]].

[[DSP]]s often include additional specialized stages atop of this.