// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var protos_greet_pb = require('../protos/greet_pb.js');

function serialize_greet_GreetingRequest(arg) {
  if (!(arg instanceof protos_greet_pb.GreetingRequest)) {
    throw new Error('Expected argument of type greet.GreetingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_GreetingRequest(buffer_arg) {
  return protos_greet_pb.GreetingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greet_GreetingResponse(arg) {
  if (!(arg instanceof protos_greet_pb.GreetingResponse)) {
    throw new Error('Expected argument of type greet.GreetingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_GreetingResponse(buffer_arg) {
  return protos_greet_pb.GreetingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var GreetingServiceService = exports.GreetingServiceService = {
  // unary API
  greet: {
    path: '/greet.GreetingService/Greet',
    requestStream: false,
    responseStream: false,
    requestType: protos_greet_pb.GreetingRequest,
    responseType: protos_greet_pb.GreetingResponse,
    requestSerialize: serialize_greet_GreetingRequest,
    requestDeserialize: deserialize_greet_GreetingRequest,
    responseSerialize: serialize_greet_GreetingResponse,
    responseDeserialize: deserialize_greet_GreetingResponse,
  },
};

exports.GreetingServiceClient = grpc.makeGenericClientConstructor(GreetingServiceService);
