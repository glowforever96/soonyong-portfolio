export type ChatRole = 'server' | 'client';
export type ServerChatType =
  | 'INIT'
  | 'EDU_AND_CAREER'
  | 'INTRODUCE'
  | 'SKILLS'
  | 'CONTACT'
  | 'WORKS'
  | 'PROJECTS';

export interface ChatType {
  role: ChatRole;
  type?: ServerChatType;
  message?: string;
  timestamp: string;
}
