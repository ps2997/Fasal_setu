import React from 'react'
import "../styles/pages/ExpertAdvice.css"
import { motion } from "framer-motion"

const ExpertAdvice = () => {

  window.watsonAssistantChatOptions = {
    integrationID: "87dd641e-ea8f-47ac-a4c4-3034293e0ef1", // The ID of this integration.
    region: "au-syd", // The region your integration is hosted in.
    serviceInstanceID: "a6babaa0-ec30-46f2-a568-03e56919854b", // The ID of your service instance.
    onLoad: function (instance) {
      instance.render();
    },
  };
  setTimeout(function () {
    const t = document.createElement("script");
    t.src =
      "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
      (window.watsonAssistantChatOptions.clientVersion || "latest") +
      "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });

  return (
    <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay: 0.5, duration: 0.25}}
    className='expertBody'>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 1, duration: 0.5}}
      >
        <h1>Expert's Advice</h1>
        <p>Click on the message icon to interact with the chatbot.</p>
      </motion.div>
    </motion.div>
  )
}

export default ExpertAdvice