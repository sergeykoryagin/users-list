import React from 'react';
import styles from './User.module.css';
import {formatDate} from '../../../utils/formatDate';
import Select from '../../../utils/Select/Select';


const User = ({avatar, status, setUser, ...props}) => {
  const fullname = [props.fname, props.name[0] + '.', props.mname[0] + '.'].join(' ');
  const balance = props.balance.toFixed(2);
  const date = formatDate(props.lastUpdatedAt);


  const handleUserClick = (e) => {
    if (e.target.localName !== 'select') {
      setUser({
        firstName: props.name,
        lastName: props.fname,
        secondName: props.mname,
        status
      });
    }
  };


  let defaultSelect;
  if (status === 0) defaultSelect = 'Приостановлена';
  else if (status === 1) defaultSelect = 'Подписка активна';
  else if (status === 2) defaultSelect = 'Заблокирован';

  return (
    <li className={styles.User} onClick={(e) => handleUserClick(e)}>
      <img className={styles.avatar} src={avatar} alt="user"/>
      <span className={styles.fullname}>{fullname}</span>
      <span className={styles.balance}>Баланс: {balance}</span>
      <span className={styles.lastChanges}>Последнее изменение: {date}</span>
      <Select className={styles.status} defaultValue={defaultSelect}>
        <option>Приостановлена</option>
        <option>Подписка активна</option>
        <option>Заблокирован</option>
      </Select>
    </li>
  );
};

export default User;