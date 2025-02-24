import * as styles from './styles/chat.css';

export default function FullScreenButton({ onClick }: { onClick: () => void }) {
  return (
    <button className={styles.fullScreenBtn} onClick={onClick}>
      전체화면으로 보기
    </button>
  );
}
