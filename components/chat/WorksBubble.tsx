import ScrollXslider from '../ui/ScrollXslider';
import * as styles from '@/styles/chat.css';
import { useEffect } from 'react';
import Modal from '../ui/Modal';
import WorksFillScreen from '../fill-contents/WorksFillScreen';
import WorksContent from './WorksContent';
import FullScreenButton from '../ui/FullScreenButton';
import usePopup from '@/hooks/usePopup';
import Image from 'next/image';
import Logo from '../../public/images/tlogo.png';

export default function WorksBubble() {
  const { isPopupOpen, openPopup, closePopup } = usePopup();

  useEffect(() => {
    const timer = setTimeout(() => {
      openPopup();
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={styles.commonBubble}>
        <div className={styles.title}>
          <h1 className={styles.h1Title}>Works</h1>
        </div>
        <h3
          style={{
            display: 'flex',
            gap: 6,
            alignItems: 'center',
            marginBottom: 12,
            fontSize: '1.625rem',
            paddingBottom: 12,
          }}
        >
          <Image src={Logo} alt="logo" width={25} height={25} priority />
          티맥스에이아이 (2022. 10 ~ 2024. 10)
        </h3>
        <ScrollXslider>
          <WorksContent type="BUBBLE" />
        </ScrollXslider>
        <FullScreenButton onClick={openPopup} />
      </div>
      {isPopupOpen && (
        <Modal onClose={closePopup} type="GEN">
          <WorksFillScreen />
        </Modal>
      )}
    </>
  );
}
