import React from 'react'
import Slider from "react-slick";
import Image1 from "../../assets/hero/LogoGolosinas.jpg";
import Image2 from "../../assets/hero/ImgPapasPalitoss.jpg";
import Image3 from "../../assets/hero/caramelosss.jpg";
import Button from '../Shared/Button';

const HeroData = [
    {
        id: 1,
        img: Image1,
        subtitle: "Bienvendios a",
        title: "Golosinas",
        title2: "21",
    },
    {
        id: 2,
        img: Image2,
        subtitle: "Todo lo necesario para",
        title: "",
        title2: "Cumples",
    },
    {
        id: 3,
        img: Image3,
        subtitle: "Un catalogo lleno de",
        title: "",
        title2: "Golosinas",
    },
];

const Hero = () => {
    const settings ={
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    };

  return( 
  <div className="container">
    <div className="overflow-hidden rounded 4xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center"> 
        
        <div className="container pb-8 sm:pb-0">
            {/*Hero*/}
        <Slider { ... settings}>
        {
            HeroData.map((data) => (
                <div key={data.id}>
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                    {/*contendio del texto*/}
                    <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 ">
                    <h1 className="text-2xl sm:text-6xl lg:text-5xl font-bold">{data.subtitle}</h1>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">{data.title}</h1>
                    <h1 className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold">{data.title2}</h1>
                    <div>
                        <Button text="Ver Mas" bgColor="bg-primary" textColor="text-white"/>
                    </div>
                    </div>
                    {/*imagen*/}
                    <div className="order-1 sm:order-2">
                    <div>
                        <img src={data.img} alt=""
                        className="w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] sm:scale-190 lg:scale-200 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-70 "
                        />
                    </div>
                    </div>
                    
                    </div>  
                </div>
            ))
        }
        </Slider>
        </div>
    </div>
  </div>
  )
}

export default Hero