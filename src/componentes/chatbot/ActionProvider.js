class ActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  //Action de mensagem de resposta "hello"
  handleHello() {
    const botMessage = this.createChatbotMessage("Hello, nice to meet you");

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  //Action de mensagem de resposta para "dog"
  handleDog() {
    const botMessage = this.createChatbotMessage(
      "Aqui a imagem de um cachorro!",
      {
        widget: "dogPicture",
      }
    );

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }
}

export default ActionProvider;
