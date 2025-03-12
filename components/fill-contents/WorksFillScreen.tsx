import * as styles from '@/styles/chat.css';
import WorksContent from '../chat/WorksContent';

export default function WorksFillScreen() {
  return (
    <div>
      <div className={styles.title}>
        <h1 className={styles.h1Title}>Works</h1>
      </div>
      <h3>티맥스에이아이 (2022. 10 ~ 2024. 10)</h3>
      <WorksContent type="FILL" />
    </div>
  );
}
