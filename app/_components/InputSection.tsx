import * as styles from './styles/inputSection.css';

export default function InputSection() {
  return (
    <div className={styles.inputWrapper}>
      <textarea className={styles.chatInput} />{' '}
      <button className={styles.sendButton}>전송</button>
    </div>
  );
}
