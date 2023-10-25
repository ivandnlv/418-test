import { useContext } from 'react';
import styles from './ImagesPagination.module.scss';
import { AppContext } from '../..';
import Btn from '../../UI/Btn';

export default function ImagesPagination() {
  const { imagesPagination, changePage, images } = useContext(AppContext);

  const allPages = new Array(Math.ceil(images.length / imagesPagination.itemsPerPage)).fill('');

  const onPageClick = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLButtonElement) {
      changePage(Number(e.target.textContent));
    }
  };

  return (
    <div className={styles.pagination}>
      {allPages.map((_, i) => (
        <Btn
          key={i}
          onClick={onPageClick}
          style={
            imagesPagination.page === i + 1 ? { color: 'white', background: 'lightblue' } : {}
          }>
          {i + 1}
        </Btn>
      ))}
    </div>
  );
}
