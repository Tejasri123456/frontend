import axios from 'axios'
import {useState} from 'react'
function Register() {
   const [data,setData] = useState(
      {
        "username":"",
        "email": "",
        "password":""
      }
    )
    const change =(e)=>
    {
      setData({...data,[e.target.name]:e.target.value})
    }

    const click = async () => {
      try {
        const result = await axios.post("http://localhost:8080/register", data)
        console.log(result.data)
        alert("Registration successful!");
      } catch (error) {
        console.error("Registration failed:", error)
        alert("Registration failed!");
      }
    }

    return (
      <>
      <h2>hi i am register</h2>
      <h3>my name is : {data.username}</h3>
      <h3>my email is : {data.email}</h3>
      <h3>my password is : {data.password}</h3>
      <input value={data.username} onChange={change} name="username" placeholder='hey enter your name ' />
      <input value={data.email} onChange={change} name="email" placeholder='hey enter your email ' />
      <input value={data.password} onChange={change} name="password" placeholder='hey enter your password ' />
      <button onClick={click}>Register</button>
      </>

)
}
export default Register