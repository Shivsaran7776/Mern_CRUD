import React,{useState} from 'react';
import Axios from 'axios';


function Update() {

    const [mail, setEmail] = useState("");
    const [pass, setPassword] = useState("");

    const handlesubmit= (e)=>{
        e.preventDefault();
        Axios.patch('http://localhost:8070/update',{
            email:mail,
            password:pass
        }).then(res=>{
            console.log('Got the Response : ',res.data);
        }).catch((e)=>{
            console.log('Error occured in insert.js', e);
        })
    }

  return (
    <div>
    <center>UPDATION OF DATA INTO DATABASE
    <br/>
    <br/>
    <input onChange={(e)=>{setEmail(e.target.value)}} value={mail} placeholder='Enter your Email'/>
    <br/><br/>
    <input onChange={(e)=>{setPassword(e.target.value)}} value={pass} placeholder='Enter your New Password'/>
    <br/><br/>
    <button onClick={handlesubmit}>UPDATE DATA</button>
    </center>
    </div>
  )
}

export default Update