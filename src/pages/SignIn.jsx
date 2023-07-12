




import { useState } from 'react';
import Navbar from '../components/navbar';
import { AuthContext } from '../context/userContext';

export default function SignIn() {
  const [navVisible, showNavbar] = useState(false);
  

  return (
    <AuthContext.Consumer>
{(value)=>{
 return ( <div className='container-signin'>
    <div className='container-colorbox'>
      <Navbar visible={ navVisible } show={ showNavbar } />
 
      
    </div>
  </div>)

}}

</AuthContext.Consumer>
  )
}
