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

// import ws from 'ws'; yarn add ws@7
// const WebSocketServer = ws.Server;
import { useServer } from "graphql-ws/lib/use/ws";
import { schema } from "./my-graphql-schema";

const wsServer = new WebSocketServer({
  port: 4000,
  path: "/graphql",
});

useServer(
  {
    schema,
    onConnect: (ctx) => {
      console.log("Connect", ctx);
    },
    onSubscribe: (ctx, msg) => {
      console.log("Subscribe", { ctx, msg });
    },
    onNext: (ctx, msg, args, result) => {
      console.debug("Next", { ctx, msg, args, result });
    },
    onError: (ctx, msg, errors) => {
      console.error("Error", { ctx, msg, errors });
    },
    onComplete: (ctx, msg) => {
      console.log("Complete", { ctx, msg });
    },
  },
  wsServer
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
