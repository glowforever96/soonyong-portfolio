import ContentsSection from './_components/ContentsSection';
import Header from './_components/Header';
import InputSection from './_components/InputSection';
import * as styles from './styles/home/home.css';

export default function Home() {
  return (
    <div className={styles.appWrapper}>
      <Header />
      <ContentsSection />
      <InputSection />
    </div>
  );
}
