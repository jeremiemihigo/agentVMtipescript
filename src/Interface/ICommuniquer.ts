export interface IFileName {
  originalname: string;
  mimetype: string;
  filename: string;
}

export interface ICommuniquer {
  object: string;
  filename: IFileName[];
  createdBy: string;
  content?: string;
  idMail: string;
  createdAt: Date;
  _id: string;
}
type MessageConcer = {
  content: string;
  sender: string;
};
type agent = {
  nom: string;
  codeAgent: string;
};
export interface IMessageContent {
  message_concerne: MessageConcer[];
  agent_admin: agent[];
  agent_terrain: agent[];
  content: string;
  filename: IFileName[];
  codeAgent: string;
  fonction: string;
  createdAt: Date;
}
