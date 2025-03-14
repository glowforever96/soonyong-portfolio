'use client';

import { useState } from 'react';
import FeedbackIcon from '../../public/feedback.svg';
import * as styles from '@/styles/header.css';
import FeedbackPopup from '..//ui/FeedbackPopup';
import { useToastStore } from '@/store/toast';
import Toast from '../ui/Toast';
import usePopup from '@/hooks/usePopup';

export default function Header() {
  const { isPopupOpen, openPopup, closePopup } = usePopup();
  const { message, removeToast } = useToastStore();

  return (
    <>
      <header className={styles.header}>
        <button
          title="피드백"
          className={styles.feedbackBtn}
          onClick={openPopup}
        >
          <FeedbackIcon />
        </button>
      </header>
      {isPopupOpen && <FeedbackPopup onClose={closePopup} />}
      {message && <Toast message={message} onClose={removeToast} />}
    </>
  );
}
