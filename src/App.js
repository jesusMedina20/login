import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import SignIn from './pages/SignIn'

import { AuthContext} from './context/userContext'



function App({ auth, login, getAuthToken, userId }) {
  console.log(auth)
  return (
    <div>
       <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            {auth && <>
              <Route exact path="/SignIn" element={<SignIn />} />
   
            </>}
        
      </Routes>
    </Router>
  </div>
  )
}

const ContextWrapper = (props) => {
  return <AuthContext.Consumer>
    {(value) => {
      return <App {...props} {...value} />
    }}
  </AuthContext.Consumer>
}

export default ContextWrapper;