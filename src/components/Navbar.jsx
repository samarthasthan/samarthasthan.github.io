import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md"
export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const navbarToggle=()=>{
    setToggle(!toggle)
  }

  return (
    <div className="bg-[#1A0B2E] z-10 p-4 sticky top-0">
      <div className="max-w-[1240px] font-Preahvihear sticky items-center py-2  mx-auto text-white flex justify-between">
        <div className=" text-2xl ">Samarth</div>
        {
          toggle ? <MdClose onClick={navbarToggle} className="block  md:hidden text-2xl " /> : <HiMenu onClick={ navbarToggle} className="block  md:hidden text-2xl " />

        }
        <ul className="hidden  md:flex gap-28">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {/* Responsive navbar*/}
        <ul className={`z-[200] duration-300 block  md:hidden fixed bg-[#1A0B2E] w-full top-[80px]  px-5 h-screen ${toggle?"left-[-0%]":"left-[-100%]"}`}>
          <li className="py-5">Home</li>
          <li className="py-5">About</li>
          <li className="py-5">Contact</li>
        </ul>
      </div>

    </div>
  );
}
