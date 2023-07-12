import { createContext, useState, useEffect, useContext, useCallback } from "react";

import {  Route,} from "react-router-dom";
import Swal from "sweetalert2";
import peticionHttp from "../utils/peticiones.js";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState();
  const [user,setUser] = useState();
  

  // const setAuthToken = (token) =>
  //   localStorage.setItem("jwt", `Bearer ${token}`);
  // const getAuthToken = () => localStorage.getItem("jwt");
  
  const login = async (username, password) => {
    const respuesta = await peticionHttp('/api/AdminR', 'POST', {username, password })
    if (respuesta?.ok) {
      // setAuthToken(respuesta.Token);
      setUser(respuesta.user);
      setAuth(true);
      return true;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Usuario o contraseña inválido',
        text: '',
      })
      ;
    }
  };




  const logout = async ()=> {
    const respuesta = await peticionHttp('/api/Logout', 'GET', {})
    setAuth(true);
    setUser('');
    return true
  }

  // esto basicamente es un get donde el back manda si sse esta logeado o no 
  // e tiene qqe crear una ruta NUEVA 


  const currentUser = useCallback( async () => {
    const respuesta = await peticionHttp('/api/Current', 'GET', {})
    if (respuesta?.ok) {
    
      setUser(respuesta.user);
      setAuth(true);
      return true;
      
        } 

  }, []);

  useEffect(() => {currentUser()}, [currentUser])

  return (
    <AuthContext.Provider value={{ auth, logout, login, user, currentUser}}>
      {children}
    </AuthContext.Provider>
  );
};

function PrivateRoute({ component: Component, ...rest }) {
  const ctx = useContext(AuthContext);
  console.info(ctx);

  return (
    <Route
      {...rest}
      
    />
  );
}

export { AuthProvider, PrivateRoute, AuthContext };