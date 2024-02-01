import React from 'react'

import styles from "./ContentCell.module.scss"

const ContentCell = ({ children, width, align, marginTop, marginLeft }: any) => {
    return (
        <div className={styles.content_cell} style={{width: width, justifyContent:align, marginTop:marginTop, marginLeft:marginLeft}}>{children}</div>
    );
};

export default ContentCell;