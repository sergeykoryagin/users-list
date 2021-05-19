import React from 'react';
import styles from './UserList.module.css';
import {useUsersContext} from '../../context/UsersContext';
import User from './User/User';
import Loader from '../../utils/Loader/Loader';

const UserList = () => {
  const {loading, users, setUser} = useUsersContext();

  if (loading || !users) {
    return <Loader/>;
  }

  return (
    <ul className={styles.UserList}>
      {users.map(user => <User key={user.id} {...user} setUser={setUser}/>)}
    </ul>
  );
};

export default UserList;