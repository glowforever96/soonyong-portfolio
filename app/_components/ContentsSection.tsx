import { useEffect, useLayoutEffect, useRef } from 'react';
import ClientChat from './ClientChat';
import ServerChat from './ServerChat';
import * as styles from './styles/contentsSection.css';
import Loading from './Loading';
import SelectChips from './SelectChips';
import { ChatType, ServerChatType } from '../_types/chat';

interface ContentsSectionProps {
  chats: ChatType[];
  isLoading: boolean;
  getAnswer: (e: React.MouseEvent<HTMLButtonElement>, message: string) => void;
}

export default function ContentsSection({
  chats,
  getAnswer,
  isLoading,
}: ContentsSectionProps) {
  const bottomRef = useRef<HTMLDivElement>(null);
  const isShowSelectChips = chats[chats.length - 1].role === 'server';

  useLayoutEffect(() => {
    if (bottomRef.current)
      bottomRef.current.scrollIntoView({
        behavior: 'smooth',
      });
  }, [chats.length]);

  return (
    <div className={styles.wrapper}>
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
    </div>
  );
}
