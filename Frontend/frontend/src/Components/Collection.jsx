import {Link} from 'react-router-dom'
import list from '../../public/list.json';
import Card from './Card';
const Collection = () => {
  return (
    <>
        <div className=" max-w-screen-2xl mx-auto md:px-20 px-4  ">
            <div className=" justify-center items-center text-center ">
                <h2 className=" pt-28 text-2xl md:text-4xl font-semibold">We are Delighted To Have You <span className="text-pink-500">Here..!:)</span></h2>
                <p className='mt-12 text-justify'>
                  we are the best online free and updated book library in Sri Lanka. Any time, Any Where you can pickup your favourite book items with us and follow our all the book categories free and paid for your wishes.
                  So, we kindly invite all of you to stay tuned with us and improve your knowledge as well.
                </p>

                <Link to="/">
                  <button className="bg-pink-500 mt-6 text-white px-4 py-2 rounded-md hover:bg-pink-700 hover:text-white duration-300">
                    Back
                  </button>
                </Link>


            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
              {
                list.map((item) =>(
                  <Card key={item.id} item={item}/>
                ))
              }
            </div>

        </div>
    </>
  )
}

export default Collection
