'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import ClientChat from './ClientChat';
import ServerChat from './ServerChat';
import * as styles from './styles/contentsSection.css';
import Loading from './Loading';
import SelectChips from './SelectChips';
import { ChatType, ServerChatType } from '../types/chat';
import { extractTime } from '../lib/time';
import { registerUser } from '../lib/api/registerUser';

const INIT_CHAT: ChatType = {
  role: 'server',
  type: 'INIT',
  message: `안녕하세요😀\n\n어떤 점이 궁금하신가요?\n아래 버튼을 클릭해주세요🤗`,
  timestamp: extractTime(new Date().toLocaleString()),
};

export default function ContentsSection() {
  const [chats, setChats] = useState<ChatType[]>([INIT_CHAT]);
  const [isLoading, setIsLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const isShowSelectChips = chats[chats.length - 1].role === 'server';

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

  useLayoutEffect(() => {
    if (bottomRef.current)
      bottomRef.current.scrollIntoView({
        behavior: 'smooth',
      });
  }, [chats.length]);

  const registerUserNeeded = async () => {
    const userId = localStorage.getItem('userId');

    if (!userId) {
      const { userId } = await registerUser();
      localStorage.setItem('userId', userId);
    }
  };

  useEffect(() => {
    registerUserNeeded();
  }, []);

  return (
    <section className={styles.wrapper}>
      {chats.map(({ role, type, message, timestamp }, idx) =>
        role === 'server' ? (
          <ServerChat
            key={`${role}${type}${idx}`}
            type={type as ServerChatType}
            message={message}
            timestamp={timestamp}
          />
        ) : (
          <ClientChat
            key={`${role}${idx}`}
            message={message!}
            timestamp={timestamp}
          />
        ),
      )}
      {isLoading && <Loading />}
      {isShowSelectChips && (
        <SelectChips getAnswer={getAnswer} isInit={chats.length === 1} />
      )}
      <div ref={bottomRef} />
    </section>
  );
}
