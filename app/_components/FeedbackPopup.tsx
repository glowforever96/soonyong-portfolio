import { useState } from 'react';
import * as styles from './styles/feedback.css';
import Toast from './Toast';
import { useToastStore } from '../store/toast';
import { postFeedback } from '../lib/api/postFeedback';

export default function FeedbackPopup({ onClose }: { onClose: () => void }) {
  const [textValue, setTextValue] = useState('');
  const { showToast } = useToastStore();
  const userId = localStorage.getItem('userId') || '';

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value);
  };

  const sendFeedback = async () => {
    const isSucess = await postFeedback({
      userId,
      text: textValue,
      createdAt: new Date().toLocaleString(),
    });
    if (isSucess) {
      showToast('소중한 의견 감사합니다😝');
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <p className={styles.titleText}>
          부족한 점이나 개선점을 알려주세요😊
          <br />
          소중한 피드백 부탁 드립니다!
        </p>
        <div className={styles.textAreaWrapper}>
          <textarea
            onChange={onChange}
            value={textValue}
            maxLength={150}
            className={styles.feedbackTextarea}
          />
          <span className={styles.lengthSpan}>{textValue.length} / 150</span>
        </div>

        <div className={styles.buttonWrapper}>
          <button className={styles.cancleBtn} onClick={onClose}>
            취소
          </button>
          <button
            onClick={sendFeedback}
            className={styles.confirmBtn}
            disabled={textValue.length < 1}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
