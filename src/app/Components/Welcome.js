import React from "react";
import "../Styles/Welcome-style.css";

const Welcome = () => {
  return (
    <div className="container">
      <div className="welcome-body">
        <div className="welcome-head">
          <h4>Welcome to Home Cleaning AI Chatbot!</h4>
        </div>
        <div className="welcome-word">
          <p>
            This is an open source AI chatbot app template built with{" "}
            <a href="">Next.js</a> , the <a href="">Vercel AI SDK</a> , and{" "}
            <a href="">Vercel KV</a> .
          </p>
          <p>
            It uses <a href="">React Server Components</a> to combine text with
            generative UI as output of the LLM. The UI state is synced through
            the SDK so the model is aware of your interactions as they happen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
