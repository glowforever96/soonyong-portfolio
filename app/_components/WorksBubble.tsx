import Link from 'next/link';
import ScrollXslider from './ScrollXslider';
import * as styles from './styles/chat.css';

export default function WorksBubble() {
  return (
    <div className={styles.commonBubble}>
      <div className={styles.title}>
        <h1 className={styles.h1Title}>Works</h1>
      </div>
      <h3>티맥스에이아이 (2022. 10 ~ 2024. 10)</h3>
      <ScrollXslider>
        <div className={styles.worksBoxWrapper}>
          {WORK_DATA.map(({ title, link, date, tasks, skillsets, desc }) => (
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
              <p className={styles.workDesc}>💡 {desc}</p>
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
      '- optimistic update 기법으로 챗 응답 피드백 기능(좋아요/싫어요) UX 사용자 경험 최적화',
    ],
    desc: '사용자 경험을 최적화하기 위한 인터페이스 응답 방식의 중요성을 느낄 수 있었습니다. optimistic update 기법을 통해 피드백 기능을 구현하면서, 사용자 눈에는 크게 체감이 되지는 않지만, 사용자의 관점에서 조금이라도 서비스 개선점을 찾기 위해 꾸준히 노력했습니다. 또한 Docker 컨테이너를 통해 테스트 환경 유지 보수 업무를 도맡아 진행하면서 개발 환경과 실제 운영 환경 간의 차이를 줄이는 방법을 익힐 수 있었습니다.',
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
    desc: '선긋기나 드래그 인터렉션 구현 등 다소 까다로운 기능 개발을 자진해서 진행했던 기억이 납니다. 다소 마감기한이 촉박한 사업건 이었지만, 책임감을 가지고 무사히 기능 개발을 완료 할 수 있었습니다. 또한 이 과정에서 제 코드가 다른 협력 업체에서 코드 제공 요청을 받았다는 점도 큰 보람으로 다가왔습니다.',
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
    desc: '다양한 환경에서 일관된 화면을 제공하여 사용자 경험을 극대화하기 위해 최선을 다했습니다. 특히, 여러 브라우저와 다양한 기기에서 발생하는 크로스 브라우징 이슈를 직접 해결하며 이는 Frontend 개발에 필수적인 요소임을 깨달을 수 있었습니다.',
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
    desc: '무한 스크롤 기능을 Intersection Oberver API를 사용해 커스텀 hook으로 만들어 개발했던 기억이 납니다. 이를 직접 구현 해보면서 사용자 경험의 고려한 기능 설계의 중요성과 브라우저 네이티브 API에 대한 이해도를 높일 수 있었습니다.',
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
    desc: '입사 후, 처음으로 개발에 참여했던 프로젝트입니다. 계정 신청, 로그인 시 필요한 유저 form 입력 검증 로직 작성 및 UI/UX 개발을 맡아 진행했던 기억이 납니다. 사용자 경험을 고려해 디바운싱 기법을 활용하여 입력값을 실시간으로 검증해 서버와의 통신 횟수를 줄여 효율성을 높이기 위해 노력 했습니다. 또한 협업을 통해 업무 흐름을 익힐 수 있었고 첫 업무에서 많이 성장 할 수 있는 계기가 되었습니다.',
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
