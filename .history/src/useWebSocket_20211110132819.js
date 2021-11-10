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
    (async () => {
      const onNext = (data) => {
        /* handle incoming values */
        setMessage([data, ...messages]);
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
