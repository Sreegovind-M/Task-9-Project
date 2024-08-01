import React from "react";
import "../Styles/Prompts-style.css";

const Prompts = ({ onPromptClick }) => {
  const prompts = [
    [
      {
        topic: "How do you clean",
        para: "natural wood?",
        ques: "How do you clean natural wood?"
      },
    ],
    [
      {
        topic: "How to clean",
        para: "high-gloss and wood surfaces?",
        ques: "How to clean high-gloss and wood surfaces?"
      },
    ],
    [
      {
        topic: "What's best",
        para: "for cleaning computer screens?",
        ques: "What's best for cleaning computer screens?"
      },
    ],
    [
      {
        topic: "How do clean",
        para: "marble countertops?",
        ques: "How do clean marble countertops?"
      },
    ],
    [
      {
        topic: "How to clean",
        para: "keyboards safely?",
        ques: "How to clean keyboards safely?"
      },
    ],
    [
      {
        topic: "What's the best way",
        para: "to clean upholstery?",
        ques: "What's the best way to clean upholstery?"
      },
    ],
  ];

  return (
    <div>
      <div className="prompts-container">
        {prompts.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="box"
                onClick={() => onPromptClick(item.ques)}
              >
                <h4>{item.topic}</h4>
                <p>{item.para}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prompts;
