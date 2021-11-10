import { useEffect, useState } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

const token = "Basic ZW5lcmd5c2VydmljZXM6U3VwZXJEdXBlclNlY3JldFBhc3N3b3Jk";
const client = new W3CWebSocket(
  "wss://electromobility-public-charging.euwest1.development.volvo.care/graphql",
  "graphql-ws",
  "https://electromobility-public-charging.euwest1.development.volvo.care",
  {
    headers: { Authorization: token },
  }
);

import { createClient } from "graphql-ws";

const client = createClient({
  url: "wss://electromobility-public-charging.euwest1.development.volvo.care/graphql",
  connectionParams: {
    Authorization: token,
  },
});
export const useWebSocket = () => {
  const [messages, setMessage] = useState([]);
  useEffect(() => {
    (async () => {
      const onNext = () => {
        /* handle incoming values */
      };

      let unsubscribe = () => {
        /* complete the subscription */
      };

      await new Promise((resolve, reject) => {
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
      });

      expect(onNext).toBeCalledTimes(5); // we say "Hi" in 5 languages
    })();
  }, [messages]);
  return messages;
};
