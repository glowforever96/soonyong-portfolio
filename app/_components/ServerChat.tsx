import EduCareerBubble from './EduCareerBubble';
import InitBubble from './InitBubble';
import IntroduceBubble from './IntroduceBubble';
import * as styles from './styles/contentsSection.css';
import LogoIcon from '../../public/chatbot.svg';
import Loading from './Loading';
import SkillBubble from './SkillBubble';

export default function ServerChat({ type, message, getAnswer }) {
  const renderByType = () => {
    switch (type) {
      case 'INIT':
        return <InitBubble getAnswer={getAnswer} />;
      case 'INTRODUCE':
        return <IntroduceBubble />;
      case 'EDU_AND_CAREER':
        return <EduCareerBubble />;
      case 'SKILLS':
        return <SkillBubble />;
    }
  };

  return (
    <div className={styles.serverChatParent}>
      <LogoIcon />
      <div className={styles.serverChatWrapper[type]}>
        {message && message}
        {renderByType()}
      </div>
    </div>
  );
}
