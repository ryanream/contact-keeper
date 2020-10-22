import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import { REMOVE_ALERT, SET_ALERT } from '../types';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';

import // REGISTER_SUCCESS,
// REGISTER_FAIL,
// USER_LOADED,
// AUTH_ERROR,
// LOGIN_SUCCESS,
// LOGIN_FAIL,
// LOGOUT,
// CLEAR_ERRORS,
'../types';

const AlertState = props => {
  const initialState = [];

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set Alert
  const setAlert = (msg, type, timeout = 2000) => {
    const id = uuid();
    dispatch({
      type: SET_ALERT,
      payload: { msg, type, id },
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  };

  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};
export default AlertState;
