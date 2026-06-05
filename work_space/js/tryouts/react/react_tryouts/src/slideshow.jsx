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

  const SlideShow = ({ onClick, children }) => {
    return <div
      style={
        {
          height: "100vh",
          padding: "100px",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }

      }
      onClick={() => onClick()}>
      {children}
    </div>
  }

  const Slide = ({ message }) => {
    
    const { fg, bg, msg } = message;
    return <h1 style={{ color: fg, backgroundColor: bg }}>{msg}</h1>
  }

  const App = () => {
    const [isFirstSlide, setNextSlide] = useState(false);
    const onClick = () => setNextSlide(!isFirstSlide);
    let fg = "black";
    let bg = "gold";

    if (isFirstSlide) {
      fg = "gold";
      bg = "black";
    }

    const details = { fg, bg, msg: "first slide" }
    return <SlideShow onClick={onClick}>
      <Slide message={details} />
    </SlideShow>
  }

  export default App;