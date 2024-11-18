import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

import './styles/swiper.css';

export default function ImgSwiper({ src, onClose }) {
  return (
    <div className="swiperOverlay">
      <div className="modalContent">
        <div className="btnWrapper">
          <button className="closeBtn" onClick={onClose}>
            X
          </button>
        </div>
        <Swiper
          loop
          modules={[Navigation]}
          draggable={false}
          allowTouchMove={false}
          navigation
        >
          {src?.map((src) => (
            <SwiperSlide key={src}>
              <Image
                src={src}
                alt="image"
                loading="lazy"
                layout="fill"
                objectFit="contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
