import React, {useState} from 'react'
import './crud.css'
import Axios from 'axios'

function Delete() {
    const [mail,setEmail] = useState("");

    const handlesubmit= (e)=>{
        e.preventDefault();
        alert(mail);
        Axios.post('http://localhost:8070/deleteUser',{
            email:mail,
        }).then(res=>{
            console.log('Got the Response : ',res.data);
        }).catch((e)=>{
            console.log('Error occured in delete.js', e);
        })
    }

  return (
    <div>    
    <center>DATA DELETION FROM DATABASE
    <br/>
    <br/>
    <input onChange={(e)=>{setEmail(e.target.value)}} value={mail} placeholder='Enter your Email'/>
    <br/><br/>
    <button onClick={handlesubmit}>DELETE DATA</button>
    </center>
    </div>
  )
}

export default Delete