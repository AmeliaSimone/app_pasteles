import React from 'react'

import styles from "./ContentRow.module.scss"

const ContentRow = ({ children, width, marginTop}: any) => {
    return (
        <div className={styles.content_row} style={{width: width, marginTop:marginTop}}>{children}</div>
    );
};

export default ContentRow;