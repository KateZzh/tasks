import "./App.css";
import Task5 from "./pages/hooks_tasks/useCallback/Task5";
// import Task5 from "./pages/hooks_tasks/useRef/Task5";
// import Task1 from "./pages/hooks_tasks/useContext/Task1";
// import Task4 from "./pages/hooks_tasks/useEffect/Task4"
// import myContext from "./context/context";
// import { useState } from "react";

function App() {
  // const [val, setVal] = useState("ru");

  // const obj = {
  //   id: "1",
  //   name: "AAA",
  //   email: "AAA@gmail.com",
  //   pwd: "asd",
  //   val,
  //   getLang,
  // };

  // function getLang(e) {
  //   setVal(e.target.textContent);
  // }

  return (
    <>
      {/* <myContext.Provider value={obj}>
        <Task1 />
      </myContext.Provider> */}

      <Task5 />
    </>
  );
}

export default App;
