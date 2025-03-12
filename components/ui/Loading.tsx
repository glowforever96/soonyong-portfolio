import * as styles from '@/styles/contentsSection.css';

export default function Loading() {
  return (
    <div className={styles.loadingBubble}>
      <div className={`${styles.bubble}`} />
      <div className={`${styles.bubble} ${styles.bubble2}`} />
      <div className={`${styles.bubble} ${styles.bubble3}`} />
    </div>
  );
}
