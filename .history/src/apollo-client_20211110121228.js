import {
	ApolloLink,
	Operation,
	FetchResult,
	Observable,
      } from '@apollo/client/core';
      import { print, GraphQLError } from 'graphql';
      import { createClient, ClientOptions, Client } from 'graphql-ws';
      
      class WebSocketLink extends ApolloLink {
	client;
      
	constructor(options) {
	  super();
	  this.client = createClient(options);
	}
      
	request(operation) {
	  return new Observable((sink) => {
	    return this.client.subscribe<FetchResult>(
	      { ...operation, query: print(operation.query) },
	      {
		next: sink.next.bind(sink),
		complete: sink.complete.bind(sink),
		error: (err) => {
		  if (Array.isArray(err))
		    // GraphQLError[]
		    return sink.error(
		      new Error(err.map(({ message }) => message).join(', ')),
		    );
      
		  if (err instanceof CloseEvent)
		    return sink.error(
		      new Error(
			`Socket closed with event ${err.code} ${err.reason || ''}`, // reason will be available on clean closes only
		      ),
		    );
      
		  return sink.error(err);
		},
	      },
	    );
	  });
	}
      }
const token = "Basic ZW5lcmd5c2VydmljZXM6U3VwZXJEdXBlclNlY3JldFBhc3N3b3Jk";
      const link = new WebSocketLink({
	url: 'wss://electromobility-public-charging.euwest1.development.volvo.care/graphql',
	connectionParams: () => {
	  const session = getSession();
	  if (!session) {
	    return {};
	  }
	  return {
	    Authorization: `Bearer ${session.token}`,
	  };
	},
      });