
const server = Bun.serve({
    port : 3000,
    fetch(request, server) {
        const url = new URL(request.url);
        if (url.pathname === '/about') {
           return new Response("About Us"); 
        }
        if (url.pathname === '/') {
           return new Response("Landing Page"); 
        }
        if (url.pathname === '/err'){
            throw new Error("This Path is not yet Implemented");
        }
        else{
            return new Response("404! Not Found",{status : 404});
        }
    },
    error(error) {
        return new Response(`<pre> ${error} \n ${error.stack} </pre>`,
            {
                headers : {
                    "Content-Type" : "text/html",
                },
                status : 500,
            }
        ) 
    },
})

console.log(`Listenning on port http://localhost:${server.port}`)