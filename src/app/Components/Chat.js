"use client";
import React, { useState, useEffect } from "react";
import enter from "../Images/enter.png";
import plus from "../Images/plus.png";
import Image from "next/image";
import axios from "axios";

const Chat = ({ setChats, setHasSubmitted, inputText }) => {
  const [message, setMessage] = useState(inputText || "");

  useEffect(() => {
    setMessage(inputText || "");
  }, [inputText]);

  const api = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

  async function generateMessages() {
    console.log("loading...");
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${api}`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: message }] }],
        },
      });

      const answer = response["data"]["candidates"][0]["content"]["parts"][0]["text"];

      setChats((prevChats) => [
        ...prevChats,
        { question: message, answer: answer },
      ]);
      setHasSubmitted(true); 
      setMessage(""); 
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      generateMessages();
    }
  };

  return (
    <div className="chat-section">
      <div className="chat-container">
        <div className="chat-box">
          <span className="add-icon">
            <Image src={plus} height={15} width={15} alt="no" />
          </span>
          <input
            type="text"
            placeholder="Send a message."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={generateMessages}>
            <Image src={enter} height={15} width={15} alt="no" />
          </button>
        </div>
        <p>
          Open source AI chatbot built with <a href="">Next.js</a> and{" "}
          <a href="">Vercel AI SDK</a>.
        </p>
      </div>
    </div>
  );
};

export default Chat;
