import { useEffect, useState } from "react";
import { createClient } from "graphql-ws";

const token = "Basic ZW5lcmd5c2VydmljZXM6U3VwZXJEdXBlclNlY3JldFBhc3N3b3Jk";

const client = createClient({
  url: "wss://electromobility-public-charging.euwest1.development.volvo.care/graphql",
  connectionParams: {
    Authorization: token,
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

    let error = (e) => {
      /* complete the subscription */
      setMessage([e, ...messages]);
    };
    let complete = () => {
      /* complete the subscription */
    };
    unsubscribe = client.subscribe(
      {
        query: "subscription { greetings }",
      },
      {
        next: onNext,
        error: reject,
        complete: resolve,
      }
    );
  }, [messages]);
  return messages;
};
