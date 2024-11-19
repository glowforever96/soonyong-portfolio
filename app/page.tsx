'use client';

import { useState } from 'react';
import ContentsSection from './_components/ContentsSection';
import Header from './_components/Header';
import InputSection from './_components/InputSection';
import * as styles from './styles/home/home.css';
import { extractTime } from './lib/time';
import { ChatType, ServerChatType } from './_types/chat';

const INIT_CHAT: ChatType = {
  role: 'server',
  type: 'INIT',
  message: `안녕하세요😀\n\n어떤 점이 궁금하신가요?\n아래 버튼을 클릭해주세요🤗`,
  timestamp: extractTime(new Date().toLocaleString()),
};

export default function Home() {
  const [chats, setChats] = useState<ChatType[]>([INIT_CHAT]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(e.target.value);
  };

  const getAnswer = (
    e: React.MouseEvent<HTMLButtonElement>,
    message: string,
  ) => {
    const buttonTarget = e.target as HTMLButtonElement;
    const timestamp = extractTime(new Date().toLocaleString());

    setChats((prev) => [
      ...prev,
      {
        role: 'client',
        message,
        timestamp,
      },
    ]);
    setIsLoading(true);
    setTimeout(() => {
      setChats((prev) => [
        ...prev,
        {
          role: 'server',
          type: buttonTarget.value as ServerChatType,
          timestamp: extractTime(new Date().toLocaleString()),
        },
      ]);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className={styles.appWrapper}>
      <Header />
      <ContentsSection
        chats={chats}
        isLoading={isLoading}
        getAnswer={getAnswer}
      />
      <InputSection query={query} onChange={handleChangeInput} />
    </div>
  );
}
