class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  //Tratamento da resposta para "hello"
  parse(message) {
    //Resposta para "hello"
    if (message.includes("hello")) {
      this.actionProvider.handleHello();
    }

    //Resposta para "show me a dog"
    if (message.includes("show me a dog")) {
      this.actionProvider.handleDog();
    }

    //Resposta para "minhas opções"
    if (message.includes("mostre minhas opções")) {
      this.actionProvider.handleGetData();
    }
  }
}

export default MessageParser;
