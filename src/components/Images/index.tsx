import { useContext } from 'react';
import styles from './Images.module.scss';
import { AppContext } from '..';

export function Images() {
  const { images, imagesPagination } = useContext(AppContext);

  return (
    <div className={styles.images}>
      {images.slice(imagesPagination.start, imagesPagination.end).map((image) => (
        <img src={image.url} alt={image.alt} key={image.id} />
      ))}
    </div>
  );
}
