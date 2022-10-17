## Instructions

In this lab we will get hands-on experience with a symmetric encryption method: AES. The AES cipher performs a complicated operation which could leave the output sufficiently scrambled. It also uses a long secret: a string of bits, which can be as long as necessary to ensure security.

We recommend doing this lab using a Python3 Jupyter notebook on coding.csel.io. Start by running the command below in a terminal, to install the required libraries.

*\$ pip3 install pycryptodome*

***Note**: These cryptographic operations only work on raw bitstrings, but Python3 strings are encoded differently. For the plaintext, secret, and IV, you should put the letter "b" before the string to indicate that it is a bitstring, e.g. b"example".*

## Part 1. Encryption and Decryption

First, let's come up with a plaintext string which we will encrypt. The variable plaintext below is the text we want to keep secret:

![](https://cdn.mathpix.com/cropped/2022_10_14_7a97a5aee35b1062ab7fg-1.jpg?height=169&width=1595&top_left_y=1624&top_left_x=234)

Create a secret key, and a non-secret IV value. Then, write a Python program which encrypts the above plaintext with AES GCM mode. Finally, decrypt the result using the same secret key and IV.

## Part 2. Decrypting a new message

Here is a encrypted text which we want to decrypt to get the secret info:
```
ciphertext =
(b'\x08>\xe43\x16J\x9bx/a\x18\x0e#\x7f\x1ei\x02h\xad\x8b\xfc\x01
\xef\xf8\xdc\xf8+\xb1\x86zO\xdc\xe2\xcf\xf4\xf6\x1b\xa4C\x91\x1d
\x12\xb7\x94R\xe6"\x1d\xb3Nf\x0e\xd3y\xe2\xaaI\xce\x18n\xb6\xfdp
\xcb\xe0h\x95\x94\xcf\xe8{\xc6\xa5>\xfd\xa8p;\xa1\xe7\x88\xb2M\x
f9>\x82\xa8\[2_Zdfy#/\xcd\xdeel\x83V\xb8\x01
\xe2\xba4\'\x9cw3\x0f4m\xfe\x9e.\xf2`\x9e\xd7db\x17\x0c\xd7\x1fM
\xb04\x16\xc3\xb3\xa5&G\xae\x01\xa2\x0b\xa8\xf1?0\x15\]N\xeb0\x19
\x90!SXp\x0ei#\x89\xd1*\xe2a\x12J\x05F\x0c\x12`5fA"\xac\xb0[\xde
\r\x04-\x1d\xb9\xa4;\\\xda\xe9\x8d\xd8\x98?\xd76\xd2\x9d=\x05jU\
x1f\xc9\xbb.\xfc')
```

Write a Python program to decrypt the above ciphertext with **AES GCM mode** using the secret key **b'sh9EH2HSNsJAspl3'** and the IV **b'rhoap91j'**. Submit the plaintext on Canvas.