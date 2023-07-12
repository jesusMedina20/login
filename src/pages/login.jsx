
import React, { useEffect } from 'react'
import { useState } from "react";
import { Outlet} from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { AuthContext } from '../context/userContext';

const Login = ({login, currentUser, logout}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    (async () => {
      if (await currentUser()) {
        navigate('/SignIn');
      }
    })();
  }, [currentUser, navigate]);
 

 
  

        return( 
          <div className='container-loginPage'>
     <div className='login-container'>
       <form className='login' onSubmit={async (e) => {
          e.preventDefault();
          if (await login(username, password)) {
            navigate('/SignIn')
          }
        }}>
         <div className='title-login'>Iniciar Sesión</div>
          <label className='label-login' >
            Correo electrónico
          <input
          className='inputLogin1'
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        
            </label>
        <label className='label-login'>
        Contraseña
          <input
          className='inputLogin2'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
  
       
        </label>
  
  
  
        <div className='btn-div'>
        
        <button disabled={
          username.length===0 ||
          password.length===0
        }
        className='btn'
        type="submit">Iniciar sesión</button>
        
        </div>
    
  
  
      </form>
  
    </div>
  
  
  <Outlet />
    </div>
    )

  
  
}

const ContextWrapper = (props) => {
  return <AuthContext.Consumer>
    {(value) => {
      return <Login {...props} {...value} />
    }}
  </AuthContext.Consumer>
}

export default ContextWrapper;