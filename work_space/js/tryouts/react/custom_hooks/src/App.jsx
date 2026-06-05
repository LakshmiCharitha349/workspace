import { useEffect, useState } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setInterval(() => {
      fetch("http://localhost:8000/data.json")
        .then((d) => d.json())
        .then((data) => setData(JSON.stringify(data)))
        .catch(() => setError("error"))
        .finally(() => setIsLoading(false));
    }, 1000);

  }, [])
  console.log("data", data);
  return <div>
    <p>{isLoading ? "loading ...." : data}</p>
  </div>
}

export default App;