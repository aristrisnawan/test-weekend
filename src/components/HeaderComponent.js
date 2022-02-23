import React from "react";
import avatar from "../images/avatar.png";

export default function HeaderComponent() {
  return (
    <div>
      <div className="flex flex-row bg-white py-5 px-5 absolute z-20 w-full laptop:px-56">
        <div className="h-10 w-10 bg-blue-200 mr-2 rounded my-auto">
          <img src={avatar} alt="" />
        </div>
        <div className="text-black">
          <p>Good Morning</p>
          <p className=" font-medium">Fellas</p>
        </div>
      </div>
    </div>
  );
}
