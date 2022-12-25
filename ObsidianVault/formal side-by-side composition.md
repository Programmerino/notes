![[Pasted image 20221225125050.png]]
Formally, using the [[formal FSM representation]], $C$ from [[side-by-side composition]] is defined as:
* $States_C = States_A \times States_B$
* $Inputs_C = Inputs_A \times Inputs_B$
* $Outputs_C = Outputs_A \times Outputs_B$
* $initialState_C = (initialState_A, initialState_B)$
* $update_C((s_A, s_B), (i_A, i_B)) = ((s'_A,s'_B),(o_A, o_B))$ where $(s'_A, o_A) = update_A(s_A,i_A)$ and $(s'_B,o_B) = update_B(s_B, i_B)$.