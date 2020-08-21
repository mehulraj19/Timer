import React from "react";

function App() {
  let now = new Date().toLocaleTimeString();
  const [time, setTime] = React.useState(now);
  setInterval(getTime, 1000);

  function getTime() {
    let newTime = new Date().toLocaleTimeString("it-IT");
    // console.log(newTime);

    setTime(newTime);
  }
  return (
    <div>
      <h1>{time} </h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}
export default App;
