import styles from './Names.module.scss';

export function Names() {
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
  return (
    <ul className={styles.names}>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
