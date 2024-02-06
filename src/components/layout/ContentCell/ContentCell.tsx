import React from 'react'

import styles from "./ContentCell.module.scss"

const ContentCell = ({ children, width, align, gap}: any) => {
    return (
        <div className={styles.content_cell} style={{width: width, justifyContent:align, gap: gap}}>{children}</div>
    );
};

export default ContentCell;