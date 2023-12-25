import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [item, setItem] = useState(0);
  useEffect(() => {
    axios
      .get("/api/item")
      .then((res) => {
        setItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);
  console.log(item);
  return (
    <>
    <h1>

    json  data
    </h1>
    {
     item && item.map((data,index)=>{
       return(
        <div key={index}>
        <p>{data.name}</p>
        </div>
       )
      })
    }
    </>
  );
}

export default App;
