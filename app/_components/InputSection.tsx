import * as styles from './styles/inputSection.css';

interface InputSectionProps {
  query: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  getAnswer: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function InputSection({
  query,
  onChange,
  getAnswer,
}: InputSectionProps) {
  return (
    <div className={styles.inputWrapper}>
      <textarea
        className={styles.chatInput}
        value={query}
        onChange={(e) => onChange(e)}
      />
      <button className={styles.sendButton} onClick={(e) => getAnswer(e)}>
        전송
      </button>
    </div>
  );
}
