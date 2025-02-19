import Image, { StaticImageData } from 'next/image';
import * as styles from './styles/contentsSection.css';
import CloseIcon from '../public/close.svg';

export default function ImgFullScreen({
  src,
  onClose,
}: {
  src: StaticImageData;
  onClose: () => void;
}) {
  return (
    <div className={styles.imgFullContainer}>
      <button onClick={onClose} className={styles.closeBtn}>
        <CloseIcon className={styles.svgIcon} />
      </button>
      <Image
        src={src}
        alt="full screen img"
        width={200}
        height={200}
        className={styles.fullImg}
        priority
      />
    </div>
  );
}
