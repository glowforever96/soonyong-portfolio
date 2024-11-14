import { useEffect, useLayoutEffect, useRef } from 'react';
import ClientChat from './ClientChat';
import ServerChat from './ServerChat';
import * as styles from './styles/contentsSection.css';
import Loading from './Loading';

export default function ContentsSection({ chats, getAnswer, isLoading }) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (bottomRef.current)
      bottomRef.current.scrollIntoView({
        behavior: 'smooth',
      });
  }, [chats.length]);

  return (
    <div className={styles.wrapper}>
      {chats.map(({ role, type, message }) =>
        role === 'server' ? (
          <ServerChat
            key={`${role}${type}`}
            type={type}
            message={message}
            getAnswer={getAnswer}
          />
        ) : (
          <ClientChat key={`${role}${type}`} message={message} />
        ),
      )}
      {isLoading && <Loading />}
      <div ref={bottomRef} />
    </div>
  );
}
