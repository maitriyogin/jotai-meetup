import { useEffect, useState } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

const token = "Basic ZW5lcmd5c2VydmljZXM6U3VwZXJEdXBlclNlY3JldFBhc3N3b3Jk";
const client = new W3CWebSocket(
  "wss://electromobility-public-charging.euwest1.development.volvo.care/graphql",
  null,
  null,
  {
    headers: { Authorization: { token } },
  }
);

export const useWebSocket = () => {
  const [messages, setMessage] = useState([]);
  useEffect(() => {
    client.onopen = () => {
      setMessage([...messages, "WebSocket Client Connected"]);
    };
    client.onmessage = (message) => {
      console.log("---- message ", message);
      setMessage([...messages, message]);
    };
  }, [messages]);
  return messages;
};
