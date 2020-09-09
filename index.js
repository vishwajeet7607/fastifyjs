// Require the framework and instantiate it
 const fastify = require('fastify')({ logger: true })
  // Declare an API route 

    // Declare an API route - "inventory" 
    fastify.get("/", async (request, reply) => { 
        return{
            hello: "man"
       


        }

    }) 
    
// Require external modules

    // Run the server! 
    fastify.listen(3000, '127.0.0.1')
    .then((address) => console.log(`server listening on ${address}`))
    .catch(err => {
      console.log('Error starting server:', err)
      process.exit(1)
    }) 

    // start()