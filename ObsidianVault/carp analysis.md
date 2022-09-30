# Carp
## Goals
* Automatic memory management
* Inferred static types
* FBIP
* Explicit performant penalties
* C integration
* No while/for-loops
## Automatic memory management
Linear type system where functions creating values own those values and give up ownership when passing them elsewhere. To “borrow” a value, explicit syntax is used with references. Custom destructors are made by implementing "delete" by explicitly linking delete with the destructor with special syntax