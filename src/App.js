import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import UserList from './components/UserList/UserList';
import UsersState from './context/UsersState';
import UserModal from './components/UserModal/UserModal';
import {useUsersContext} from './context/UsersContext';
import {useEffect} from 'react';

function App() {
  const {modalOpened, closeModal, setAllUsers, currentUser} = useUsersContext();

  useEffect(() => {
    setAllUsers();
  }, []);

  return (
    <div className="App">
      <Header/>
      <UserList/>
      <UserModal isOpened={modalOpened} closeModal={closeModal} user={currentUser}/>
    </div>
  );
}

const UserListApp = () => {
  return (
    <UsersState>
      <App/>
    </UsersState>
  );
};

export default UserListApp;
