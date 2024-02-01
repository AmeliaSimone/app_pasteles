import React from 'react'
import styles from "./ComboBox.module.scss"

export const ComboBox = ({ label, data, width }: any) => {
    return (
        <div className={styles.comboBox} style={{ width: width }}>
            <label>{label}</label>
            <select>
                <option value="">{data[0]}</option>
                <option value="">{data[1]}</option>
            </select>
        </div>
    );
};

export default ComboBox;