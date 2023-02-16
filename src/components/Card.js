import React from "react";
import { ChallengeIcon, EarnIcon, LoginBottom } from "../icons";

const Card = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-20 my-40">
        <h2 className="text-2xl font-bold text-white">How Does it Work</h2>
        <div className="flex flex-col md:flex-row gap-16 justify-around w-full">
          <div className="bg-yellow-800 bg-opacity-50 rounded-lg p-5 py-8 flex flex-col items-center w-80 gap-4 relative">
            <p className="absolute left-2 -top-10 text-6xl text-yellow-800 text-opacity-80 font-extrabold">
              1
            </p>
            <div className="flex items-center gap-2">
              <LoginBottom />
              <p className="text-3xl font-bold text-white">Login</p>
            </div>
            <p className="text-sm text-center text-white">
              With your lichess account to sync your rankings and earnings
            </p>
          </div>

          <div className="bg-yellow-800 bg-opacity-50 rounded-lg p-5 py-8 flex flex-col items-center w-80 gap-4 relative">
            <p className="absolute left-2 -top-10 text-6xl text-yellow-800 text-opacity-80 font-extrabold">
              2
            </p>
            <div className="flex items-center gap-2">
              <ChallengeIcon />
              <p className="text-3xl font-bold text-white">Challenge</p>
            </div>
            <p className="text-sm text-center text-white">
              your favourite player or friends or simply create an open
              challenge
            </p>
          </div>

          <div className="bg-yellow-800 bg-opacity-50 rounded-lg p-5 py-8 flex flex-col items-center w-80 gap-4 relative">
            <p className="absolute left-2 -top-10 text-6xl text-yellow-800 text-opacity-80 font-extrabold">
              3
            </p>
            <div className="flex items-center gap-2">
              <EarnIcon />
              <p className="text-3xl font-bold text-white">Earn</p>
            </div>
            <p className="text-sm text-center text-white">
              coins and use them for future matches
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
