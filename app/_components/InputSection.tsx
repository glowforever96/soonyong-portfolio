import * as styles from './styles/inputSection.css';

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
        disabled
      />
      <button disabled className={styles.sendButton}>
        전송
      </button>
    </div>
  );
}
