import axios from 'axios'
import {useState} from 'react'
function Login()
{
    const [data,setData] = useState(
      {
        "username":"",
        "password":""
      }
    )
    const change =(e)=>
    {
      setData({...data,[e.target.name]:e.target.value})
    }

    const click = async () => {
      try {
        const result = await axios.post("http://localhost:8080/login", data)
        console.log(result.data)
        alert("Login successful!");
      } catch (error) {
        console.error("Login failed:", error)
        alert("Login failed!");
      }
    }

    return (
      <>
      <h2>hi i am login</h2>
      <h3>my name is : {data.username}</h3>
      <h3>my password is : {data.password}</h3>
      <input value={data.username} onChange={change} name="username" placeholder='hey enter your name ' />
      <input value={data.password} onChange={change} name="password" placeholder='hey enter your password ' />
      <button onClick={click}>Login</button>
      </>

)
}
export default Login