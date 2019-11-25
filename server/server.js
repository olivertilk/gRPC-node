const grpc = require('grpc');

const greets = require('../server/protos/greet_pb');
const service = require('../server/protos/greet_grpc_pb');

//Implement the greet RPC method
function greet(call, callback) {

    //Set up the response object
    const greeting = new greets.GreetingResponse();

    //Set the 'result' field of the response object to say hello
    //Get the first name of the request object from the 'call' variable
    greeting.setResult("Hello " + call.request.getGreeting().getFirstName());
    console.log("call:", call);
    console.log("call request:", call.request);
    
    //The first argument to the callback is for reporting errors
    callback(null, greeting);
}

function main() {
    //Start gRPC server to listen to requests
    const server = new grpc.Server();

    //Specify which API endpoints (RPC method) from the service to add
    server.addService(service.GreetingServiceService, {greet: greet});

    //Don't add http:// in front of localhost as it may cause errors
    server.bind("localhost:50051", grpc.ServerCredentials.createInsecure());
    server.start();

    console.log("Server running on port localhost:50051");
}

main();