import * as styles from './styles/chat.css';

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
              티맥스에이아이 연구본부 Frontend 개발 (2022.10 ~ 2024.10)
            </li>
          </ul>
          <h3>주요 업무</h3>
          <ul className={styles.ulContainer}>
            <li className={styles.liTagNoStyle}>
              - 사내 웹 서비스의 <b>프론트엔드 아키텍처 설계 및 구현</b>
            </li>
            <li className={styles.liTagNoStyle}>
              - 서비스 전반에서 <b>재사용 가능한 UI 컴포넌트 개발 및 최적화</b>,
              디자인 시스템 일관성 유지
            </li>
            <li className={styles.liTagNoStyle}>
              - <b>React 프로젝트의 Typescript 마이그레이션</b>(jsx → tsx)
              수행을 통해 코드 안정성과 유지 보수성 향상
            </li>
            <li className={styles.liTagNoStyle}>
              - <b>REST API 통신 관리 및 비동기 데이터 처리</b> 최적화
            </li>
            <li className={styles.liTagNoStyle}>
              - <b>레거시 코드 리팩토링 및 성능 최적화</b>, 기존 비즈니스 로직
              유지와 개선을 위한 주기적인 코드 리뷰
            </li>
            <li className={styles.liTagNoStyle}>
              - <b>Docker를 활용한 개발 환경 구성 및</b> 컨테이너화된
              애플리케이션을 통해 일관된 개발 및 배포 환경 제공
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
