import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Freebook = () => {
const filterData = list.filter((data)=>data.category==="Free");
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
console.log(filterData);
  return (
    <div>
    <>
        <div className=" container mx-auto md:px-20 px-4">
            <h1 className="font-semibold pb-2 text-xl">Free Offers Today!</h1>
            <p>Now you can start your browsing and find knowledge with us Free books and materials in here. Get best from them.</p>
        </div>

        <div>
            <Slider {...settings}>
            <div>
            <h3>1</h3>
            </div>
            <div>
            <h3>2</h3>
            </div>
            <div>
            <h3>3</h3>
            </div>
            <div>
            <h3>4</h3>
            </div>
            <div>
            <h3>5</h3>
            </div>
            <div>
            <h3>6</h3>
            </div>
            <div>
            <h3>7</h3>
            </div>
            <div>
            <h3>8</h3>
            </div>
        </Slider>
        </div>
    </>
      
    </div>
  )
}

export default Freebook
