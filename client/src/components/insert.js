import React,{useState} from 'react'
import './crud.css'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Insert() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate();

    const handlesubmit= (e)=>{
        e.preventDefault();
        Axios.post('http://localhost:8070/addUser',{
            name:name,
            email:email,
            password:password
        }).then(res=>{
            console.log('Got the Response : ',res.data);
        }).catch((e)=>{
            console.log('Error occured in insert.js', e);
        })
    }

    const Deletehandlesubmit=(e)=>{
        e.preventDefault();
        navigate("/deleteUser");

    }

    const Displayhandlesubmit=(e)=>{
        e.preventDefault();
        navigate("/displayAllUser");

    }

    const Updatehandlesubmit=(e)=>{
        e.preventDefault();
        navigate("/updateUser");

    }

  return (
    <div>
        <center>DATA INSERTION INTO DATABASE
        <br/>
        <br/>
        <input onChange={(e)=>{setName(e.target.value)}} value={name} placeholder='Enter your Name'/>
        <br/>
        <br/>
        <input onChange={(e)=>{setEmail(e.target.value)}} value={email}placeholder='Enter your Email'/>
        <br/>
        <br/>   
        <input onChange={(e)=>{setPassword(e.target.value)}} value={password} placeholder='Enter your Password'/>
        <br/><br/>
        <button onClick={handlesubmit}>ADD DATA</button>
        <br/><br/>
        <button onClick={Deletehandlesubmit}>DELETE DATA</button>
        <br/><br/>
        <button onClick={Updatehandlesubmit}>UPDATE DATA</button>
        <br/><br/>
        <button onClick={Displayhandlesubmit}>DISPLAY All DATA</button>
        <br/><br/>
        </center>
    </div>
  )
}

export default Insert