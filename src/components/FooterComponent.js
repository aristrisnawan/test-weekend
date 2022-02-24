import React from "react";

export default function FooterComponent() {
  return (
    <div className="px-5 flex flex-row py-5 bg-[#0B24FB] justify-between text-white laptop:px-56 tablet:px-32">
      <div className="my-auto">
        <h1>
          <span className="font-semibold">wknd</span>
          @2020
        </h1>
      </div>
      <div className=" text-xs py-1 px-3 border-2 border-white rounded-full my-auto">
        <span>alpha version 0.1</span>
      </div>
    </div>
  );
}
