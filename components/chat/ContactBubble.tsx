import Link from 'next/link';
import * as styles from '@/styles/chat.css';
import GitLogo from '../../public/github.svg';
import Velog from '../../public/images/velog.png';
import Image from 'next/image';

export default function ContactBubble() {
  return (
    <div className={styles.commonBubble}>
      <div className={styles.title}>
        <h1 className={styles.h1Title}>Contact</h1>
      </div>
      <div className={styles.infoBox}>
        <Image
          src={'/images/me.webp'}
          alt="logo"
          width={200}
          height={200}
          style={{ borderRadius: '50%', marginBottom: 8 }}
          priority
        />
        <div>
          <p className={styles.contactParagraph}>
            Email:{' '}
            <a href="mailto:tnsdyd10@naver.com" className={styles.aTag}>
              tnsdyd10@naver.com
            </a>
          </p>
        </div>
        <div>
          <h3>Channels</h3>
          <p className={styles.contactParagraph}>
            <Link
              href="https://github.com/glowforever96"
              className={styles.aTag}
              target="_blank"
            >
              <GitLogo />
              Github
            </Link>
          </p>
          <p className={styles.contactParagraph}>
            <Link
              href="https://velog.io/@boyfromthewell/posts"
              className={styles.aTag}
              target="_blank"
            >
              <Image src={Velog} width={20} height={20} alt="logo" />
              Blog
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
