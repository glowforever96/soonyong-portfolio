import ScrollXslider from '../ui/ScrollXslider';
import * as styles from '@/styles/chat.css';
import ReactImg from '../../public/images/react.png';
import JsImg from '../../public/images/js.png';
import TsImg from '../../public/images/ts.png';
import ScImg from '../../public/images/stylecom.png';
import VeImg from '../../public/images/vanila.png';
import GlobalStateImg from '../../public/images/globalState.png';
import NextImg from '../../public/images/next.png';
import QuerySwr from '../../public/images/query.png';
import DockerImg from '../../public/images/docker.png';
import GitImg from '../../public/images/git.png';
import Image from 'next/image';

export default function SkillBubble() {
  return (
    <div className={styles.commonBubble}>
      <div className={styles.title}>
        <h1 className={styles.h1Title}>Skills</h1>
      </div>
      <ScrollXslider>
        <div className={styles.skillBoxWrapper}>
          {SKILL_INFO.map(({ src, title, desc }) => (
            <div className={styles.skillBox} key={title}>
              <div className={styles.imgContainer}>
                <Image
                  src={src}
                  alt="logo img"
                  className={styles.img}
                  height={200}
                />
              </div>
              <div className={styles.descWrapper}>
                <p className={styles.skillTitle}>{title}</p>
                <span className={styles.descText}>{desc}</span>
              </div>
            </div>
          ))}
        </div>
      </ScrollXslider>
    </div>
  );
}

const SKILL_INFO = [
  {
    src: ReactImg,
    title: 'React',
    desc: '함수형 컴포넌트 및 Hook을 활용한 다수의 프로젝트 개발 경험이 있습니다.',
  },
  {
    src: JsImg,
    title: 'JavaScript',
    desc: 'ES6+ 문법을 활용한 동적 웹 기능 구현, DOM 조작 경험이 있습니다.',
  },
  {
    src: TsImg,
    title: 'TypeScript',
    desc: '타입 안정성을 바탕으로 한 프로젝트 개발 및 유지보수 경험이 있습니다.',
  },
  {
    src: NextImg,
    title: 'Next.js',
    desc: 'SSR과 SSG를 활용한 SEO 최적화, 성능 개선에 관심이 있으며 학습을 꾸준히 진행 중입니다',
  },
  {
    src: ScImg,
    title: 'Styled Components',
    desc: 'CSS-in-JS 방식으로 동적 스타일링 및 유지보수성을 향상한 경험이 있습니다',
  },
  {
    src: VeImg,
    title: 'Vanilla Extract',
    desc: '제로 런타임 특징을 가진 점에 관심이 생겨 학습해 보고 있습니다. 현재 프로젝트에도 적용해 컴포넌트 단위로 스타일을 관리 합니다.',
  },
  {
    src: GlobalStateImg,
    title: 'Recoil / zustand / jotai / Redux',
    desc: '전역 상태 관리에 적합한 여러 상태 관리 라이브러리를 선정해 사용해본 경험이 있습니다.',
  },
  {
    src: QuerySwr,
    title: 'Tanstack Query / SWR',
    desc: '서버 상태 관리 및 데이터 동기화를 최적화하기 위해 두 라이브러리를 활용한 경험이 있습니다.',
  },
  {
    src: DockerImg,
    title: 'Docker',
    desc: '프로젝트를 컨테이너화하여 배포 프로세스 간소화 및 백엔드 API 테스트가 용이하도록 한 경험이 있습니다.',
  },
  {
    src: GitImg,
    title: 'Github / Gitlab',
    desc: '협업과 버전 관리 도구 사용으로 효율적인 코드 관리, 팀원과의 협업 경험이 있습니다.',
  },
];
