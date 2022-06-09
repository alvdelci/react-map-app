// in config.js
import { createChatBotMessage } from "react-chatbot-kit";

const botName = "Dona Maria";

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#FF8C00",
    },
    chatButton: {
      backgroundColor: "orange",
    },
  },
};

export default config;
