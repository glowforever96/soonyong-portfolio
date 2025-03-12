'use client';

import { useState } from 'react';
import FeedbackIcon from '../../public/feedback.svg';
import * as styles from '@/styles/header.css';
import FeedbackPopup from '..//ui/FeedbackPopup';
import { useToastStore } from '@/store/toast';
import Toast from '../ui/Toast';

export default function Header() {
  const [openFeedback, setOpenFeedback] = useState(false);
  const { message, removeToast } = useToastStore();
  const closePopup = () => setOpenFeedback(false);

  return (
    <>
      <header className={styles.header}>
        <button
          title="피드백"
          className={styles.feedbackBtn}
          onClick={() => setOpenFeedback(true)}
        >
          <FeedbackIcon />
        </button>
      </header>
      {openFeedback && <FeedbackPopup onClose={closePopup} />}
      {message && <Toast message={message} onClose={removeToast} />}
    </>
  );
}
