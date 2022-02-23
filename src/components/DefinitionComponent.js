import React from "react";
import merah2 from "../images/merah2.png";
import bitmap from "../images/bitmap.png";
import bulat from "../images/bulat.png";

export default function DefinitionComponent() {
  return (
    <div className="bg-[#EEBECE] h-screen w-full">
      <div>
        <div className="float-right">
          <img src={merah2} alt="" />
        </div>
        <div className="">
          <img
            src={bitmap}
            className="w-24 -rotate-90 float-right right-8 absolute"
            alt=""
          />
        </div>
      </div>

      {/* text */}
      <div className="laptop:flex laptop:flex-col">
        <div className=" font-semibold text-right pt-44 px-5 w-full laptop:w-5/12 laptop:font-bold laptop:text-lg laptop:mx-auto laptop:pt-56">
          <p>
            <span className="text-[#0B24FB]">Deffinition;</span> a practice or
            exercise to test or improve one's fitness for athletic competition,
            ability, or performance to exhaust (something, such as a mine) by
            working to devise, arrange, or achieve by resolving difficulties.
            Merriam-Webster.com Dictionary.
          </p>
          <p className="text-white mt-3"> -weekend team</p>
        </div>
      </div>

      {/* path rounded */}
      <div className="px-11 laptop:px-60 laptop:pt-16">
        <img src={bulat} className=" w-24" alt="" />
      </div>

      {/* testimoni */}
      <div className=" -mt-5 px-5">
        <p className="text-3xl text-white font-bold laptop:text-center">
          Testimonial
        </p>
        {/* <div>
          <div className="w-24 h-24 bg-blue-700 mt-2"></div>
        </div> */}
      </div>
    </div>
  );
}
