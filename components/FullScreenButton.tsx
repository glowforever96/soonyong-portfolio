import * as styles from './styles/chat.css';

export default function FullScreenButton({ onClick }: { onClick: () => void }) {
  return (
    <button className={styles.fullScreenBtn} onClick={onClick}>
      더 크게 보기
    </button>
  );
}
