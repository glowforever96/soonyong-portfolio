import ScrollXslider from './ScrollXslider';
import * as styles from './styles/chat.css';
import { useEffect, useState } from 'react';
import Modal from './Modal';
import WorksFillScreen from './WorksFillScreen';
import WorksContent from './WorksContent';
import FullScreenButton from './FullScreenButton';

export default function WorksBubble() {
  const [showBigView, setShowBigView] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBigView(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={styles.commonBubble}>
        <div className={styles.title}>
          <h1 className={styles.h1Title}>Works</h1>
        </div>
        <h3>티맥스에이아이 (2022. 10 ~ 2024. 10)</h3>
        <ScrollXslider>
          <WorksContent type="BUBBLE" />
        </ScrollXslider>
        <FullScreenButton onClick={() => setShowBigView(true)} />
      </div>
      {showBigView && (
        <Modal onClose={() => setShowBigView(false)} type="GEN">
          <WorksFillScreen />
        </Modal>
      )}
    </>
  );
}
