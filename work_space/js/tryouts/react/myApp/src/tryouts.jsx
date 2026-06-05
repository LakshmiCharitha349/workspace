import { useState } from 'react'


const Button = ({ onClick, message }) => {
  console.log("message", message);
  return <button onClick={() => onClick()}>{message}</button>
}

const Clickable = () => {
  const [count, setCounter] = useState(0);

  const message = `counter value ${count}`;
  const onClick = () => setCounter(count + 1);
  return <Button onClick={onClick} message={message} />
}

// const Toggled = () => {
//   const onClick = () => alert("toggled...");
//   return <Button onClick={onClick} message={"toggled"} />
// }

const Container = ({ children }) => {
  return <div>
    {children}
  </div>
}

const SlideShow = ({ children }) => {
  const [currSlide, setNextSlide] = useState(0);
  const onClick = () => setNextSlide(Math.min(currSlide + 1, children.length - 1));
  console.log("child", children)
  return <div
    style={
      {
        height: "100vh",
        width:"100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }

    }
    onClick={() => onClick()}>
    {children[currSlide]}
  </div>
}

const App = () => {
  return <SlideShow>
    {/* <Clickable /> */}
    {/* <Toggled /> */}
    <h1>hlo...</h1>
    <h1>hlooo...</h1>
    <h1>hlooooo...</h1>
  </SlideShow>
}

export default App;