import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import * as styles from './styles/modal.css';

export default function Modal({ children }: { children: ReactNode }) {
  return createPortal(
    <div className={styles.worksFillScreenWrapper}>{children}</div>,
    document.getElementById('modal-root') as HTMLElement,
  );
}
