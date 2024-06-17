
import Collections from "./Collections/Collections";
import Signup from "./Components/Signup";
import Home from "./Home/Home"
import {Routes, Route} from 'react-router-dom';



function App() {


  return (
    <>

    <div className=" dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/collection" element={<Collections/> }/>
        <Route path="/signup" element={<Signup/> }/>
      </Routes>

    </div>

     

    </>
  )
}

export default App
