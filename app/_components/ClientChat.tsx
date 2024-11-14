import * as styles from './styles/contentsSection.css';

export default function ClientChat({ message }) {
  return <div className={styles.clientChatWrapper}>{message}</div>;
}
