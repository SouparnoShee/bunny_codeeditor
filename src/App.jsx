import Intro from "./home/Intro";
import Home from "./home/home"
import { Routes, Route } from "react-router-dom";

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/code" element={<Home />} />
      </Routes>

    </>
  )
}

export default App
