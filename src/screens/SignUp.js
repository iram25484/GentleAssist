import React,{useState} from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
//dont forget to import usestate //also update name and value in input

const [credentials, setcredentials] = useState({name:"",email:"",password:"",contact:""})

    const handleSubmit=async(e)=>{
             e.preventDefault();
             const response=await fetch("http://localhost:5000/api/createuser",{
            method:'POST',
            headers:{         //note the spelling its headers
              'Content-Type':'application/json'
            },
            body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,contact:credentials.contact})
    });
    const json=await response.json()
    console.log(json);

    if(!json.success){
      alert("Enter valid credentials")
    }
  }

const onChange=(event)=>{
  setcredentials({...credentials,[event.target.name]:event.target.value})
}


  return (
    <>
     
    <div className='container'>
      <form onSubmit={handleSubmit} >
      <div className="form-group">
    <label htmlFor="name">name</label>
    <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} placeholder="name"/>
  </div>

  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control"  onChange={onChange} name='email' value={credentials.email} placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" onChange={onChange} name='password' value={credentials.password}  placeholder="Password"/>
  </div>
 
  <div className="form-group">
    <label>contact</label>
    <input type="tel" className="form-control" onChange={onChange} name='contact' value={credentials.contact}  placeholder="Contact"/>
  </div>

 <Link to="/login"><button type="submit" className="btn btn-primary" >Submit</button></Link> 
 
 <Link to="/login" className="m-3 btn btn-danger">Already a user</Link>

</form>

       </div>
    </>
  )
}
