import React from 'react'

import styles from "./ContentRow.module.scss"

const ContentRow = ({ children, width, align, gap, height}: any) => {
    return (
        <div className={styles.content_row} style={{width: width, justifyContent: align, gap:gap, height:height}}>{children}</div>
    );
};

export default ContentRow;