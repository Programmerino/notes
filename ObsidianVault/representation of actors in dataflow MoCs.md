#saved

For [[model]]s using [[dataflow MoC]], [[determinate actor]]s can be described as functions mapping [[input]] sequences to [[output]] sequences.

When the function maps the *entire* [[input]] function, it is an **actor function**. When it maps a finite portion, it is a [[firing function]]. If there are preconditions on the length of the incoming sequence, that [[firing function]] has a [[firing rule]].

Interestingly, having multiple [[firing function]] with [[firing rules]] is quite similar to a [[state machine]] where the [[firing function]] defines the current [[state]] and the firing rule is akin to a [[guard]].