import React from 'react'

import styles from "./HeaderTop.module.scss"

const HeaderTop = ({children, width, align, className}:any) => {
  return (
    <div className={`${styles.header_top} ${className}`} style={{width:width, justifyContent:align}}>{children}</div>
  );
};

export default HeaderTop;