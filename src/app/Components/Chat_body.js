"use client";
import React, { useState } from "react";
import "../Styles/Chat_body-style.css";
import Welcome from "./Welcome";
import Prompts from "./Prompts";
import Chat from "./Chat";
import prof from "../Images/profile.png";
import gemini from "../Images/gemini.png";
import Image from "next/image";

const Chat_body = () => {
  const [chats, setChats] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [inputText, setInputText] = useState("");

  const handlePromptClick = (question) => {
    setInputText(question);
    setHasSubmitted(true);
  };

  return (
    <div>
      <div
        className={`chat-body ${chats.length > 0 ? "chat-body-visible" : ""}`}
      >
        {!hasSubmitted && <Welcome />}
        <div className="chat-bottom">
          {!hasSubmitted && <Prompts onPromptClick={handlePromptClick} />}
          <Chat
            setChats={setChats}
            setHasSubmitted={setHasSubmitted}
            inputText={inputText}
          />
          
        </div>
        <div
          className={`replies-container ${chats.length > 0 ? "visible" : ""}`}
        >
          {chats.map((chat, index) => (
            <div key={index} className="chat-answer">
              <div className="question-box">
                <Image
                  src={prof}
                  height={25}
                  width={25}
                  alt="profile"
                  className="chat-logo"
                />
                <p>{chat.question}</p>
              </div>
              <div className="answer-box">
                <Image
                  src={gemini}
                  height={25}
                  width={25}
                  alt="profile"
                  className="chat-logo"
                />
                <pre>{chat.answer}</pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chat_body;
