import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import CloseIcon from '../../public/close.svg';

import * as styles from '@/styles/modal.css';

export default function Modal({
  children,
  onClose,
  type,
}: {
  children: ReactNode;
  onClose?: () => void;
  type: 'GEN' | 'IMG';
}) {
  return createPortal(
    <>
      <div
        className={type === 'GEN' ? styles.worksFillScreenWrapper : undefined}
      >
        {children}
      </div>
      {type === 'GEN' && (
        <button className={styles.closeBtn} onClick={onClose}>
          <CloseIcon />
        </button>
      )}
    </>,
    document.getElementById('modal-root') as HTMLElement,
  );
}
