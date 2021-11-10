import { SubscriptionClient } from "subscriptions-transport-ws";
import { useEffect, useState } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
const token = "Basic ZW5lcmd5c2VydmljZXM6U3VwZXJEdXBlclNlY3JldFBhc3N3b3Jk";
const GRAPHQL_ENDPOINT =
  "wss://electromobility-public-charging.euwest1.development.volvo.care/graphql";

const client = new SubscriptionClient(GRAPHQL_ENDPOINT, {
  reconnect: true,
  connectionParams: () => {
    console.log("------ connections");
    return { Authorization: token };
  },
});

const apolloClient = new ApolloClient({
  networkInterface: client,
  cache: new InMemoryCache(),
});

export const useApollo = () => {
  const [messages, setMessage] = useState([]);
  useEffect(() => {
    apolloClient
      .subscribe({
        query: gql`
          subscription OnChargingStationChanged {
            chargingStationChanged(
              chargingStations: ["C0484EF7-08BE-4C9B-9914-24D7371B8123"]
            ) {
              id
              chargingPoints {
                id
                status
              }
            }
          }
        `,
        variables: {},
        next(data) {
          // Notify your application with the new arrived data
          setMessage([data, ...messages]);
        },
      })
      .subscribe({
        next(data) {
          // Notify your application with the new arrived data
          setMessage([data, ...messages]);
        },
      });
  }, []);
  return messages;
};
