import * as styles from '@/styles/contentsSection.css';

interface SelectChipsProps {
  isInit: boolean;
  getAnswer: (e: React.MouseEvent<HTMLButtonElement>, message: string) => void;
}

export default function SelectChips({ getAnswer, isInit }: SelectChipsProps) {
  return (
    <div className={styles.selectChipsWrapper}>
      {!isInit && (
        <p className={styles.chipParagraph}>더 궁금하신게 있으세요?</p>
      )}
      <div className={styles.chipWrapper}>
        {BUTTON_DATA.map(({ type, text }) => (
          <button
            key={type}
            onClick={(e) => getAnswer(e, text)}
            value={type}
            className={styles.chipButton}
          >
            {text}
          </button>
        ))}
      </div>
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
