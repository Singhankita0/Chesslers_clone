import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="mt-40">
        <div className="flex-1 md:w-auto w-screen text-white px-5 md:px-20 xl:px-40 py-10">
          <div className="text-white p-10 md:px-40 flex flex-col-reverse md:flex-row justify-between w-full gap-20">
            <div className="flex flex-col justify-center flex-1">
              <h1 className="text-3xl md:text-6xl font-extrabold text-white">
                Play Chess
              </h1>
              <br />
              <h2 className="text-3xl md:text-6xl font-extrabold text-white">
                Get Paid
              </h2>
              <div className="my-8">
                <p>Join now to get $5 and get <br/> started</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

{
  /* <div className="container mt-48 flex justify-center items-center">
        <div className="left flex flex-col flex-1 justify-center">
          <h1 className="text-3xl md:text-6-xl text-white font-extrabold ml-36">
            Play Chess
          </h1>
          <h2 className="text-3xl md:text-6-xl text-white font-extrabold ml-36 mt-2">
            Get Paid
          </h2>
          <div className="my-8">
            <p className="text-white ml-36">
              Join now to get $5 and get started
            </p>
          </div>
        </div>

        <div className="right"></div>
      </div> */
}
