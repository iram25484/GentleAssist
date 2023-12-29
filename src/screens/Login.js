import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
export default function Login() {

  const [credentials, setcredentials] = useState({email:"",password:""})

  let navigate=useNavigate()          //for redirecting to home page if login is successful

  const handleSubmit=async(e)=>{
           e.preventDefault();
           const response=await fetch("http://localhost:5000/api/loginuser",{
          method:'POST',
          headers:{         //note the spelling its headers
            'Content-Type':'application/json'
          },
          body:JSON.stringify({email:credentials.email,password:credentials.password})
  });
  const json=await response.json()
  console.log(json);

  if(!json.success){
    alert("Enter valid credentials")
  }
if(json.success){
  localStorage.setItem("authToken",json.authToken);
  navigate("/");               //for redirecting to home page if login is successful
}

}

const onChange=(event)=>{
setcredentials({...credentials,[event.target.name]:event.target.value})
}

  return (
    <div>
      <div className='container'>
      <form onSubmit={handleSubmit} >
      
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control"  onChange={onChange} name='email' value={credentials.email} placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" onChange={onChange} name='password' value={credentials.password}  placeholder="Password"/>
  </div>
 

  <button type="submit" className="btn btn-primary">Submit</button>
 
 <Link to="/createuser" className="m-3 btn btn-danger">I'm a new user</Link>

</form>

       </div>
    </div>
  )
}
