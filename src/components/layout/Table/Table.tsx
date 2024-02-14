import React from 'react'

import styles from "./Table.module.scss"

const Table = ({ children, height, width, gap, className }: any) => {
    return (
        <div className={`${styles.table} ${className}`} style={{ height: height, width: width, gap:gap }}>{children}</div>
    );
};

const TableHeader = ({ children, gap }: any) => {
    return (
        <div className={styles['table-header']} style={{gap:gap }}>{children}</div>
    );
};

const TableDetail = ({ children, gap }: any) => {
    return (
        <div className={styles["table-detail"]} style={{ gap:gap }}>{children}</div>
    );
};

const TableRow = ({ children, gap }: any) => {
    return (
        <div className={styles["table-row"]} style={{gap:gap }}>{children}</div>
    );
};

const TableCell = ({ children, width, aling, gap }: any) => {
    return (
        <div className={styles["table-cell"]} style={{ width: width, justifyContent: aling, gap:gap }}>{children}</div>
    );
};

const TableCellEnd = () => {
    return (
        <div className={styles["table-cell-end"]}></div>
    );
};


export { Table, TableHeader, TableDetail, TableRow, TableCell, TableCellEnd };