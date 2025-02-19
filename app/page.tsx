import ContentsSection from '../components/ContentsSection';
import Header from '../components/Header';
import * as styles from '../styles/home/home.css';

export default function Home() {
  return (
    <div className={styles.appWrapper}>
      <Header />
      <ContentsSection />
    </div>
  );
}
