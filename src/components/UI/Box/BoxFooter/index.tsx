import { ReactNode } from 'react';
import styles from './BoxFooter.module.scss';

interface BoxFooterProps {
  children?: ReactNode;
  title: string;
}

export default function BoxFooter({ title, children }: BoxFooterProps) {
  return (
    <footer className={styles.footer}>
      <h2>{title}</h2>
      {children ? <div className={styles.params}>{children}</div> : null}
    </footer>
  );
}
