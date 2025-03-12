import * as styles from '@/styles/chat.css';

export default function IntroduceBubble() {
  return (
    <div className={styles.commonBubble}>
      <div className={styles.title}>
        <h1 className={styles.h1Title}>Introduce</h1>
      </div>
      <div className={styles.infoBox}>
        <p className={styles.introParagraph}>{INTRO_PARAGRAPH}</p>
      </div>
    </div>
  );
}

const INTRO_PARAGRAPH = `안녕하세요.\n끊임없이 고민하고 개선하는 것을 좋아하는 개발자 권순용입니다.\n\n이전 직장에서 Frontend 연구원으로 근무하면서 다양한 프로젝트에 참여, 성능 최적화와 UI/UX 개선 작업에 최선을 다했습니다.\n\n저는 불의를 참지 못하는 성격을 가지고 있습니다. 개발자에게 빗대어서 얘기를 해보자면 제가 작성한 코드가 조금이라도 비효율적이라고 느끼거나 성능이 떨어지는 것 같이 보이면 이를 최적화하고 해결책을 찾아가는 것을 좋아합니다.\n
또한, 제가 잘 알고 있는 지식을 문서화 하거나 알려주는 것을 좋아합니다. 저도 몰랐던 것인데 제 와이프가 해주는 말이 제가 어떤 걸 알려주거나 할 때 눈이 반짝이면서 신나게 가르쳐 준다고 합니다.\n생각을 해보면 제가 혼자 개발 공부를 하면서 깃허브에 코드를 기록하거나, 노션에 따로 페이지를 작성해 정리 하는 것을 좋아하곤 했었습니다. 이처럼 제가 잘 알고 있는 지식들을 동료들에게도 공유 해 좋은 개발 문화를 이끌어 가는 것을 좋아합니다.\n\n자기 계발에도 소홀하지 않습니다. 자기 계발에도 소홀하지 않으려고 합니다. 관심이 가는 스킬은 직접 타이핑 해보며 경험 해보거나 주저 하지 않고 강의 구매하는 것을 좋아합니다.\n\n최근에는 Next.js의 여러 강력한 기능을 앞세운 app router에 많은 관심이 생겨 지속적으로 학습을 진행했습니다. 마치 새로운 프레임워크를 다루는 듯한 신선한 경험이었고 이를 실무에 빠르게 적용해보고 싶다는 기대감도 높일 수 있었습니다.`;
