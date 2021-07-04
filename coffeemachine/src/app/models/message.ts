enum MessageTypes {
  DEFAULT = 'M',
}

type MessageCommand = {
  name: MessageTypes;
  message: string;
};

export { MessageTypes, MessageCommand };
