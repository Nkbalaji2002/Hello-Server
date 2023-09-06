import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/api/")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <>
      <div className="App">
        <h1 className="data">{data}</h1>
      </div>
    </>
  );
};

export default App;
