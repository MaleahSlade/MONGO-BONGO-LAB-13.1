1. Why does IP whitelisting matter in production, and what are the risks of allowing all addresses?

You want to practice IP whitelisting because it only allows approved IP address to connect to a given database. When you allow all addresses to connect, you expose your database to attacks.  

2. What does dotenv do, and what other ways exist to manage environment variables in production?

The dotenv package allows an application to access sensitive information without hard coding the credentials. Environment variables can be managed through hosting platform settings, CI/CD pipelines and dedicated secrets managers. 

3. If the app fails to connect, what debugging steps would you take first?

I would check the terminal error message to get some clues. And then I would work backwards from there to determine where the issue is located. It all depends on the contents of the error message. 