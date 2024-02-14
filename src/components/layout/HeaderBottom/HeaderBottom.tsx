import React from 'react'

import styles from "./HeaderBottom.module.scss"

const HeaderBottom = ({children, width, align, className}:any) => {
  return (
    <div className={`${styles.header_bottom} ${className}`} style={{width:width, justifyContent:align}}>{children}</div>
    
  );
};

export default HeaderBottom;