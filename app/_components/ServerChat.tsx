import EduCareerBubble from './EduCareerBubble';
import InitBubble from './InitBubble';
import IntroduceBubble from './IntroduceBubble';
import * as styles from './styles/contentsSection.css';
import LogoIcon from '../../public/chatbot.svg';
import Loading from './Loading';
import SkillBubble from './SkillBubble';
import ContactBubble from './ContactBubble';
import WorksBubble from './WorksBubble';
import ProjectsBubble from './ProjectsBubble';

export default function ServerChat({ type, message }) {
  const renderByType = () => {
    switch (type) {
      case 'INIT':
        return <InitBubble />;
      case 'INTRODUCE':
        return <IntroduceBubble />;
      case 'EDU_AND_CAREER':
        return <EduCareerBubble />;
      case 'SKILLS':
        return <SkillBubble />;
      case 'PROJECTS':
        return <ProjectsBubble />;
      case 'WORKS':
        return <WorksBubble />;
      case 'CONTACT':
        return <ContactBubble />;
      default:
        return null;
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
