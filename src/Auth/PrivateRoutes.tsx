import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function PrivateRoute(props: { setLogin?: any; Component?: any; }) {
  const {Component}=props;
  const navigate = useNavigate()

  let logIn = localStorage.getItem('token');
  // useEffect(() => {
  //   if(logIn){
  //       navigate('/')
  //   }
  
  // }, [logIn])
  
    return (
    <div><Component setLogin={props.setLogin}/></div>
  )
}

export default PrivateRoute