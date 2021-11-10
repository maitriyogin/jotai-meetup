import { useEffect, useState } from "react";
import { createClient } from "graphql-ws";

const token = "Basic ZW5lcmd5c2VydmljZXM6U3VwZXJEdXBlclNlY3JldFBhc3N3b3Jk";

const client = createClient({
  url: "wss://electromobility-public-charging.euwest1.development.volvo.care/graphql",
  connectionParams: () => {
    return { token };
  },
});
export const useWebSocket = () => {
  const [messages, setMessage] = useState([]);
  useEffect(() => {
    const onNext = (data) => {
      /* handle incoming values */
      setMessage([data, ...messages]);
    };

    let unsubscribe = () => {
      /* complete the subscription */
    };

    let onError = (e) => {
      /* complete the subscription */
      setMessage([e, ...messages]);
    };
    let onComplete = () => {
      /* complete the subscription */
    };
    unsubscribe = client.subscribe(
      {
        query:
          'subscription OnChargingStationChanged { chargingStationChanged(chargingStations: ["C0484EF7-08BE-4C9B-9914-24D7371B8123"]) { id chargingPoints { id status } }}',
      },
      {
        next: onNext,
        error: onError,
        complete: onComplete,
      }
    );
  }, [messages]);
  return messages;
};
