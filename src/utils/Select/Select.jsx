import React from 'react';
import styles from './Select.module.css';

const Select = ({children, className, defaultValue}) => {
  return (
    <select className={styles.select + ' ' + className} defaultValue={defaultValue}>
      {children}
    </select>
  );
};

export default Select;