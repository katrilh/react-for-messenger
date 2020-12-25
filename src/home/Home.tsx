import { useState, useEffect } from "react";

const getData = (path = "dummydata") => require(`./${path}.json`);
const Home = () => {
  const [numb, setNumb] = useState(0);

  const [data, setData] = useState(undefined);
  useEffect(() => {
    if (!data) {
      setData(getData());
    }
  }, []);

  return (
    <div>
      <h1>Main content</h1>
      <p>Counter: {numb}</p>
      <button onClick={() => setNumb(numb + 1)}>click me</button>
      {console.log("data", data)}
    </div>
  );
};

export default Home;
