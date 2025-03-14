import { INTRO_PARAGRAPH } from '@/constants';
import * as styles from '@/styles/chat.css';

export default function IntroduceBubble() {
  return (
    <div className={styles.commonBubble}>
      <div className={styles.title}>
        <h1 className={styles.h1Title}>Introduce</h1>
      </div>
      <div className={styles.infoBox}>
        <p className={styles.introParagraph}>{INTRO_PARAGRAPH}</p>
      </div>
    </div>
  );
}
