import { useState } from "react"

const Button = () => {
// { counter, onClick }
  const [count, setCount] = useState(0);
  const onClick = () => setCount((c) => c + 1);

  return <button style={
    {
      padding: "5px 5px",
      backgroundColor: "gold",
      border: "none",
      color: "black"

    }

  } onClick={() => onClick()}> click me., {count}</button >
}

const App = () => {
  // const [count, setCount] = useState(0);
  // const onClick = () => setCount((c) => c + 1);

  return <div style={
    {
      height: "100vh",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "20px",


    }}>
    <Button counter={"count"} onClick={"onClick"} />
  </div>
}

export default App;