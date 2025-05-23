import Image, { StaticImageData } from 'next/image';
import * as styles from '../../styles/chat.css';
import ScrollXslider from '../ui//ScrollXslider';
import Link from 'next/link';
import GitLogo from '../../public/github.svg';
import { useState } from 'react';
import ImgFullScreen from '../fill-contents/ImgFullScreen';
import Modal from '../ui/Modal';
import usePopup from '@/hooks/usePopup';

type Props = {
  title: string;
  link: string;
  github: string;
  date: string;
  img: StaticImageData[];
  about: string[];
  skillset: string[];
};

export default function ProjectFillContents({ data }: { data: Props[] }) {
  const { isPopupOpen, openPopup, closePopup } = usePopup();
  const [imgSrc, setImgSrc] = useState<StaticImageData>();

  return (
    <>
      <div className={styles.fillProjectsContainer}>
        {data.map(({ title, date, img, about, skillset, link, github }) => (
          <div
            key={title}
            style={{ borderBottom: '1px solid #d1d9e6', paddingBottom: 32 }}
          >
            <div className={styles.projectTitleDateBig}>
              <p className={styles.projectTitleBig}>{title}</p>
              <span className={styles.dateBig}>{date}</span>
            </div>
            <ScrollXslider>
              <div className={styles.imgsContainer}>
                {img.map((src, idx) => (
                  <Image
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
            <div className={styles.skillsetWrapperBig}>
              {skillset.map((text) => (
                <div key={text} className={styles.skillChipBig}>
                  {text}
                </div>
              ))}
            </div>
            <ul className={styles.ulContainer}>
              {about.map((text) => (
                <li key={text} className={styles.liTagMoreBig}>
                  {text}
                </li>
              ))}
            </ul>
            <div className={styles.linkBox}>
              <Link href={link} target="_blank" className={styles.aTagBig}>
                {link}
              </Link>
              <Link href={github} target="_blank" className={styles.aTagBig}>
                <GitLogo />
                Github
              </Link>
            </div>
          </div>
        ))}
      </div>
      {isPopupOpen && (
        <Modal type="IMG">
          <ImgFullScreen src={imgSrc!} onClose={closePopup} />
        </Modal>
      )}
    </>
  );
}
