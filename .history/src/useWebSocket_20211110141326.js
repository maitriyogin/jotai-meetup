import { useEffect, useState } from "react";
import { createClient } from "graphql-ws";

const token = "Basic ZW5lcmd5c2VydmljZXM6U3VwZXJEdXBlclNlY3JldFBhc3N3b3Jk";
// const token = "ZW5lcmd5c2VydmljZXM6U3VwZXJEdXBlclNlY3JldFBhc3N3b3Jk";
// const token =
// "eyJraWQiOiJuUEpMbkxHTXMxYmlBVjl4Mm5LSVB5YzZlRlV5WFVPcllNeFA0b09SWW13PSIsImFsZyI6IlJTMjU2In0.eyJvcmlnaW5fanRpIjoiYTY4MDJjOGUtYjBkMy00Y2Y5LThkNWUtMTA5NjNiZTQwMTg3Iiwic3ViIjoiODUyMTliZDMtNDJhYi00YWQ2LTk2ZTgtYzMyMTU0ZWJlMmU3IiwiZXZlbnRfaWQiOiJhMzAyMTI3YS01NmUxLTRlMTQtODE4ZS0wNzYyYjQ1YWNlZTkiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjM2NDg2NTM5LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0xLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMV9LQnM4MEhxYWQiLCJleHAiOjE2MzY1NTI1MzgsImlhdCI6MTYzNjU0ODkzOCwianRpIjoiMDNhYjMyNzctNWM3My00ZTZlLWEzNmEtNjRjZDg1NzM5YjM2IiwiY2xpZW50X2lkIjoiNHNlaDJoM2VndmpldWw1aXUwYmxiZ3IyaHIiLCJ1c2VybmFtZSI6Ijg1MjE5YmQzLTQyYWItNGFkNi05NmU4LWMzMjE1NGViZTJlNyJ9.OyzW1t9XuKFAFMtbZejlCywolk-SyrPuNtCBjKE5Su7DAVVuh02sMBKaVEPFcBpoiTExb0bc5p5H4yxV54Q7D18BtlYt7IZdFTQZr8l5GNqd-uSRXCj6uvu_kUiCMsrjZaMguiNKgOUMf6E89ACWfw-guGUyG7EGUkqSTdI4jiOGr7QxFnTWiGCBJ-8Haj7xK0SdIHJJmW_MvPQood717TCX3_t-OQJ-9JXhM-FBtuJE1YS1pIq4_q8OC5gtlG9KL9XlJYLdS0TC0PFbTLyQVJMr_8Cnn72oi6yAHsAI4xvOU23Y6aqgcp_2g388zBHNacXsuW_d7ZVfoW1QcKsuVw";
const client = createClient({
  url: "wss://electromobility-public-charging.euwest1.development.volvo.care/graphql",
  connectionParams: () => {
    return {
      "Sec-WebSocket-Version": 13,
      "Sec-WebSocket-Key": "rpfEb9JR2vqIk7kFzKhw3Q==",
      "Sec-WebSocket-Protocol": "graphql-ws",
    };
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
