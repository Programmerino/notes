$$
\begin{aligned}
\text{ilog10}(x) &= \lfloor\log_{10}x\rfloor\\
\text{numLength}(x) &= \text{ilog10}(x) + 1 & & \text{Yields the number of digits}\\
\text{firstDigit}(x)&=\lfloor x/10^{\text{ilog10}(x)}\rfloor & & \text{Yields the leftmost digit}\\
\text{concatNums}(a, b) &= a\cdot10^{\lceil \log_{10}(b+1)\rceil} + b & & \text{Returns a number composed of the digits of a followed by the digits of b}\\
\text{leftRemove}(a,b) &= a\mod 10^{\text{numLength(a) - b}} & & \text{Removes n digits from the left} \\
\text{charCode}(x) &= \text{The ASCII code of x (a character)} \\
\text{genSegment}(x)&=\text{concatNums}(\text{numLength}(\text{charCode}(x)), \text{charCode}(x)) & & \text{Yields a number preceded by the number of digits in the number}\\
\text{popSegment}(x)&=\text{leftRemove}(x, \text{firstDigit}(x)+1) & & \text{Removes a segment created by genSegment from the beginning of a number}\\
\text{build}(\text{prev}, t)&=\text{salt} + \text{concatNums}(\text{prev - salt}, \text{genSegment(t)})\\\\
\text{h}(c_1c_2) &= \text{build}(\text{genSegment}(c_1), \text{genSegment}(c_2))\\
\text{h}(c_ic_{i+1}\dots c_n) &= \text{build}
(\text{genSegment}(c_i), \text{h}(c_{i+1}c_{i+2}\dots c_n))\\
\text{h}(t)&=\text{salt} + \text{concatNums}(\text{popSegment(prev - salt)}, \text{genSegment(t)})\\
\end{aligned}
$$