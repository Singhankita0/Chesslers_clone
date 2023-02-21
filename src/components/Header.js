import React from "react";
import { LoginIcon } from "../icons";
import LeaderBoard from "./LeaderBoard";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center flex-col lg:flex-row lg:px-20 gap-5 z-10 w-full text-white lg:py-4 ">
        <div className="flex justify-between items-center flex-row w-full md:justify-around">
          <div className="flex justify-between items-center flex-col w-auto px-5 gap-5">
            <a
              className="text-xl lg:text-3xl font-bold z-10 block text-orange-500"
              href=""
            >
              Chesslers
            </a>
          </div>
        </div>
        <div className="flex justify-around lg:w-auto w-full py-4 lg:py-0 space-x-14 items-center text-sm lg:text-lg px-2">
          <div className="md:w-60">
            <div className="bg-gray-800">
              <input
                type="text"
                className="text-sm rounded-lg  block pl-10 p-1 w-full bg-gray-600 outline-none placeholder-gray-400 text-white "
                placeholder="Search"
              />
            </div>
          </div>
          <div className="flex gap-5">
            <Link
              to="/leaderboard"
              className="font-semibold hover:text-orange-500 hover:underline underline-offset-4 duration-500 ease-in"
            >
              Leaderboard
            </Link>
            <div className="rounded-lg text-sm w-32 px-3 font-bold bg-yellow-400">
              <a
                className="flex items-center justify-center w-full h-full"
                href=""
              >
                <p className="text-black">Login with</p>
                <LoginIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

{
  /* <header>
      <nav className="max-w-[900px] flex justify-between items-center mx-auto ">
        <div className="text-4xl font-bold mt-12">
          <a className="text-orange-500" href="#">Chesslers</a>
        </div>
        <div className="flex space-x-6 mt-12">
          <div className="bg-gray-800">
            <input type="text" className="text-sm rounded-lg  block pl-10 p-1 w-full outline-none text-white" placeholder="Search"/>
          </div>
          <div className="flex gap-5 ">
            <a className="text-white font-bold hover:text-orange-500 hover:underline underline-offset-4 duration-500 ease-in"  href="#">Leaderboard</a>
            </div>
          <div className="bg-orange-500 rounded-lg w-32 px-3 ">
            <a className="font-bold text-lg text-black " href="#"><p>Login with</p></a>
          </div>
        </div>
      </nav>
    </header> */
}
