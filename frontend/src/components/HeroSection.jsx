import React from "react";
import HeroBg from '../img/hero_bg.png'

const HeroSection = () => {
    return (
        <section
            className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full sm:m12"
            id="home"
        >
            <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6 mt-24 p-8">


                <p className="text-[2.5rem] text-center md:text-left lg:text-[3.5rem] font-bold tracking-wide text-headingColor md:w-[85%] md:leading-tight">
                    <span className="text-lightPrimary text-[3rem] lg:text-[4rem]">JobSet</span> hain to life set hain
                </p>


                <p className="text-lightModeTextColor text-center md:text-justify md:w-[85%] flex-wrap">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                    a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially...
                </p>


            </div>
            <div className="py-2 flex-1 flex items-center relative">
                <img
                    src={HeroBg}
                    className=" ml-auto h-420 w-full lg:w-auto lg:h-650"
                    alt="hero-bg"
                />
            </div>


        
        </section>

    );
};

export default HeroSection;