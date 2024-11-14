'use client';

import { useEffect, useState } from 'react';
import ContentsSection from './_components/ContentsSection';
import Header from './_components/Header';
import InputSection from './_components/InputSection';
import * as styles from './styles/home/home.css';

const INIT_CHAT = {
  role: 'server',
  type: 'INIT',
  message: '안녕하세요. 궁금한 점이 있으신가요?',
  createdAt: new Date().toLocaleString(),
};

export default function Home() {
  const [chats, setChats] = useState([INIT_CHAT]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(e.target.value);
  };

  // const handleKeyDownEnter = (e: React.KeyboardEvent) => {
  //   if (e.key === 'Enter' && !e.nativeEvent.isComposing) getAnswer();
  // };

  const getAnswer = (
    e: React.MouseEvent<HTMLButtonElement>,
    message: string,
  ) => {
    const buttonTarget = e.target as HTMLButtonElement;

    setChats((prev) => [
      ...prev,
      {
        role: 'client',
        message,
      },
    ]);
    setIsLoading(true);
    setTimeout(() => {
      setChats((prev) => [
        ...prev,
        {
          role: 'server',
          type: buttonTarget.value,
        },
      ]);
      setIsLoading(false);
    }, 800);
  };

  useEffect(() => {
    console.log(chats);
  }, [chats]);

  return (
    <div className={styles.appWrapper}>
      <Header />
      <ContentsSection
        chats={chats}
        getAnswer={getAnswer}
        isLoading={isLoading}
      />
      <InputSection
        query={query}
        onChange={handleChangeInput}
        getAnswer={getAnswer}
      />
    </div>
  );
}
