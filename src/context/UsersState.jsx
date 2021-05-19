import React, {useReducer} from 'react';
import {UsersContext} from './UsersContext';
import {UsersReducer} from './UsersReducer';
import {
  CLOSE_MODAL,
  SET_ACTIVE_USERS,
  SET_ALL_USERS,
  SET_BLOCKED_USERS,
  SET_LOADING,
  SET_USER,
} from './types';


const UsersState = ({children}) => {

  const initialState = {
    users: [],
    currentUser: null,
    modalOpened: false,
    loading: false
  };

  const [state, dispatch] = useReducer(UsersReducer, initialState, () => initialState);

  const getUsers = async () => {
    setLoading();
    const response = await fetch('https://watchlater.cloud.technokratos.com/get/array');
    const users = await response.json();
    return users;
  };

  const setAllUsers = async () => {
    setLoading();
    const users = await getUsers();
    dispatch({
      type: SET_ALL_USERS,
      users
    });
  };


  const setBlockedUsers = async () => {
    const users = await getUsers();
    dispatch({
      type: SET_BLOCKED_USERS,
      users
    });
  };

  const setActiveUsers = async () => {
    const users = await getUsers();
    dispatch({
      type: SET_ACTIVE_USERS,
      users
    });
  };

  const setUser = user => {
    dispatch({
      type: SET_USER,
      user
    });
  };


  const closeModal = () => {
    dispatch({
      type: CLOSE_MODAL
    });
  };

  const setLoading = () => dispatch({type: SET_LOADING});

  const {users, loading, modalOpened, currentUser} = state;


  return (
    <UsersContext.Provider
      value={{
        setAllUsers,
        setBlockedUsers,
        setActiveUsers,
        setUser,
        closeModal,
        modalOpened,
        users,
        loading,
        currentUser
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};


export default UsersState;