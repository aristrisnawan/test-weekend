import React from "react";
import HeaderComponent from "./HeaderComponent";
import hitam from "../images/hitam.png";
import bulat from "../images/bulat.png";
import bitmap from "../images/bitmap.png";

export default function HeroComponent() {
  return (
    <div className="w-full h-screen bg-[#EEBECE] relative">
      <HeaderComponent />
      <div
        className="w-full h-5/6 bg-cover relative"
        style={{ backgroundImage: `url(${hitam})` }}
      >
        <div className="flex flex-col">
          <div className="w-56 h-44 bg-[#0B24FB] rounded-br-full"></div>
          <div className=" w-14 h-24 mt-10 bg-[#0B24FB] rounded-br-full rounded-tr-full"></div>
        </div>
        <div className="text-center text-white  absolute top-32 mx-auto w-full">
          <div className="font-extrabold text-5xl">
            <p>WEEKEND</p>
            <p>FROM HOME</p>
          </div>
          <p className="pt-3 italic">Stay active with a little workout</p>
        </div>
        {/* <div className="absolute bottom-0 mx-auto">
          <img src={bitmap} className="w-40" alt="" />
          <button className="bg-white px-12 py-3 rounded-full absolute -bottom-14 mx-auto">
            Let's Go
          </button>
        </div> */}
        <div className="absolute -bottom-16 mx-auto w-full">
          <div>
            <img src={bitmap} className="w-40" alt="" />
          </div>
        </div>
        <div className="absolute -bottom-5 mx-auto w-full">
          <div>
            <button className="bg-white px-16 py-3 rounded-full">
              Let's Go
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
