import { useState } from 'react';
import * as styles from './styles/feedback.css';
import { useToastStore } from '../store/toast';
import { postFeedback } from '../lib/api/postFeedback';
import { ClipLoader } from 'react-spinners';

export default function FeedbackPopup({ onClose }: { onClose: () => void }) {
  const [textValue, setTextValue] = useState('');
  const { showToast } = useToastStore();
  const userId = localStorage.getItem('userId') || '';
  const [isLoading, setIsLoading] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value);
  };

  const sendFeedback = async () => {
    setIsLoading(true);
    const isSucess = await postFeedback({
      userId,
      text: textValue,
      createdAt: new Date().toLocaleString(),
    });
    if (!isSucess) {
      setIsLoading(false);
      showToast('서버에 문제가 발생했어요😓');
      onClose();
      return;
    }
    setIsLoading(false);
    showToast('소중한 의견 감사합니다😝');
    onClose();
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
            disabled={textValue.length < 1 || isLoading}
          >
            {isLoading ? (
              <ClipLoader
                size={25}
                color="#4285F4"
                aria-label="loading spinner"
              />
            ) : (
              '확인'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
