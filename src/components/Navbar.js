// import React from 'react'
import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import Modal from '../Modal';
import Cart from '../screens/Cart';
import {useCart} from '../components/ContextReducer';
export default function Navbar() {
const[cartView,setCartView]=useState(false)
let data=useCart();
  const navigate=useNavigate();
const handleLogout=()=>{
localStorage.removeItem("authToken");
navigate("/login");
}

  return (
    <div>


      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand fs-3 fst-italic" to="/">GentleAssist</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">

            {/* we are giving auto to this home so that it occupies all the margin and the login and sign up btn are moved to end automatically cuz for that below we have made them flex */}
            {/* mx-1 gives margin to the left while me-1 wld mean margin to the right */}

            <ul className="navbar-nav me-auto ">
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="#">Home</Link>
              </li>
              {/* now if the user is logged in then we want my orders  to reflect near home for that we will check if the authtoken genrated in the local storage if  not then only we want the login and sign up btn to show for all of this we will ue ternary operator */}
              {(localStorage.getItem("authToken")) ?
                <li className="nav-item">
                  <Link className="nav-link active fs-5" aria-current="page" to="#">My appointments</Link>
                </li>
                : ""
              }
            </ul>

            {/* if we dont recieve an authtoken means the user is new so we want the login and signup btn  */}
             {/* div is an inline element so to convert its item to flex below below we put property */ }
                       {/* mx-1 gives margin to the left while me-1 wld mean margin to the right below below */}
            {!(localStorage.getItem("authToken")) ?


             
   <div className='d-flex'>

            <Link className="btn btn-outline-light  mx-1" to="/login">Login</Link>

            <Link className="btn btn-outline-light mx-1" to="/createuser">SignUp</Link>

          </div>
          : <div>
            <div className='btn btn-outline-light  mx-1' onClick={()=>{setCartView(true)}}>
            Cart{" "}
            <Badge pill bg="danger">{data.length}</Badge>
          </div> 
        {cartView?<Modal onClose={()=>setCartView(false)}><Cart/></Modal>:null}  
             <div className='btn btn-danger' onClick={handleLogout}>
            Logout
          </div> 

          </div>}
 {/* we want to get redirected to login as soon as logout btn is clicked by the user so we will use useNavigate to go back to login also we will remove the authtoken by using fucntion remove in localstorage */}
        </div>
    </div>
</nav >
    </div >
  )
}
