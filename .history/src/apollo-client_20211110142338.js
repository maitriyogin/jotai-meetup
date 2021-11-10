import { SubscriptionClient } from "subscriptions-transport-ws";
import ApolloClient from "apollo-client";

const token = "Basic ZW5lcmd5c2VydmljZXM6U3VwZXJEdXBlclNlY3JldFBhc3N3b3Jk";
const GRAPHQL_ENDPOINT =
  "wss://electromobility-public-charging.euwest1.development.volvo.care/graphql";

const client = new SubscriptionClient(GRAPHQL_ENDPOINT, {
  reconnect: true,
  connectionParams: () => ({ Authorization: token }),
});

const apolloClient = new ApolloClient({
  networkInterface: client,
});

export const useAppollo = () => {
  apolloClient
    .subscribe({
      query: gql`
        subscription onNewItem {
          newItemCreated {
            id
          }
        }
      `,
      variables: {},
    })
    .subscribe({
      next(data) {
        // Notify your application with the new arrived data
      },
    });
};
