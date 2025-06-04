import Link from 'next/link';
import * as styles from '@/styles/chat.css';
import { WORK_DATA } from '@/constants';
import ScrollXslider from '../ui/ScrollXslider';
import Image, { StaticImageData } from 'next/image';
import usePopup from '@/hooks/usePopup';
import { useState } from 'react';
import Modal from '../ui/Modal';
import ImgFullScreen from '../fill-contents/ImgFullScreen';

export default function WorksContent({ type }: { type: 'BUBBLE' | 'FILL' }) {
  const { isPopupOpen, openPopup, closePopup } = usePopup();
  const [imgSrc, setImgSrc] = useState<StaticImageData>();

  return (
    <>
      <div className={styles.workBoxWrapper[type]}>
        {WORK_DATA.map(
          ({ title, subTitle, link, date, tasks, skillsets, img }) => (
            <div className={styles.worksBox} key={title}>
              <div className={styles.workTitleBox}>
                <p className={styles.workTitle}>{title}</p>
                {link && (
                  <Link href={link} target="_blank" className={styles.aTag}>
                    {link}
                  </Link>
                )}
                <span className={styles.date}>{date}</span>
                <p>{subTitle}</p>
                {type === 'FILL' && img && (
                  <ScrollXslider>
                    <div className={styles.imgsContainer}>
                      {img.map((src, idx) => (
                        <Image
                          style={{ cursor: 'pointer' }}
                          title="크게 보기"
                          key={idx}
                          src={src}
                          alt="project img"
                          priority
                          width={500}
                          height={400}
                          className={styles.projectsImgs}
                          onClick={() => {
                            setImgSrc(src);
                            openPopup();
                          }}
                        />
                      ))}
                    </div>
                  </ScrollXslider>
                )}
              </div>
              <p className={styles.worksTaskTitle}>Tasks</p>
              <ul className={styles.ulContainer}>
                {tasks.map((text) => (
                  <li key={text} className={styles.liTagBig}>
                    {text}
                  </li>
                ))}
              </ul>
              <div className={styles.skillsetWrapper}>
                {skillsets.map((text) => (
                  <div key={text} className={styles.skillChip}>
                    {text}
                  </div>
                ))}
              </div>
            </div>
          ),
        )}
      </div>
      {isPopupOpen && (
        <Modal type="IMG">
          <ImgFullScreen src={imgSrc!} onClose={closePopup} />
        </Modal>
      )}
    </>
  );
}
