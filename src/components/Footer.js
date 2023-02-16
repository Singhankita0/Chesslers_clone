import React from "react";
import { DiscordIcon, InstagramIcon, TwitterIcon } from "../icons";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col gap-10 my-40 items-center">
        <h2 className="text-2xl font-bold text-white ">Connect With Us</h2>
        <div className="grid grid-cols-3 items-center gap-5 w-80 text-white">
          <a target="_blank" href="https://twitter.com/respectclub">
            <TwitterIcon />
          </a>
          <a target="_blank" href="https://instagram.com/respect.club/">
            <InstagramIcon />
          </a>
          <a target="_blank" href="https://discord.gg/rPWpu3rTeZ">
            <DiscordIcon />
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        <p className="text-gray-400">© All rights reserved Gamut Inc.</p>
      </div>
    </>
  );
};

export default Footer;
