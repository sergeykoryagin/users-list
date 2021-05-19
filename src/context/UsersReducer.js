import {
  SET_ACTIVE_USERS,
  SET_ALL_USERS,
  SET_BLOCKED_USERS,
  SET_LOADING,
  SET_USER,
  OPEN_MODAL,
  CLOSE_MODAL
} from './types';


const handlers = {
  [SET_ALL_USERS]: (state, action) => ({...state, users: action.users, loading: false}),
  [SET_ACTIVE_USERS]: (state, action) => ({
    ...state,
    users: action.users.filter(user => user.status === 1),
    loading: false
  }),
  [SET_BLOCKED_USERS]: (state, action) => ({
    ...state,
    users: action.users.filter(user => user.status === 2),
    loading: false
  }),
  [SET_USER]: (state, action) => ({...state, currentUser: action.user, modalOpened: true}),
  [OPEN_MODAL]: state => ({...state, modalOpened: true}),
  [CLOSE_MODAL]: state => ({...state, modalOpened: false}),
  [SET_LOADING]: state => ({...state, loading: true}),
  DEFAULT: state => state
};

export const UsersReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};