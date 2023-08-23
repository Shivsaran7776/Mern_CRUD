import React,{useState, useEffect} from 'react'
import Axios from 'axios'

function View() {

  const [userDetails, setUser] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:8070/getAllUser').then(res=>{
      console.log(res.data);
      setUser(res.data.user)
    })
  },[])
  return (
    <div className="container">
      <h1>User Details : </h1>
      {
        userDetails.map((val,key) => {
          return <div key={key}>
            <h1>Name : {val.name}</h1>
            <h1>Email : {val.email}</h1>
          </div>
        })
      }
    </div> 
  );
}

export default View;