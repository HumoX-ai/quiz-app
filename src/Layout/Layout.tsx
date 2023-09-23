import { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "@material-tailwind/react";
import {
  FiMenu,
  FiShoppingCart,
  FiUsers,
  FiLayers,
  FiTrello,
} from "react-icons/fi";
import { Hero } from "../components/Hero/Hero";
import Fade from "react-reveal/Fade";
export const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="w-screen h-[90vh] bg-cover"
      style={{ backgroundImage: 'url("/bg.png")' }}
    >
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="" />
            <h1 className="text-white font-bold text-xl  lg:text-2xl">
              Quiz APP
            </h1>
          </div>
          <Fade top cascade>
            <ul className="items-center gap-8 text-white hidden lg:flex">
              <li>Products</li>
              <li>Developers</li>
              <li>Company</li>
              <li>Pricing</li>
            </ul>
          </Fade>
          <div className="hidden lg:flex">
            <Link to="/login">
              <Button className="bg-[#FFBC51] text-white py-3 px-10 rounded-[96px]">
                Kirish
              </Button>
            </Link>
         
          </div>
          <div className="text-white flex lg:hidden text-2xl">
            <FiMenu onClick={() => setIsOpen(!isOpen)} />
          </div>
        </div>
        <Hero />
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={() => setIsOpen(!isOpen)}
        />
      )}

      <div
        className={`fixed left-0 top-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.svg" alt="" className="bg-blue-gray-700" />
            <h1 className="text-blue-gray-700 font-bold text-xl  lg:text-2xl">
              Quiz APP
            </h1>
          </div>
          <ul className=" gap-4 text-blue-gray-700 flex flex-col">
            {listItem.map((item, index) => (
              <li
                key={index}
                className=" rounded-md p-2 flex items-center gap-2 font-semibold cursor-pointer hover:bg-blue-gray-200 hover:text-white transition-all duration-300 text-lg"
              >
                {item.icon}
                {item.title}
              </li>
            ))}
          </ul>
          <Link to="/login">
            <Button className="bg-[#FFBC51] text-white py-3 px-10 rounded-[96px] w-full mt-10">
              Kirish
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const listItem = [
  {
    title: "Products",
    icon: <FiShoppingCart />,
  },
  {
    title: "Developers",
    icon: <FiUsers />,
  },
  {
    title: "Company",
    icon: <FiLayers />,
  },
  {
    title: "Pricing",
    icon: <FiTrello />,
  },
];
