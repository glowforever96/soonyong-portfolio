import { useState } from 'react';
import FeedbackIcon from '../../public/feedback.svg';
import * as styles from './styles/header.css';
import FeedbackPopup from './FeedbackPopup';
import { useToastStore } from '../store/toast';
import Toast from './Toast';

export default function Header() {
  const [openFeedback, setOpenFeedback] = useState(false);
  const { message, removeToast } = useToastStore();
  const closePopup = () => setOpenFeedback(false);

  return (
    <>
      <div className={styles.header}>
        <button
          className={styles.feedbackBtn}
          onClick={() => setOpenFeedback(true)}
        >
          <FeedbackIcon />
        </button>
      </div>
      {openFeedback && <FeedbackPopup onClose={closePopup} />}
      {message && <Toast message={message} onClose={removeToast} />}
    </>
  );
}
