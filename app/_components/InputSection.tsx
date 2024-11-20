import * as styles from './styles/inputSection.css';
import SendIcon from '../../public/send.svg';

interface InputSectionProps {
  query: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function InputSection({ query, onChange }: InputSectionProps) {
  return (
    <div className={styles.inputWrapper}>
      <textarea
        className={styles.chatInput}
        value={query}
        onChange={(e) => onChange(e)}
      />
      <button className={styles.sendButton}>
        <SendIcon />
      </button>
    </div>
  );
}
