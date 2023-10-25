import { ReactNode, createContext, useState } from 'react';
import BoxHeader from './BoxHeader';
import BoxFooter from './BoxFooter';

import styles from './Box.module.scss';

interface BoxProps {
  children: ReactNode[] | ReactNode;
  headerAddon?: ReactNode;
  footerAddon?: ReactNode;
}

interface IBoxContext {
  isBodyHidden: boolean;
  toggleIsBodyHidden: () => void;
}

const boxContextInitial: IBoxContext = {
  isBodyHidden: false,
  toggleIsBodyHidden() {},
};

export const BoxContext = createContext<IBoxContext>(boxContextInitial);

export function Box({ children, headerAddon, footerAddon }: BoxProps) {
  const [isBodyHidden, setIsBodyHidden] = useState(false);

  const toggleIsBodyHidden = () => {
    setIsBodyHidden((prev) => !prev);
  };

  const boxState = {
    isBodyHidden,
    toggleIsBodyHidden,
  };

  return (
    <div className={styles.box}>
      <BoxContext.Provider value={boxState}>
        <BoxHeader title="Header" btnTextCondition={isBodyHidden}>
          {headerAddon ? headerAddon : null}
        </BoxHeader>
        <div className={!isBodyHidden ? styles.body : ''}>{!isBodyHidden ? children : null}</div>
        <BoxFooter title="Footer">{footerAddon ? footerAddon : null}</BoxFooter>
      </BoxContext.Provider>
    </div>
  );
}
