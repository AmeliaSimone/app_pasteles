import React from 'react'

import styles from "./DateBox.module.scss"

const DateBox = ({label, text, width}:any) => {
  return (
    <div className={styles.dateBox} style={{ width: width }}>
            <label>{label}</label>
            <input type="date" value={text}/>
        </div>
  );
};

export default DateBox;