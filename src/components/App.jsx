import React ,{useState}from "react";

function App() {

  setInterval(realTime,1000) ;
  const now = new Date().toTimeString().slice(0,8);
   const [state,setTime] =useState(now);
   console.log(state) 
   
  // function callTime(){
  //   setTime (new Date().toLocaleTimeString().slice(0,8))
  // }
  function realTime(){
    setTime(new Date().toLocaleTimeString().slice(0,8));
  }


  return (
    <div className="container">
      <h1>{state}</h1>
      <button onClick ={realTime}>Get Time</button>
    </div>
  );
}

export default App;
