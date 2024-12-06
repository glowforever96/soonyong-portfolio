import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import CloseIcon from '../../public/close.svg';

import * as styles from './styles/modal.css';
export default function Modal({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) {
  return createPortal(
    <>
      <div className={styles.worksFillScreenWrapper}>{children}</div>
      <button className={styles.closeBtn} onClick={onClose}>
        <CloseIcon />
      </button>
    </>,
    document.getElementById('modal-root') as HTMLElement,
  );
}
