import * as styles from './styles/chat.css';

export default function InitBubble({ getAnswer }) {
  return (
    <div className={styles.initBubble}>
      {BUTTON_DATA.map(({ type, text }) => (
        <button key={type} onClick={(e) => getAnswer(e, text)} value={type}>
          {text}
        </button>
      ))}
    </div>
  );
}

const BUTTON_DATA = [
  { type: 'INTRODUCE', text: '🙋 Introduce' },
  {
    type: 'EDU_AND_CAREER',
    text: '📖 Edu & Career',
  },
  {
    type: 'SKILLS',
    text: '🖥️ Skills',
  },
  {
    type: 'PROJECTS',
    text: '🙌 Projects',
  },
  {
    type: 'WORKS',
    text: '👨‍💻 Works',
  },
  {
    type: 'CONTACT',
    text: '✉️ Contact',
  },
];
