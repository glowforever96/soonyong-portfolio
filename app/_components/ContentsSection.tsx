import { useEffect, useLayoutEffect, useRef } from 'react';
import ClientChat from './ClientChat';
import ServerChat from './ServerChat';
import * as styles from './styles/contentsSection.css';
import Loading from './Loading';
import SelectChips from './SelectChips';

export default function ContentsSection({ chats, getAnswer, isLoading }) {
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
      {chats.map(({ role, type, message }) =>
        role === 'server' ? (
          <ServerChat key={`${role}${type}`} type={type} message={message} />
        ) : (
          <ClientChat key={`${role}${type}`} message={message} />
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
