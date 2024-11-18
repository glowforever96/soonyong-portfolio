import Link from 'next/link';
import ScrollXslider from './ScrollXslider';
import * as styles from './styles/chat.css';

export default function WorksBubble() {
  return (
    <div className={styles.commonBubble}>
      <div className={styles.title}>
        <h1 className={styles.h1Title}>Works</h1>
      </div>
      <h3>티맥스에이아이 (2022. 10 ~ 2024. 11)</h3>
      <ScrollXslider>
        <div className={styles.worksBoxWrapper}>
          {WORK_DATA.map(({ title, link, date, tasks, skillsets }) => (
            <div className={styles.worksBox} key={title}>
              <div className={styles.workTitleBox}>
                <p className={styles.workTitle}>{title}</p>
                {link && (
                  <Link href={link} target="_blank" className={styles.aTag}>
                    {link}
                  </Link>
                )}
                <span className={styles.date}>{date}</span>
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
          ))}
        </div>
      </ScrollXslider>
    </div>
  );
}

const WORK_DATA = [
  {
    title: '챗봇 서비스 (A-Talk)',
    link: '',
    date: '2024.07 ~ 2024.11',
    tasks: [
      '- AI 룰 베이스 기반 챗봇 및 지식 제공 서비스 개발 진행',
      '- 질의 응답, 지식 제공 및 다수 기능 구현',
      '- Docker 컨테이너화로 Frontend 테스트 환경 구축 및 유지 보수',
      '- optimistic update 기법으로 챗 응답에 기반 좋아요/싫어요 UX 사용자 경험 최적화',
    ],
    skillsets: [
      'React',
      'TypeScript',
      'styled-components',
      'Zustand',
      'react-interserction-observer',
      'Docker',
    ],
  },
  {
    title: '미래앤 디지털 교과서',
    link: '',
    date: '2024.02 ~ 2024.06',
    tasks: [
      '- 초, 중등 수학/영어 활동 카드 템플릿 제작',
      '- 템플릿 UI 컴포넌트, 마크업 제작',
      '- 선 긋기, 드래그앤드랍, 드래그 등 학습에 필요한 마우스 인터렉션 구현',
    ],
    skillsets: [
      'React',
      'styled-components',
      'TypeScript',
      'react-beautiful-dnd',
    ],
  },
  {
    title: '사내 홈페이지',
    link: 'https://tmaxai.co.kr/',
    date: '2023.08 ~ 2023.12',
    tasks: [
      '- 페이지 UI 및 컴포넌트 개발 (데스크탑, 모바일 버전)',
      '- 메인 페이지, 서비스 소개, 도입 문의 페이지 제작',
      '- 이메일 템플릿 HTML 제작',
      '- 다수의 크로스 브라우징 이슈 처리',
    ],
    skillsets: ['React', 'TypeScript', 'styled-components', 'recoil', 'swiper'],
  },
  {
    title: '채용 공고 서비스 (A-Job)',
    link: '',
    date: '2023.04 ~ 2023.06',
    tasks: [
      '- 페이지 UI 및 컴포넌트 개발 (데스크탑, 모바일 버전)',
      '- 기업 정보 및 직업 백과 페이지 개발',
      '- 채용 공고 무한 스크롤 기능 구현',
    ],
    skillsets: ['React', 'TypeScript', 'styled-components', 'recoil', 'swiper'],
  },
  {
    title: '챗봇 빌더 스튜디오 (hyperchatbot 2.0)',
    link: '',
    date: '2022.10 ~ 2023.03',
    tasks: [
      '- 계정 신청, 프로젝트 관리/삭제 기능 구현 및 페이지 개발',
      '- 프로젝트 UI 공통 컴포넌트 개발 (Input, Textarea, Switch 등)',
      '- 유저 인풋 입력 값 유효성 검증 코드 개발',
      '- 디바운싱 기법 활용 실시간 유저 form 입력 검증 UI/UX 구현',
    ],
    skillsets: [
      'React',
      'TypeScript',

      'styled-components',
      'recoil',
      'mui',
      'SWR',
    ],
  },
];
