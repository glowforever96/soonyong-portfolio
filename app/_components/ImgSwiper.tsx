import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import * as styles from './styles/chat.css';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { ModalDataType } from './ProjectsBubble';
import CloseIcon from '../../public/close.svg';
import GitLogo from '../../public/github.svg';

import './styles/swiper.css';
import Link from 'next/link';

interface ImgSwiperProps {
  modalData: ModalDataType;
  onClose: () => void;
}

export default function ImgSwiper({ modalData, onClose }: ImgSwiperProps) {
  const { imgList, aboutList, link, github } = modalData;

  return (
    <div className="swiperOverlay">
      <div className="modalContent">
        <div className="btnWrapper">
          <button className="closeBtn" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <Swiper
          loop
          modules={[Navigation]}
          draggable={false}
          allowTouchMove={false}
          navigation
        >
          {imgList?.map((src, idx) => (
            <SwiperSlide key={idx}>
              <Image src={src} alt="image" loading="lazy" layout="fill" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="descWrapper">
          <p className="title">About</p>
          <div className="ulWrapper">
            <ul className={styles.ulContainer}>
              {aboutList?.map((text) => (
                <li key={text} className={styles.liTagBig}>
                  {text}
                </li>
              ))}
            </ul>
            <div className="linkBox">
              <Link href={link} target="_blank" className={styles.aTag}>
                {link}
              </Link>
              <Link href={github} target="_blank" className={styles.aTag}>
                <GitLogo />
                Github
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
