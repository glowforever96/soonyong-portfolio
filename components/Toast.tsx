import { useEffect } from 'react';
import * as styles from './styles/feedback.css';
interface ToastProps {
  message: string;
  duration?: number;
  onClose: () => void;
}

export default function Toast({
  message,
  duration = 2500,
  onClose,
}: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={styles.toast}>
      <p>{message}</p>
    </div>
  );
}
