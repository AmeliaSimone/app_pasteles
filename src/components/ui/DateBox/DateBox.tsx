import React from 'react'

import styles from "./DateBox.module.scss"

const DateBox = ({label, text, width, className}:any) => {
  return (
    <div className={`${styles.dateBox} ${className}`} style={{ width: width }}>
            <label>{label}</label>
            <input type="date" value={text}/>
        </div>
  );
};

export default DateBox;