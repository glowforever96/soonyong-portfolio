import * as styles from '@/styles/chat.css';
import ImgSwiper from '../ui/ImgSwiper';
import ScrollXslider from '../ui/ScrollXslider';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Modal from '../ui/Modal';
import ProjectsFillScreen from '../fill-contents/ProjectsFillScreen';
import FullScreenButton from '../ui/FullScreenButton';
import { PROJECT_DATA } from '@/constants';
import usePopup from '@/hooks/usePopup';

export type ModalDataType = {
  imgList: StaticImageData[];
  aboutList: string[];
  link: string;
  github: string;
};

export default function ProjectBubble() {
  const bubbleRef = useRef<HTMLDivElement>(null);
  const [boxWidth, setBoxWidth] = useState(0);
  const { isPopupOpen, openPopup, closePopup: onClose } = usePopup();
  const [modalData, setModalData] = useState<ModalDataType>({
    imgList: [],
    aboutList: [],
    link: '',
    github: '',
  });

  const [showBigView, setShowBigView] = useState(false);

  const handleClickButton = ({
    imgList,
    aboutList,
    link,
    github,
  }: ModalDataType) => {
    openPopup();
    setModalData({
      imgList,
      aboutList,
      link,
      github,
    });
  };

  const closePopup = () => {
    onClose();
    setModalData({
      imgList: [],
      aboutList: [],
      link: '',
      github: '',
    });
  };

  useEffect(() => {
    if (bubbleRef.current) setBoxWidth(bubbleRef.current.clientWidth);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBigView(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.commonBubble} ref={bubbleRef}>
      <div className={styles.title}>
        <h1 className={styles.h1Title}>Projects</h1>
      </div>
      <ScrollXslider>
        <div className={styles.projectsBoxWrapper}>
          {PROJECT_DATA.map(
            ({ title, link, github, date, img, about, skillset }) => (
              <div
                className={styles.projectBox}
                key={title}
                style={
                  {
                    '--project-box-width': `${boxWidth}px`,
                  } as React.CSSProperties
                }
              >
                <button
                  className={styles.showBigBtn}
                  onClick={() =>
                    handleClickButton({
                      imgList: img,
                      aboutList: about,
                      link,
                      github,
                    })
                  }
                >
                  {/* <ArrowIcon className={styles.customSvg} /> */}
                  상세 보기
                </button>
                <div className={styles.projectTitleDate}>
                  <p className={styles.projectTitle}>{title}</p>
                  <span className={styles.date}>{date}</span>
                </div>
                <div className={styles.projectImgContainer}>
                  <Image
                    src={img[0]}
                    alt="project image"
                    className={styles.projectImg}
                  />
                </div>
                <div className={styles.skillsetWrapper}>
                  {skillset.map((text) => (
                    <div key={text} className={styles.skillChip}>
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            ),
          )}
        </div>
      </ScrollXslider>
      {isPopupOpen && <ImgSwiper modalData={modalData} onClose={closePopup} />}
      {showBigView && (
        <Modal onClose={() => setShowBigView(false)} type="GEN">
          <ProjectsFillScreen />
        </Modal>
      )}
      <FullScreenButton onClick={() => setShowBigView(true)} />
    </div>
  );
}
