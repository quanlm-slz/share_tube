import { useEffect, useState } from "react";

const Notification: React.FC = () => {
  const [message, setMessage] = useState();
  const identifier = JSON.stringify({ channel: "NotificationChannel" });

  const socket = new WebSocket("ws://localhost:3000/cable");
  socket.onopen = () => {
    socket.send(
      JSON.stringify({
        command: "subscribe",
        identifier,
      })
    );
  };
  socket.onmessage = (event) => {
    const message = JSON.parse(event.data);
    if (message.identifier == identifier) console.log("hello");
  };

  useEffect(() => {
    return socket.close();
  });
  return (
    <div className="relative h-full my-2">
      <div className="absolute px-4 bg-slate-600 text-white">Noti</div>
      {message && (
        <div className="-top-2 -left-2 absolute bg-red-500 h-4 w-4 rounded-full" />
      )}
    </div>
  );
};

export default Notification;
