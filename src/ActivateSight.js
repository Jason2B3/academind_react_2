import { useState } from "react";

function ActivateSight() {
  const [title, setTitle] = useState("");
  const clickHandler = () => {
    console.log(title);
    setTitle("UPDATED");
  };  
  return (<button onClick={clickHandler} style={{height:'50px'}}>React-sight activate!</button>)
}
export default ActivateSight;