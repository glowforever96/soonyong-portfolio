import * as styles from './styles/chat.css';
import Project2Img_1 from '../../public/images/project/nextjsplayground/1.png';
import Project2Img_2 from '../../public/images/project/nextjsplayground/2.png';
import Project2Img_3 from '../../public/images/project/nextjsplayground/3.png';
import Project2Img_4 from '../../public/images/project/nextjsplayground/4.png';
import Project2Img_5 from '../../public/images/project/nextjsplayground/5.png';

import Project3Img_1 from '../../public/images/project/weddingcard/1.png';
import Project3Img_2 from '../../public/images/project/weddingcard/2.png';
import Project3Img_3 from '../../public/images/project/weddingcard/3.png';
import Project3Img_4 from '../../public/images/project/weddingcard/4.png';
import Project3Img_5 from '../../public/images/project/weddingcard/5.png';

import Project4Img_1 from '../../public/images/project/mapapp/1.png';
import Project4Img_2 from '../../public/images/project/mapapp/2.png';
import Project4Img_3 from '../../public/images/project/mapapp/3.png';
import Project4Img_4 from '../../public/images/project/mapapp/4.png';
import Project4Img_5 from '../../public/images/project/mapapp/5.png';

import Project5Img_1 from '../../public/images/project/boardme/1.png';
import Project5Img_2 from '../../public/images/project/boardme/2.png';
import Project5Img_3 from '../../public/images/project/boardme/3.png';
import Project5Img_4 from '../../public/images/project/boardme/4.png';
import Project5Img_5 from '../../public/images/project/boardme/5.png';

import Project6Img_1 from '../../public/images/project/togethercoding/1.png';
import Project6Img_2 from '../../public/images/project/togethercoding/2.png';
import Project6Img_3 from '../../public/images/project/togethercoding/3.png';
import Project6Img_4 from '../../public/images/project/togethercoding/4.png';
import Project6Img_5 from '../../public/images/project/togethercoding/5.png';

import ImgSwiper from './ImgSwiper';
import ScrollXslider from './ScrollXslider';
import Image, { StaticImageData } from 'next/image';
import ArrowIcon from '../../public/arrowDown.svg';
import { useEffect, useRef, useState } from 'react';

export type ModalDataType = {
  imgList: StaticImageData[];
  aboutList: string[];
  link: string;
  github: string;
};

export default function ProjectBubble() {
  const bubbleRef = useRef<HTMLDivElement>(null);
  const [boxWidth, setBoxWidth] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<ModalDataType>({
    imgList: [],
    aboutList: [],
    link: '',
    github: '',
  });

  const handleClickButton = ({
    imgList,
    aboutList,
    link,
    github,
  }: ModalDataType) => {
    setIsOpen(true);
    setModalData({
      imgList,
      aboutList,
      link,
      github,
    });
  };

  const closePopup = () => {
    setIsOpen(false);
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
                    onClick={() =>
                      handleClickButton({
                        imgList: img,
                        aboutList: about,
                        link,
                        github,
                      })
                    }
                  >
                    <ArrowIcon className={styles.customSvg} />
                    상세 보기
                  </button>
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
      {isOpen && <ImgSwiper modalData={modalData} onClose={closePopup} />}
    </div>
  );
}

const PROJECT_DATA = [
  {
    title: 'portfolio-chatbot',
    link: '',
    github: '',
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
    title: 'Next.js Playground',
    link: 'https://nextjspg.vercel.app/',
    github: 'https://github.com/boyfromthewell/nextjs-playground',
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
      '- 이름 그대로 만들어 보고 싶은 기능이 있으면 마음껏 만들고 있습니다.',
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
      'Youtube Data API',
    ],
  },
  {
    title: 'Mobile Wedding Card',
    link: 'https://sy-mobile-wedding-card.vercel.app/',
    github: 'https://github.com/boyfromthewell/mobile-wedding-card',
    date: '2024.06',
    img: [
      Project3Img_1,
      Project3Img_2,
      Project3Img_3,
      Project3Img_4,
      Project3Img_5,
    ],
    about: [
      '- 본인의 결혼을 기념해 만든 추억 저장용 모바일 청첩장 입니다.',
      '- velog 인기 게시물이었던 모바일 청첩장 제작기를 우연히 보고 영감을 받아 제작하였습니다.',
      '- 정적 고화질 이미지가 많은 프로젝트인만큼 이미지 최적화에 신경 썼습니다.',
      '- 간단한 Firebase 연동으로 방명록, 문의 기능을 제공합니다.',
      '- framer-motion 라이브러리를 사용해 애니메이션을 구현 했습니다.',
      '- 데스크탑 / 모바일 버전을 지원합니다.',
    ],
    skillset: [
      'React',
      'TypeScript',
      'styled-component',
      'swiper',
      'framer-motion',
      'Firebase',
      'Naver Map API',
    ],
  },
  {
    title: 'Map Application',
    link: 'https://map-application-mocha.vercel.app/',
    github: 'https://github.com/boyfromthewell/map-application',
    date: '2023.08 ~ 2023.11',
    img: [
      Project4Img_1,
      Project4Img_2,
      Project4Img_3,
      Project4Img_4,
      Project4Img_5,
    ],
    about: [
      '- Next.js ver13 (page router)을 사용해 제작한 간단한 지도 어플리케이션입니다.',
      '- getStaticProps, getServerSideProps 등의 메서드 활용을 통해 정적 페이지 생성, SSR에 대해 이해 할수 있었습니다.',
      '- 다크모드, 피드백, 매장 리뷰 작성 기능을 제공합니다.',
      '- 리뷰 작성 기능은 네이버 지도 앱 UI와 비슷한 형태로 만들어 봤습니다.',
      '- Firebase 연동으로 리뷰, 피드백 데이터를 관리 합니다.',
      '- 데스크탑 / 모바일 버전을 지원합니다.',
    ],
    skillset: [
      'React',
      'Next.js',
      'TypeScript',
      'css-module',
      'SWR',
      'Firebase',
      'Naver Map API',
    ],
  },
  {
    title: 'Board-Me',
    link: 'https://board-we.github.io/frontend/',
    github: 'https://github.com/Board-We/frontend',
    date: '2022.12 ~ 2023.03',
    img: [
      Project5Img_1,
      Project5Img_2,
      Project5Img_3,
      Project5Img_4,
      Project5Img_5,
    ],
    about: [
      '- 백엔드, 디자인 담당 구성원과 협업해 진행한 프로젝트 입니다.',
      '- 나만의 커스텀 롤링 페이퍼를 만들 수 있는 서비스를 기획/제작 했습니다.',
      '- 주기적으로 회의를 통해 협업을 진행 했으며 실제 서비스가 프로덕션 되는 과정을 몸소 느낄 수 있었습니다.',
      '- Frontend 구성원과 같이 의견을 조율해 효율적인 개발 방식을 찾아 배울 수 있었습니다.',
    ],
    skillset: ['React', 'JavaScript', 'styled-component', 'axios', 'recoil'],
  },
  {
    title: 'Together Coding',
    link: '',
    github: 'https://github.com/Together-Coding/Client',
    date: '2022.03 ~ 2022.06',
    img: [
      Project6Img_1,
      Project6Img_2,
      Project6Img_3,
      Project6Img_4,
      Project6Img_5,
    ],
    about: [
      '- 학부 졸업 작품으로 진행한 <일대다 코딩 수업을 위한 실시칸 코드 공유 서비스> 프로젝트 입니다.',
      '- 유저 인증, 수업 생성 및 관리, 웹 코드 에디터 제공 및 코드 컴파일 기능을 제공합니다.',
      '- WebSocket을 활용해 파일 변경 사항과 커서 위치를 실시간으로 공유하도록 구현 했습니다.',
      '- 개발 당시에는 미숙하고 어려움이 많았지만 돌이켜 보면 Frontend 관련 지식과 기술들을 전반적으로 학습할 수 있었던 좋은 경험이었습니다.',
      '- API 스펙을 토의하고, 데이터 구조 및 통신 방식을 조율해 클라이언트-서버 간 상호작용을 구현하는 방법을 익힐 수 있었습니다.',
    ],
    skillset: [
      'React',
      'JavaScript',
      'Sass',
      'axios',
      'Monaco Editor',
      'socket-io',
    ],
  },
];
