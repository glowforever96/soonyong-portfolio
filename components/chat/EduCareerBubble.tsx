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
              - 웹/앱 서비스의 프론트엔드 아키텍처 설계 및 기능 개발
            </li>
            <li className={styles.liTagNoStyle}>
              - PC/모바일 웹 환경을 모두 고려한 UI/UX 최적화 및 웹 접근성 향상
              경험
            </li>
            <li className={styles.liTagNoStyle}>
              - 다수의 재사용 가능한 UI 컴포넌트 및 공통 모듈 개발, 디자인
              시스템 일관성 유지
            </li>
            <li className={styles.liTagNoStyle}>
              - REST API 통신 리소스 관리 및 백엔드 개발자와의 협업을 통한 문제
              해결
            </li>
            <li className={styles.liTagNoStyle}>
              - 다양한 도메인의 프로젝트(AI 챗봇, 디지털 교과서, 사내 홈페이지
              등) 경험 보유
            </li>
            <li className={styles.liTagNoStyle}>
              - 기획, 디자인, 백엔드 직군과의 원활한 커뮤니케이션 역량 보유
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
