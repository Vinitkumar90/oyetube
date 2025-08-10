import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomMessage } from "../utils/helper";
import ChatMessage from "./ChatMessage";

const Livechat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((store) => store.chat.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    const time = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(25),
        })
      );
    }, 2000);

    return () => {
      clearInterval(time);
    };
  }, []);

  return (
    <div className="flex flex-col h-[500px] border border-black rounded-lg bg-green-500">

        {/* chat section */}
      <div className="flex-1 overflow-y-scroll p-2 bg-green-200 flex flex-col-reverse">
        <div>
          {chatMessages.map((chat, i) => (
            <ChatMessage key={i} name={chat.name} message={chat.message} />
          ))}
        </div>
      </div>
          
        {/* chat involve */}
      <div className="border-t border-black p-2 flex">
        <input
          type="text"
          className="flex-1 px-3 border border-black rounded"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button
          className="px-4 bg-green-100 rounded"
          onClick={() => {
            dispatch(addMessage({ name: "babaBLACK", message: liveMessage }));
            setLiveMessage("");
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Livechat;
