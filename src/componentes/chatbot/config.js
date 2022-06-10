import { createChatBotMessage } from "react-chatbot-kit";
import DogPicture from "./DogPicture";
import { BotAvatar, UserAvatar } from "./avatares/Avatar";

const botName = "Dona Maria";

//Configurações da janela do chatbot
const config = {
  initialMessages: [
    createChatBotMessage(`Hi! I'm ${botName}. Insira "hello" ou "dog"`),
  ],
  botName: botName,
  //Estilzação da Janela de chat
  customStyles: {
    botMessageBox: {
      backgroundColor: "#FF8C00",
    },
    chatButton: {
      backgroundColor: "orange",
    },
  },
  //Configuraçao dos avatares
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
    userAvatar: (props) => <UserAvatar {...props} />,
  },
  //Widgets
  widgets: [
    //DogPicture
    {
      widgetName: "dogPicture",
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ],
};

export default config;
