## Assets
* The grade database
* Resources on the web server's network
* Compute power/storage on the web server

## Threats
* A student or user without administrative permissions could achieve remote code execution by making a reverse shell when their code is executed on the server and…
	* Access unsecured, private resources on the network of the web server or exploit additional vulnerabilities on otherwise inaccessible attack vectors to access them (a threat to **confidentiality**)
		* The severity of this is highly dependent on the importance of the other resources on the network. If it is completely isolated, then this has minimal severity, but could potentially be extremely severe. Because of this, I'll say it has a severity of **5**. I think it has a likelihood of **5**. Therefore, this has a risk of **25**.
	* Run basic commands to shut down the machine, exhaust system resources (e.g, a fork bomb), etc. (a threat to **availability**)
		* With a severity of **6** and a likelihood of **7**, the risk is **42**.
	* Use the server's access to the grade database to change their grade or someone else's grade (a threat to **integrity**)
		* With a severity of **10** and a likelihood of **6**, the risk is **60**.