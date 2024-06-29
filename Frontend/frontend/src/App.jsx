
import Collections from "./Collections/Collections";
import Signup from "./Components/Signup";
import Contact from "./Contact/Contact";
import Home from "./Home/Home"
import {Routes, Route, Navigate} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";


function App() {

  
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);


  return (
    <>

    <div className=" dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/collection" element={authUser?<Collections/>:<Navigate to='/signup'/> }/>
        <Route path="/signup" element={<Signup/> }/>
        <Route path="/contact" element={<Contact/> }/>
      </Routes>
      <Toaster/>

    </div>

     

    </>
  )
}

export default App
