import React from 'react';
import { Navigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './Auth-context';

export function CanNavigate({ children }) {
  const { auth } = useContext(AuthContext);

  if (auth?.accessToken) {
    return (children);
  } else {
    return <Navigate to='/login' replace={true} />;
  }
}
