import React, { useState, useEffect } from "react";
import merah2 from "../images/merah2.png";
import bitmap from "../images/bitmap.png";
import bulat from "../images/bulat.png";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../App.css";

import { Pagination, Navigation } from "swiper";

export default function DefinitionComponent() {
  const [testi, setTesti] = useState([]);

  useEffect(() => {
    const url =
      "https://wknd-take-home-challenge-api.herokuapp.com/testimonial";
    axios.get(`${url}`).then((res) => {
      const tampung = res.data;
      // console.table(tampung);
      setTesti(tampung);
    });
  }, []);

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
        <div className=" font-semibold text-right pt-44 px-5 w-full laptop:w-5/12 laptop:font-bold laptop:text-lg laptop:mx-auto laptop:pt-56 tablet:px-24 laptop:px-0">
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
      <div className="px-11 tablet:px-60 tablet:pt-32 laptop:px-60 laptop:pt-12">
        <img src={bulat} className=" w-24" alt="" />
      </div>

      {/* testimoni */}
      <div className=" -mt-9 pl-5 laptop:-mt-2 tablet:my-32">
        <p className="text-3xl text-white font-bold tablet:text-center laptop:text-center mobile:mb-4 laptop:mb-1">
          Testimonial
        </p>

        {/* slider for mobile */}
        <div className="flex flex-row justify-between gap-x-4 overflow-scroll pb-4 tablet:hidden laptop:hidden">
          {testi.map((data) => {
            return (
              <div key={data.id}>
                <div className=" w-56 h-40 bg-[#FFFFFF]">
                  <div className="flex flex-col justify-between p-2 h-full">
                    <div>
                      <p className=" text-xl font-bold">{data.by}</p>
                    </div>
                    <div>
                      <p>{data.testimony}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/*slider for dekstop */}
        <div className="hidden mobile:hidden tablet:block laptop:block tablet:px-24 laptop:px-56">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            slidesPerGroup={3}
            loop={false}
            loopFillGroupWithBlank={false}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
            {testi.map((items) => {
              return (
                <div key={items.id}>
                  <SwiperSlide>
                    <div className=" w-62 h-40 bg-[#FFFFFF]">
                      <div className="flex flex-col justify-between p-2 h-full">
                        <div>
                          <p className=" text-xl font-bold">{items.by}</p>
                        </div>
                        <div>
                          <p>{items.testimony}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
