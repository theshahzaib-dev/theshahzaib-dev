export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt: Date;
}

export interface Message {
  id: string;
  role: "assistant" | "user";
  content: string;
  createdAt: Date;
}

interface AIContextType {
  open: boolean;
  setOpen: (value: boolean) => void;

  started: boolean;
  setStarted: React.Dispatch<React.SetStateAction<boolean>>;

  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}