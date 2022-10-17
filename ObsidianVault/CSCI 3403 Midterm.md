## Flag 1
The “New Hire: Getting Started” page is accessible to anyone connected to the network by navigating to `http://172.16.10.5/guides/newhire/`. The password for the `dev` account is exposed here ``{flag1-internal-use-only}``.

Each user should have their own account with their own password, and automated jobs should be ran without additional permissions, or if necessary, should use a worker account which only has access to the resources needed and is connected to with private environment variables. This environment-variable strategy is regularly employed in CI/CD solutions.

## Flag 2
I ran a port scan on the network and discovered a HTTP server running on `171.16.10.224`. If you navigate to this page from inside the network, you get a camera feed which shows private credentials:
{flag2-L33T}.

This should probably be hidden behind a password or otherwise require authentication.

## Flag 3
A user with access to the `dev` account can sniff `telnet` packets sent to the server and gain higher privileges. Alice logged in with `telnet` with the password `{flag3-Sw0rdf1sh}`.

The solution is to stop using `telnet` as it is very outdated and insecure, and `ssh` is already installed on the server.

## Flag 4
A user with access to the `dev` account can view `~/.ssh/id_rsa` which contains a private SSH key: `{flag4-pr1v4tek3y}`.

This can be solved with the same solution as Flag 1.

## Flag 5
Using previous vulnerabilities (e.g, the `alice` account), you can access the sales database and list the credit card numbers of users:
`{flag5-y1k3s}`.

Avoid storing plaintext passwords in any form, and instead use salted, hashed passwords. They should not be accessible to any developer either.

## Flag 6
The server at `172.16.10.5` has an exposed `/etc/shadow` file which can be ran against a password cracking tool like John the Ripper.

The users should be forced to use stronger passwords, but more importantly the `/etc/shadow` file's permissions should be changed such that regular users cannot access it.

Flag: {flag6-\*hackervoice\*imin}