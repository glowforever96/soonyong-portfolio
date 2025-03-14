import { SKILL_INFO } from '@/constants';
import ScrollXslider from '../ui/ScrollXslider';
import * as styles from '@/styles/chat.css';
import Image from 'next/image';

export default function SkillBubble() {
  return (
    <div className={styles.commonBubble}>
      <div className={styles.title}>
        <h1 className={styles.h1Title}>Skills</h1>
      </div>
      <ScrollXslider>
        <div className={styles.skillBoxWrapper}>
          {SKILL_INFO.map(({ src, title, desc }) => (
            <div className={styles.skillBox} key={title}>
              <div className={styles.imgContainer}>
                <Image
                  src={src}
                  alt="logo img"
                  className={styles.img}
                  height={200}
                />
              </div>
              <div className={styles.descWrapper}>
                <p className={styles.skillTitle}>{title}</p>
                <span className={styles.descText}>{desc}</span>
              </div>
            </div>
          ))}
        </div>
      </ScrollXslider>
    </div>
  );
}
