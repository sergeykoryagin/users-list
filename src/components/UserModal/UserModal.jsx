import React from 'react';
import styles from './UserModal.module.css';

const UserModal = ({isOpened, closeModal, user}) => {
  if (!user) {
    return null;
  }

  const wrapperStyles = [styles.wrapper].concat(isOpened ? [styles.opened] : [styles.closed]);

  let status;
  switch (user.status) {
  case 0:
    status = 'Приостановлена';
    break;
  case 1:
    status = 'Подписка активна';
    break;
  default:
    status = 'Заблокирован';
  }
  return (
    <div className={wrapperStyles.join(' ')}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <span className={styles.fullname}>{user.lastName + ' ' + user.firstName}</span>
          <span className={styles.close} onClick={() => closeModal()}/>
        </div>
        <div className={styles.info}>
          <span className={styles.lastName}>{user.lastName}</span>
          <span className={styles.firstName}>{user.firstName}</span>
          <span className={styles.secondName}>{user.secondName}</span>
          <span className={styles.status}>{status}</span>
        </div>
        <div className={styles.save} onClick={() => closeModal()}>Сохранить</div>
      </div>
    </div>
  );
};

export default UserModal;