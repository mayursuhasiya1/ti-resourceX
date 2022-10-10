import React from "react";

const Header = () => {
  return (
    <div>
      <div class="justify-center ">
        <div class="flex items-center justify-between h-12 text-white bg-gray-400 shadow-md sm:h-20">
          <a href="https://technoidentity.com/">
            <img class="h-14 py-2 pr-4 ml-8 sm:h-24" src="tiLogoNew.png"></img>
          </a>
          <h1 className="heading ml-4 text-lg text-black font-bold ml- sm:text-4xl mr-24">
            TI-ResourceX
          </h1>
          <div class="flex flex-col px-4">
            {/* <p class="text-2xl font-semibold uppercase">19 Oct 2021</p> */}
          </div>
        </div>
      </div>

      {/*scrolling text  */}
      <div id="scroll-container" className="bg-black mb-14">
        <p className="text-center text-lg text-white" id="scroll-text">
          Your One Stop Solution For Employee Management
        </p>
      </div>
    </div>
  );
};

export default Header;
