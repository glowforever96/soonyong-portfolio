import ScrollContainer from 'react-indiana-drag-scroll';
import * as styles from './styles/chat.css';

export default function ScrollXslider({ children }) {
  return (
    <ScrollContainer vertical={false} className={styles.scrollX}>
      {children}
    </ScrollContainer>
  );
}
