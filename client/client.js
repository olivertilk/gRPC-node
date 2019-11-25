const grpc = require('grpc');

const greet = require('../server/protos/greet_pb');
const service = require('../server/protos/greet_grpc_pb');

function main() {
    console.log('Hello from client');
    
    const client = new service.GreetingServiceClient('localhost:50051', grpc.credentials.createInsecure());

    //Set up the RPC request
    let request = new greet.GreetingRequest();

    //The request is sent with a message of type Greeting, so set it up
    let greeting = new greet.Greeting();
    greeting.setFirstName("Jerry");
    greeting.setLastName("Tom");
    request.setGreeting(greeting);

    //Make the API call
    client.greet(request, (error, response) => {
        if(!error) {
            console.log("Greeting response", response.getResult());
        } else {
            console.log("Error", error);
        }
    });
}

main();