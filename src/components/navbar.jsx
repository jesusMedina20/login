import React from 'react';

import { NavLink, useNavigate } from "react-router-dom";



import { AuthContext } from '../context/userContext';
function Navbar({ visible, show }) {

	const navigate = useNavigate();



	return (

		<AuthContext.Consumer>

			{(value) => {

				return (<>
					<div className="mobile-nav">
						<button
							className="mobile-nav-btn"
							onClick={() => show(!visible)}

						>
						
						</button>
					</div>
					<nav className={!visible ? 'navbar' : ''}>
						<button
							type="button"
							className="nav-btn"
							onClick={() => show(!visible)}
						>

						</button>
						<div>
							<label className='San'>
						
							</label>
							
							
							
                            {/* el nombre del usuario loggeado 
							 <label> {value.user.nombre} </label> */}
						
							<div className="links nav-top">
								<NavLink to="/SignIn" className="nav-link">

									 <span>   Habitaciones </span>
								</NavLink>
								<NavLink to="/reports" className="nav-link">

									 <span>  Reportes </span>
								</NavLink>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
      <NavLink className='nav-link' onClick={async (e) => {
          e.preventDefault();
          if (await value.logout()) {
            navigate('/')
          }
        }} >		  <span> Log out </span></NavLink>
							</div>
						</div>
						<div className="back">



							<span onClick={() => show(!visible)} >   </span>

						</div>
					</nav>
				</>
				)
			}}
		</AuthContext.Consumer>

	);
}

export default Navbar;