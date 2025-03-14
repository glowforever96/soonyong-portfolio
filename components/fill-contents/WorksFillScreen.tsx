import * as styles from '@/styles/chat.css';
import WorksContent from '../chat/WorksContent';
import Logo from '../../public/images/tlogo.png';
import Image from 'next/image';

export default function WorksFillScreen() {
  return (
    <div>
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
      <WorksContent type="FILL" />
    </div>
  );
}
