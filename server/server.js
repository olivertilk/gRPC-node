/* eslint-disable no-console */
const grpc = require('grpc');

const greets = require('../server/protos/greet_pb');
const service = require('../server/protos/greet_grpc_pb');

// Implement the greet RPC method
function greet(call, callback) {
    // Set up the response object
    const greeting = new greets.GreetingResponse();

    // Set the 'result' field of the response object to say hello
    // Get the first name of the request object from the 'call' variable
    const firstName = call.request.getGreeting().getFirstName();
    const lastName = call.request.getGreeting().getLastName();
    greeting.setResult(`Hello ${firstName} ${lastName}`);

    // The first argument to the callback is for reporting errors
    callback(null, greeting);
}

function main() {
    // Start gRPC server to listen to requests
    const server = new grpc.Server();

    // Specify which API endpoints (RPC method) to create
    server.addService(service.GreetingServiceService, { greet });

    // Don't add http:// in front of localhost as it may cause errors
    server.bind('localhost:50051', grpc.ServerCredentials.createInsecure());
    server.start();

    console.log('Server running on port localhost:50051');
}

main();
