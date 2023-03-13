Span is a metric of [[complexity]] similar to [[work]], but instead refers to the longest chain of sequential dependencies necessary to undertake the operation.

For example, [[fold]] has a span of $O(n)$ since it is implemented without any [[parallelism]], but [[reduce]] has a span of $O(log(n))$.