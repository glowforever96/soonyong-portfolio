import * as styles from './styles/chat.css';
import Project2Img_1 from '../../public/images/project/nextjsplayground/1.png';
import Project2Img_2 from '../../public/images/project/nextjsplayground/2.png';
import Project2Img_3 from '../../public/images/project/nextjsplayground/3.png';
import Project2Img_4 from '../../public/images/project/nextjsplayground/4.png';
import Project2Img_5 from '../../public/images/project/nextjsplayground/5.png';
import ImgSwiper from './ImgSwiper';
import ScrollXslider from './ScrollXslider';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function ProjectBubble() {
  const bubbleRef = useRef<HTMLDivElement>(null);
  const [boxWidth, setBoxWidth] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [srcData, setSrcData] = useState<StaticImageData[]>([]);

  const handleClickButton = (images: StaticImageData[]) => {
    setIsOpen(true);
    setSrcData(images);
  };

  const closePopup = () => {
    setIsOpen(false);
    setSrcData([]);
  };

  useEffect(() => {
    if (bubbleRef.current) setBoxWidth(bubbleRef.current.clientWidth);
  }, []);

  return (
    <div className={styles.commonBubble} ref={bubbleRef}>
      <div className={styles.title}>
        <h1 className={styles.h1Title}>Projects</h1>
      </div>
      <ScrollXslider>
        <div className={styles.projectsBoxWrapper}>
          {PROJECT_DATA.map(({ title, link, date, img, about, skillset }) => (
            <div
              className={styles.projectBox}
              key={title}
              style={
                {
                  '--project-box-width': `${boxWidth}px`,
                } as React.CSSProperties
              }
            >
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
                <button
                  className={styles.showBigBtn}
                  onClick={() => handleClickButton(img)}
                >
                  이미지 크게 보기/더보기
                </button>
              </div>
              <ul className={styles.ulContainer}>
                {about.map((text) => (
                  <li key={text} className={styles.liTagNoStyle}>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ScrollXslider>
      {isOpen && <ImgSwiper src={srcData} onClose={closePopup} />}
    </div>
  );
}

const PROJECT_DATA = [
  {
    title: 'portfolio-chatbot',
    link: '',
    date: '2024.11',
    img: [
      Project2Img_1,
      Project2Img_2,
      Project2Img_3,
      Project2Img_4,
      Project2Img_5,
    ],
    about: ['- 1', '- 2', '- 3'],
    skillset: [
      'React',
      'Next.js',
      'TypeScript',
      'vanilla-extract',
      ,
      'swiper',
      'prisma',
    ],
  },
  {
    title: 'nextjs-playground',
    link: 'https://nextjspg.vercel.app/',
    date: '2024.08 ~',
    img: [
      Project2Img_1,
      Project2Img_2,
      Project2Img_3,
      Project2Img_4,
      Project2Img_5,
    ],
    about: [
      '- Next.js ver14(app router)에 적응해 보기 위해 시작했습니다.',
      '- Youtube Data API 사용해 국가별 인기 동영상 및 동영상 데이터 조회/시청이 가능합니다.',
      '- Youtube 개인 채널의 재생 목록 및 재생 목록안의 동영상 데이터를 조회/시청이 가능 합니다',
      '- Tanstack Query 적용으로 서버 데이터 prefetch 및 optimistic update 기법을 사용해 사용자 경험 최적화 향상에 신경 썼습니다.',
      '- Tanstack Query가 제공하는 hook인 useInfiniteQuery로 무한 스크롤 방식으로 데이터를 불러 옵니다.',
      '- 컴포넌트를 공용화 하여 유튜버의 채널 ID만 알게 되면 무한으로 재생 목록을 조회/시청 가능한 기능 구현이 가능합니다.',
      '- next-auth 사용으로 credential, OAuth 유저 인증 과정을 구현 했습니다.',
      '- Prisma, Supabase 사용으로 유저 정보, 댓글 정보 등을 저장, 관리 / API 연동 기능을 구현 했습니다.',
      '- media query 사용으로 반응형 UI 구현에 신경 썼습니다.',
    ],
    skillset: [
      'React',
      'Next.js',
      'TypeScript',
      'styled-components',
      'next-auth',
      'prisma',
      'supabse',
    ],
  },
];
