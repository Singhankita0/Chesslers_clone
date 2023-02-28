import React from "react";
import { useState, useEffect } from "react";
import { DropDownIcon, TrophyIcon } from "../icons";

const LeaderBoard = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        // console.log(response)
        setUser(result);
      });
  };
  console.log(user);

  return (
    <>
      <div className="flex-1 w-screen px-2 md:w-auto text-white pb-10">
        <div className="bg-gray-700/50 flex-1 p-4 md:p-8 rounded-lg">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">Leaderboard</h1>
            <div className="relative text-sm text-white">
              <button className="w-max cursor-pointer rounded-lg bg-gray-900 opacity-200 text-yellow-800">
                {/* <span className="flex items-center gap-2 p-2">
                  <span>Weekly</span>
                  <DropDownIcon />
                </span> */}
              </button>
            </div>
          </div>
          <hr className="border-1 border-gray-400 my-2" />
          <div className="p-2 md:p-5 mt-3 rounded-lg flex flex-col items-center gap-5">
            <div className="flex flex-col items-center gap-5 backdrop-blur-sm divide-y-2 divide-gray-400">
              {user.map((data) => {
                return (
                  <div
                    key={data}
                    className="flex flex-wrap items-center justify-between gap-2 md:gap-40 px-2 md:px-6 py-3 w-full"
                  >
                    <div className="flex w-60 md:w-max items-center justify-between md:gap-10">
                      <TrophyIcon />
                      <div className="h-10 w-10 overflow-hidden rounded-full object-contain">
                        <img
                          src="https://chesslers.com/_next/image?url=https%3A%2F%2Fopt.moovweb.net%2F%3Fquality%3D60%26img%3Dhttps%3A%2F%2Favatars.dicebear.com%2Fapi%2Fidenticon%2F54e0576f77e70be9c748fd156042df62.svg%3FdataUri%3Dtrue&w=48&q=75"
                          width="40"
                          height="40"
                        />
                      </div>
                      <a className="text-lg font-bold text-yellow-800 text-ellipsis md:w-40 overflow-hidden">
                        {data.name}
                      </a>
                    </div>
                    <p className="font-extrabold">{data.address.city}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaderBoard;
