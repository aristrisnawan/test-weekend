import React from "react";
import HeaderComponent from "./HeaderComponent";
import hitam from "../images/hitam.png";
import bulat from "../images/bulat.png";
import bitmap from "../images/bitmap.png";
import merah1 from "../images/merah1.png";
import biru from "../images/biru.png";

export default function HeroComponent() {
  return (
    <div className="w-full h-screen bg-[#EEBECE] relative laptop:h-[720px]">
      <HeaderComponent />
      <div
        className="w-full h-5/6 bg-cover relative laptop:h-full"
        style={{ backgroundImage: `url(${hitam})` }}
      >
        {/* blue for mobile */}
        <div className="hidden mobile:block tablet:block laptop:hidden">
          <div className="flex flex-col">
            <div className="w-56 h-44 bg-[#0B24FB] rounded-br-full"></div>
            <div className=" w-14 h-24 mt-10 bg-[#0B24FB] rounded-br-full rounded-tr-full"></div>
          </div>
        </div>

        {/* blue for dekstop */}
        <div className="hidden tablet:block laptop:block">
          <div className="flex flex-col">
            <div
              className=" h-full w-full bg-center absolute -top-60 bg-no-repeat -ml-40"
              style={{ backgroundImage: `url(${biru})` }}
            ></div>
            <div
              className=" w-32 h-32 mt-10 absolute bg-cover top-56 mx-96"
              style={{ backgroundImage: `url(${bulat})` }}
            ></div>
          </div>
        </div>

        <div className="text-center text-white  absolute top-32 mx-auto w-full">
          <div className="font-extrabold text-5xl laptop:text-6xl laptop:mt-9">
            <p>WEEKEND FROM HOME</p>
          </div>
          <p className="pt-3 italic laptop:font-bold laptop:text-xl">
            Stay active with a little workout.
          </p>
        </div>
        <div className="absolute -bottom-16 mx-auto w-full flex justify-center laptop:bottom-20">
          <div>
            <img src={bitmap} className="w-40  laptop:w-52" alt="" />
          </div>
        </div>
        <div className="absolute -bottom-5 mx-auto w-full flex justify-center laptop:bottom-36">
          <div>
            <button className="bg-white px-20 py-3 rounded-full laptop:px-24 font-semibold cursor-pointer">
              Let's Go
            </button>
          </div>
        </div>

        {/* dekstop */}
        <div className=" hidden laptop:block ">
          <div className="absolute w-full -bottom-16 laptop:bottom-20 flex flex-row justify-end px-40">
            <div>
              <img src={merah1} className=" w-full" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
