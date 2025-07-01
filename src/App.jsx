import axios from 'axios'
import './App.css'
import React from 'react'
function App() {
  const [data,setData] = React.useState("")
    const clicked= async()=>{
      const data = prompt("Enter you name");
      let res=await axios.get(`https://bgchange-server.onrender.com/${data}`)
      setData(res.data)
      console.log(res.data)
    }
 
  return (
    <>
    <div style={{ height:"100vh", width:"100vw", background:data }} > <button  onClick={clicked}>Clicked</button></div>
   
    </>
  )
}

export default App
