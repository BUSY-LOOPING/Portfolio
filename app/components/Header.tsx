import React from "react";

const header = () => {
  return (
    <header className="w-full pt-[1.5rem] px-[2.5rem] flex flex-row justify-between text-[1rem]">
      <a href="/" className="inline-block">
        <div className="flex flex-row text-nowrap bg-black text-white gap-1.5 py-[8px] px-[12px] rounded-[3px] ">
          <span>DHRUV</span>
          <img src="/icons/kokeshi_cross.svg" alt="kokeshi cross" />
          <span>YADAV</span>
        </div>
      </a>

      <nav className="">
        <ul className="flex flex-row gap-1.5">
          <li className="nav-item bounce-radius-hover"><a href="#">INTRO</a></li>
          <li className="nav-item bounce-radius-hover"><a href="#">PROJECTS</a></li>
          <li className="nav-item bounce-radius-hover"><a href="#">VALUES</a></li>
          <li className="nav-item bounce-radius-hover"><a href="#">BACKGROUND</a></li>
        </ul>
      </nav>

      <a href="/" className="nav-item">RESUME</a>
    </header>
  );
};

export default header;
