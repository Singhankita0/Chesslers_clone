import React from "react";

const BackSupport = () => {
  return (
    <>
      <div className="flex flex-col my-40 gap-10 items-center">
        <h2 className="text-2xl font-bold text-white">Backed By the Giants</h2>
        <p className="text-center text-lg text-white font-bold">
          They are not just the backers, but believers of what we do, and how we
          aim to change the ecosystem and become the part of the change.
        </p>
        <div className="flex flex-col md:flex-row gap-8 items-center">
        <img src="https://chesslers.com/_next/image?url=%2Fbackers%2Fmesh.png&w=256&q=75" width="180" height="100"/>
        <img src="https://chesslers.com/_next/image?url=%2Fbackers%2Ftachyon.png&w=256&q=75" width="250" height="130"/>
        <img src="https://chesslers.com/_next/image?url=%2Fbackers%2Fprotocol.png&w=256&q=75" width="250" height="130"/>
        </div>
      </div>
    </>
  );
};

export default BackSupport;
