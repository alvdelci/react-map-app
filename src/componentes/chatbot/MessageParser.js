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

    //Resposta para "dog"
    if (message.includes("show me a dog")) {
      this.actionProvider.handleDog();
    }
  }
}

export default MessageParser;
