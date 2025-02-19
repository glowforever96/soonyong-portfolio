import * as styles from './styles/contentsSection.css';

interface ClientChatProps {
  message: string;
  timestamp: string;
}

export default function ClientChat({ message, timestamp }: ClientChatProps) {
  return (
    <div className={styles.clientChatParent}>
      <span className={styles.timestamp}>{timestamp}</span>
      <div className={styles.clientChatWrapper}>{message}</div>
    </div>
  );
}
