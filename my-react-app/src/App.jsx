// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import MyHeader from "./components/MyHeader";
import MyMainContent from "./components/MyMainContent";
import MyFooter from "./components/MyFooter";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <MyHeader />
      <MyMainContent />
      <MyFooter />
    </>
  );
}

export default App;
