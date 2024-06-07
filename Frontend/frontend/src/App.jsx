
import Collections from "./Collections/Collections";
import Home from "./Home/Home"
import {Routes, Route} from 'react-router-dom';



function App() {


  return (
    <>

     <Routes>
      <Route path="/" element={<Home/> }/>
      <Route path="/collection" element={<Collections/> }/>
     </Routes>

    </>
  )
}

export default App
