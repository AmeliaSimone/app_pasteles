import React from 'react'

import styles from "./HeaderBottom.module.scss"

const HeaderBottom = ({children, width, align}:any) => {
  return (
    <div className={styles.header_bottom} style={{width:width, justifyContent:align}}>{children}</div>
    
  );
};

export default HeaderBottom;