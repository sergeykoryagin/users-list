import React, {useState} from 'react';
import styles from './Header.module.css';
import {useUsersContext} from '../../context/UsersContext';

const Header = () => {
  const [active, setActive] = useState(1);
  const activeStyle = [styles.link, styles.active];
  const {setAllUsers, setActiveUsers, setBlockedUsers} = useUsersContext();

  const handlerAllUsersClick = () => {
    setActive(1);
    setAllUsers();
  };

  const handlerBlockedUsersClick = () => {
    setActive(2);
    setBlockedUsers();
  };

  const handlerActiveUsersClick = () => {
    setActive(3);
    setActiveUsers();
  };

  return (
    <nav className={styles.Header}>
      <ul className={styles.nav}>
        <li className={active === 1 ? activeStyle.join(' ') : styles.link}
          onClick={handlerAllUsersClick}
        >
          Все
        </li>
        <li className={active === 2 ? activeStyle.join(' ') : styles.link}
          onClick={handlerBlockedUsersClick}
        >
          Заблокированные
        </li>
        <li className={active === 3 ? activeStyle.join(' ') : styles.link}
          onClick={handlerActiveUsersClick}
        >
          Активные
        </li>
      </ul>
    </nav>
  );
};

export default Header;