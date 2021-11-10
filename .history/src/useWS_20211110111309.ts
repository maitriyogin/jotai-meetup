import { useEffect, useState } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket(
  "wss://electromobility-public-charging.euwest1.development.volvo.care/graphql"
);
const token = "Basic ZW5lcmd5c2VydmljZXM6U3VwZXJEdXBlclNlY3JldFBhc3N3b3Jk";
export const useWS = () => {
  const [messages, setMessage] = useState([]);
  useEffect(() => {
    client.onopen = () => {
      setMessage([...messages, "WebSocket Client Connected"]);
    };
    client.onmessage = (message) => {
      setMessage([...messages, message]);
    };
    return () => {
      client.close();
    };
  }, []);
  return messages;
};
