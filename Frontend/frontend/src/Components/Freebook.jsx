import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

import Slider from "react-slick";
import Card from "./Card";
import { useEffect, useState } from "react";

const Freebook = () => {
  

  const [book,setBook] = useState([]);

    useEffect(()=> {
      const getBook =  async() =>{
        try{
          const res = await axios.get("http://localhost:4001/book");
          
          const data = res.data.filter((data)=>data.category==="Free");
          console.log(res.data);
          setBook(data);

        }catch (error){
          console.log(error);

        }

  };
  getBook();
}, []);


var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
    
        <div className=" container mx-auto md:px-20 px-4">
            <h1 className="font-bold pb-2 text-2xl">Free Offers Today!</h1>
            <p className="text-md">Now you can start your browsing and find knowledge with us Free books and materials in here. Get best from them.</p>
        

            <div className="mb-10">
                <Slider {...settings}>
                    {book.map((item)=>(
                        <Card item={item} key={item.id} />
                    ))}
                </Slider>
            </div>
   
      
        </div>
     </>   
  )
}

export default Freebook
