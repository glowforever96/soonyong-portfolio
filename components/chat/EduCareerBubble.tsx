import * as styles from '@/styles/chat.css';

export default function EduCareerBubble() {
  return (
    <div className={styles.commonBubble}>
      <div className={styles.title}>
        <h1 className={styles.h1Title}>Education & Career</h1>
      </div>
      <div className={styles.mainInfoBox}>
        <div className={styles.infoBox}>
          <h2>📖 Education</h2>
          <ul>
            <li className={styles.liTag}>
              인하대학교 컴퓨터공학과 학사 졸업 (2015.03 ~ 2022.08)
            </li>
          </ul>
        </div>
        <div className={styles.infoBox}>
          <h2>👨‍💻 Career</h2>
          <ul>
            <li className={styles.liTag}>
              티맥스에이아이 연구본부 Frontend 개발 (2022.10 ~ 2024.11)
            </li>
          </ul>
          <h3>주요 업무</h3>
          <ul className={styles.ulContainer}>
            <li className={styles.liTagNoStyle}>
              - 사내 웹 서비스의 <b>프론트엔드 아키텍처 설계 및 구현</b>
            </li>
            <li className={styles.liTagNoStyle}>
              - <b>재사용 가능한 UI 컴포넌트 개발</b> 및{' '}
              <b>디자인 시스템의 일관성 유지</b>
              <br />→ 유지보수성을 고려한 컴포넌트 설계 및 스타일 가이드 적용
            </li>
            <li className={styles.liTagNoStyle}>
              - <b>React 프로젝트의 TypeScript 마이그레이션 (JSX → TSX)</b>
              <br />→ 코드 안정성과 유지보수성을 향상하여 타입 안전성 확보
            </li>
            <li className={styles.liTagNoStyle}>
              - <b>Docker 기반의 테스트 환경 구축</b>
              <br />→{' '}
              <b>백엔드 API를 쉽게 테스트할 수 있도록 컨테이너 환경 제공</b>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
