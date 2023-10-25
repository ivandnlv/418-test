import { useState, useEffect, createContext } from 'react';
import { Box } from '../UI';
import styles from './App.module.scss';
import { Images } from '../Images';
import ImagesPagination from '../Images/ImagesPagination';

interface IAppContext {
  images: { id: number; url: string; alt: string }[];
  imagesPagination: {
    page: number;
    itemsPerPage: number;
    start: number;
    end: number;
  };
  changePage: (page: number) => void;
}

export const AppContext = createContext<IAppContext>({
  images: [],
  imagesPagination: { page: 1, itemsPerPage: 1, start: 1, end: 1 },
  changePage() {},
});

export function App() {
  const data = [
    {
      id: 1,
      name: 'Vasyan',
      age: 32,
    },
    {
      id: 2,
      name: 'Grisha',
      age: 12,
    },
    {
      id: 3,
      name: 'Katya',
      age: 23,
    },
    {
      id: 4,
      name: 'Masha',
      age: 34,
    },
    {
      id: 5,
      name: 'Jora',
      age: 4,
    },
    {
      id: 6,
      name: 'Ivan',
      age: 23,
    },
  ];

  const [imagesPagination, setImagesPagination] = useState<IAppContext['imagesPagination']>({
    itemsPerPage: 4,
    page: 1,
    start: 0,
    end: 4,
  });

  const changePage = (page: number) => {
    setImagesPagination((prev) => ({
      ...prev,
      page,
      start: page * prev.itemsPerPage - prev.itemsPerPage,
      end: page * prev.itemsPerPage,
    }));
  };

  const appState: IAppContext = {
    images: [
      {
        id: 1,
        url: 'https://w.forfun.com/fetch/56/5656d35727009cabea6ce79973a9702c.jpeg',
        alt: 'photo1',
      },
      {
        id: 2,
        url: 'https://w.forfun.com/fetch/03/03f8cd3f6796daaacc1fe43ffb7704b7.jpeg',
        alt: 'photo2',
      },
      {
        id: 3,
        url: 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666206241_12-mykaleidoscope-ru-p-kartinka-na-zastavku-oboi-12.jpg',
        alt: 'photo3',
      },
      { id: 4, url: 'https://klike.net/uploads/posts/2023-02/1675839044_3-490.jpg', alt: 'photo4' },
      {
        id: 5,
        url: 'https://w.forfun.com/fetch/99/99c54000f395ae805a4ed4057a84079e.jpeg',
        alt: 'photo5',
      },
      {
        id: 6,
        url: 'https://fikiwiki.com/uploads/posts/2022-02/1644965580_6-fikiwiki-com-p-kartinki-priroda-na-zastavku-telefona-6.jpg',
        alt: 'photo6',
      },
      {
        id: 7,
        url: 'https://fikiwiki.com/uploads/posts/2022-02/1645058026_2-fikiwiki-com-p-kartinki-s-khoroshim-kachestvom-2.jpg',
        alt: 'photo7',
      },
      { id: 8, url: 'https://klike.net/uploads/posts/2023-02/1675839159_3-577.jpg', alt: 'photo8' },
      { id: 9, url: 'https://www.fonstola.ru/images/201504/fonstola.ru_171676.jpg', alt: 'photo9' },
      {
        id: 10,
        url: 'https://gas-kvas.com/uploads/posts/2023-02/1675446663_gas-kvas-com-p-kartinki-na-fonovii-risunok-rabochego-36.jpg',
        alt: 'photo10',
      },
      {
        id: 11,
        url: 'https://wdorogu.ru/images/wp-content/uploads/2018/05/Sommerlandschaft-Bilder-88.jpg',
        alt: 'photo11',
      },
    ],
    imagesPagination,
    changePage,
  };

  return (
    <div className={styles.app}>
      <AppContext.Provider value={appState}>
        <div className={styles.container}>
          <Box>
            {data.map((item) => (
              <div key={item.id}>{item.name}</div>
            ))}
          </Box>
          <Box footerAddon={<ImagesPagination />}>{<Images />}</Box>
        </div>
      </AppContext.Provider>
    </div>
  );
}
