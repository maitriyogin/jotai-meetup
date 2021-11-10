import { SubscriptionClient } from "subscriptions-transport-ws";
import ApolloClient from "apollo-client";

const token = "Basic ZW5lcmd5c2VydmljZXM6U3VwZXJEdXBlclNlY3JldFBhc3N3b3Jk";
const GRAPHQL_ENDPOINT = "ws://localhost:3000/graphql";

const client = new SubscriptionClient(GRAPHQL_ENDPOINT, {
  reconnect: true,
});

const apolloClient = new ApolloClient({
  networkInterface: client,
});
