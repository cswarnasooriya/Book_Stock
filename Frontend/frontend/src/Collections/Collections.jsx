import list from "../../public/list.json";
import Navbar from '../Components/Navbar'
import Collection from '../Components/Collection'
import Footer from '../Components/Footer'

const Collections = () => {
  return (
    <>
        <Navbar/>
        <div className="min-h-screen">
            <Collection/>
        </div>
        <Footer/>
      
    </>
  )
}

export default Collections
