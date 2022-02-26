import React, { useEffect, useState } from "react";
import { VscArrowSmallRight } from "react-icons/vsc";
import merah3 from "../images/merah3.png";
import merah4 from "../images/merah4.svg";
import bitmap from "../images/bitmap.png";
import axios from "axios";

export default function PovComponent() {
  return (
    <div className="w-full bg-black">
      <PopTitle />
      <ResourceTitle />
      <HelpTitle />
      <SetTitle />
      <GambarTitle />
    </div>
  );
}

export function PopTitle() {
  return (
    <div className="w-full text-white text-left pt-36 px-5 laptop:px-80 tablet:px-24 tablet:text-center laptop:text-center">
      <h1 className=" font-bold text-2xl my-6 tablet:text-4xl">POV</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis
        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
        eu fugiat nulla pariatur.
      </p>
    </div>
  );
}

export function ResourceTitle() {
  return (
    <div className="w-full text-white text-left mt-3 px-5 laptop:px-80 tablet:px-24 tablet:text-center laptop:text-center tablet:mt-14">
      <h1 className="font-bold text-2xl my-6 tablet:text-4xl">Resource</h1>
      <p>
        These cases are perfectly simple and easy to distinguish. In a free
        hour, when our power of choice is untrammelled and when nothing prevents
        our being able to do what we like best
      </p>
    </div>
  );
}

export function HelpTitle() {
  const [help, setHelp] = useState([]);
  useEffect(() => {
    const url = "https://wknd-take-home-challenge-api.herokuapp.com/help-tips";
    axios.get(`${url}`).then((res) => {
      const dataTampung = res.data;
      // console.table(dataTampung);
      setHelp(dataTampung);
    });
  }, []);
  return (
    <div className="w-full mt-3 px-5 tablet:px-24 laptop:px-56 laptop:mt-10 laptop:relative">
      <h1 className="font-bold text-2xl my-6 tablet:text-4xl text-white tablet:text-center">
        Help & Tips
      </h1>
      <div className="grid mobile:grid-cols-1 mobile:gap-y-3 tablet:grid-cols-3 laptop:grid-cols-3 tablet:gap-x-2 laptop:gap-x-2">
        {help.map((helps) => {
          return (
            <div
              key={helps.id}
              className="w-full h-44 bg-cover relative z-10"
              style={{ backgroundImage: `url(${helps.image})` }}
            >
              <div className="flex flex-row w-full justify-between p-3 bg-black/50 mt-28 absolute bottom-0">
                <div className=" w-52 text-white">
                  <span>{helps.title}</span>
                </div>
                <div className="p2 bg-white my-auto rounded-full">
                  <div className=" text-blue-600">
                    <VscArrowSmallRight size={30} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" absolute -top-7 right-32 hidden laptop:block">
        <img src={merah4} alt="" />
      </div>
    </div>
  );
}

export function SetTitle() {
  return (
    <div className="w-full text-white text-left mt-14 px-5 laptop:px-80 tablet:px-24 tablet:text-center laptop:text-center">
      <h1 className="font-bold text-2xl my-6 tablet:text-4xl">
        You’re all set.
      </h1>
      <p>
        The wise man therefore always holds in these matters to this principle
        of selection.
      </p>
    </div>
  );
}

export function GambarTitle() {
  return (
    <div>
      <div className="relative mt-32">
        <div className=" rotate-180 float-left bottom-24 absolute px-5">
          <img src={bitmap} className=" w-32" alt="" />
        </div>
        <div className=" w-48">
          <img src={merah3} alt="" />
        </div>
      </div>
    </div>
  );
}
