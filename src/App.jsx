import { useState } from "react"



function App() {
  let time = new Date().toLocaleTimeString()

  const [dtime,setDtime] = useState(time)

  setInterval(()=>{
    let time = new Date().toLocaleTimeString()
    setDtime(time)
  })



  return (
    <>
      <h1 className="h-screen bg-lime-300 flex justify-center items-center text-7xl ">{dtime}</h1>
    </>
  )
}

export default App
