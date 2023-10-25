import { ReactNode, useContext } from 'react';
import styles from './BoxHeader.module.scss';
import Btn from '../../Btn';
import { BoxContext } from '..';

interface BoxHeaderProps {
  title: string;
  btnTextCondition: boolean;
  children?: ReactNode | null;
}

export default function BoxHeader({ title, children, btnTextCondition }: BoxHeaderProps) {
  const { toggleIsBodyHidden } = useContext(BoxContext);

  return (
    <header className={styles.header}>
      <Btn onClick={toggleIsBodyHidden}>{btnTextCondition ? 'Show body' : 'Hide body'}</Btn>
      <h2>{title}</h2>
      {children ? <div className={styles.items}>{children}</div> : null}
    </header>
  );
}
