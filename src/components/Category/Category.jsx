import React from 'react';
import Image1 from "../../assets/category/pepsiblack.png";
import Image2 from "../../assets/category/Fullmani.png";
import Image3 from "../../assets/category/pico.png";
import Image4 from "../../assets/category/Alfa.png";
import Button from '../Shared/Button';

const Category = () => {
  return (
    <div className="py-8">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
               {/*primera*/}
               <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end">
                <div>
                    <div className="mb-4">
                        <p className="mb-[2px] text-gray-400">Disfruta</p>
                        <p className="text-2xl font-smibold mb-[2px]">Todo tipo de</p>
                        <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Bebidas</p>
                        <Button text="Ver Mas" bgColor={"bg-white"} textColor={"text-brandBlue"}/>
                    </div>
                </div>
                <img src={Image1} alt="" className= "w-[320px] h-[240px] sm:h-[250px] absolute bottom-14 left-16" />
               </div>
               {/*segunda*/}
               <div className="py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-end">
                <div>
                    <div className="mb-4">
                        <p className="mb-[1px] text-white">Los</p>
                        <p className="text-2xl font-smibold mb-[2px]">Mejores</p>
                        <p className="text-4xl xl:text-5xl font-bold opacity-60 mb-2">Chocolates</p>
                        <Button text="Ver Mas" bgColor={"bg-white"} textColor={"text-brandYellow"}/>
                    </div>
                </div>
                <img src={Image2} alt="" className= "w-[320px] h-[240px] sm:h-[250px] absolute left-16 top-[12px] " />
               </div>
               {/*tercera*/}
               <div>
               <div className="col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end">
                <div>
                    <div className="mb-4">
                        <p className="text-white">Un Mundo</p>
                        <p className="text-2xl font-smibold">de</p>
                        <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-1">Caramelos</p>
                        <Button text="Ver Mas" bgColor={"bg-white"} textColor={"text-primary"}/>
                    </div>
                </div>
                <img src={Image3} alt="" className= "w-[230px] absolute -translate-y-20 -right-4 -bottom-0" />
               </div>
               </div>
               {/*cuarta*/}
               <div>
               <div className="col-span-2 py-10 pl-5 bg-gradient-to-br from-brandRed to-brandRed/90 text-white rounded-3xl relative h-[320px] flex items-end">
                <div>
                    <div className="mb-4">
                        <p className="mb-0 text-white">Los mas</p>
                        <p className="text-2xl font-smibold">Ricos</p>
                        <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-1">Alfajores</p>
                        <Button text="Ver Mas" bgColor={"bg-white"} textColor={"text-brandRed"}/>
                    </div>
                </div>
                <img src={Image4} alt="Portezuelo de Chocolate" className= "w-[200px] absolute -translate-y-20 -right-4 -bottom-0" />
               </div>
               </div>

            
            </div>
        </div>
    </div>
  )
}

export default Category