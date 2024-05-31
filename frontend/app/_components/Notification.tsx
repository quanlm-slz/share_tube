import { useEffect, useState } from "react";

const Notification: React.FC = () => {
  const [message, setMessage] = useState<string>();
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
    if (message.identifier == identifier) {
      const type = message.message?.type;
      if (type === "new notification") {
        const username = message.message?.username;
        setMessage(`A new shares has been created by ${username}.`);
      }
    }
  };

  useEffect(() => {
    return socket.close();
  });
  return (
    <div className="relative h-full my-2">
      <div className="absolute px-4 bg-slate-600 text-white h-8">Noti</div>
      {message && (
        <>
          <div className="-top-2 -right-2 relative bg-red-500 h-4 w-4 rounded-full" />
          <div className="-bottom-4 -left-2 relative border border-slate-500 h-auto w-40 bg-white">
            {message}
          </div>
        </>
      )}
    </div>
  );
};

export default Notification;
