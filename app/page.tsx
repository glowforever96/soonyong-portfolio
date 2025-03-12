import ContentsSection from '@/components/ui/ContentsSection';
import Header from '@/components/ui/Header';
import * as styles from '../styles/home.css';

export default function Home() {
  return (
    <div className={styles.appWrapper}>
      <Header />
      <ContentsSection />
    </div>
  );
}
