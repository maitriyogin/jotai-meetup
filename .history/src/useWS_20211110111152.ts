import { useEffect, useState } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket("ws://127.0.0.1:8000");

export const useWS = () => {
  const [messages, setMessage] = useState([]);
  useEffect(() => {
    client.onopen = () => {
      setMessage([...messsages, "WebSocket Client Connected"]);
    };
    client.onmessage = (message) => {
      setMessage(message);
    };
    return () => {
      client.close();
    };
  }, []);
  return message;
};
