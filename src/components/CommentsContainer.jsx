import React, { useState } from "react";
import { commentsData } from "../utils/constants";
import { FaUserTie } from "react-icons/fa";

const CommentItem = ({ comment }) => {
  const { name, text, replies } = comment;
  const [reply, setReply] = useState(false);
  return (
    <div className="my-2 border-b border-neutral-200 pb-1">
      {/* main comment */}
      <div>
        <div className="flex items-center gap-2 ">
          <FaUserTie />
          {name}
        </div>
        <p className="pl-2">{text}</p>
      </div>

      {/* going 4 da reply button  */}
      {replies.length > 0 &&
        (
          <button
            onClick={() => setReply(!reply)}
            className="text-blue-500  rounded px-2 text-sm cursor-pointer"
          >
            reply {replies.length}
          </button>
        )}

      {/* here come the replyy */}
      {reply && replies.length > 0 && (
        <div className="ml-6 pl-6 border-l border-gray-300">
          {replies.map((reply, index) => (
            <CommentItem key={index} comment={reply} />
          ))}
        </div>
      )}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className=" w-full h-full">
      <p className="font-bold">Comments</p>
      {commentsData.map((c, i) => (
        <div key={i}>
          <CommentItem comment={c} />  
        </div>
        // main producer component
      ))}
    </div>
  );
};

export default CommentsContainer;
