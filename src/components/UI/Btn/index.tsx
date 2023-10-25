import { HTMLAttributes } from 'react';

import styles from './Btn.module.scss';

type BtnProps = HTMLAttributes<HTMLButtonElement>;

export default function Btn({ children, ...props }: BtnProps) {
  return (
    <button className={styles.btn} {...props}>
      {children}
    </button>
  );
}
