import { Ref, useEffect, useRef, useState } from "react";

const Button = ({ handleClick , color,ref}: {handleClick:() => void, color: string, ref }) => {
  return <button ref={ref} onClick={handleClick()} style={{color: color}}>click here</button>
}

const App = () => {
  // const [count, setCount] = useState(0);
  const [isToggle, setIsToggle] = useState(false);
  // let totlaClicks = 0;
  const totalClicks = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    totalClicks.current.style.color = "red";
    // handleToggle();
    console.log(totalClicks)
  }

  const handleToggle = () => {
    console.log(isToggle)
    setIsToggle(!isToggle);
  }

  // useEffect(() => {
  //   setInterval(() => {
  //     // console.log(totlaClicks);
  //     setCount(c => c + 1);
  //   }, 1000);
  // }, [])

  return <div>
    {/* <p>count: {count}</p> */}
    {/* <p>clicks: {totalClicks.current}</p> */}
    {isToggle ? <Button handleClick={() => handleClick} ref={totalClicks} color="green"/> : <Button handleClick={() => handleClick} ref={totalClicks}  color="blue"/>}
  </div>
}

export default App;