import "./App.css";
import Task41 from "./pages/hooks_tasks/Task41";
import myContext from "./context/context";
import { useState } from "react";

function App() {
  const [val, setVal] = useState("ru");

  const obj = {
    id: "1",
    name: "AAA",
    email: "AAA@gmail.com",
    pwd: "asd",
    val,
    getLang,
  };

  function getLang(e) {
    setVal(e.target.textContent);
  }

  return (
    <>
      <myContext.Provider value={obj}>
        <Task41 />
      </myContext.Provider>
    </>
  );
}

export default App;
