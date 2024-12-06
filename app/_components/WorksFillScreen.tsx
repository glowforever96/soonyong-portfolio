import * as modalStyles from './styles/modal.css';
import * as styles from './styles/chat.css';
import CloseIcon from '../../public/close.svg';
import WorksContent from './WorksContent';

export default function WorksFillScreen({ onClose }: { onClose: () => void }) {
  return (
    <div>
      <button onClick={onClose} className={modalStyles.closeBtn}>
        <CloseIcon />
      </button>
      <div className={styles.title}>
        <h1 className={styles.h1Title}>Works</h1>
      </div>
      <h3>티맥스에이아이 (2022. 10 ~ 2024. 10)</h3>
      <WorksContent type="FILL" />
    </div>
  );
}
