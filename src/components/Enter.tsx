import React, { useState } from "react";
import Modal from "./Modal";

function Enter() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const updateSharedState = () => {
    setIsOpen(!isOpen);
    setIsModalOpen(!isModalOpen);
  };
  
  return (
    <div className="flex relative items-center justify-center w-full h-screen max-h-screen overflow-hidden bg-black font-[Prompt]">
      <div className="w-full h-20 bg-black absolute z-30 top-0 black-drop"></div>
      <div className="w-full h-20 bg-black absolute z-30 bottom-0 black-up"></div>
      <div className="flex flex-col relative items-center py-20 z-50 w-full h-screen -top-12">
        <h1 className="text-9xl text-white font-bold title skew-x-6 drop-shadow-xl">
          MOHO HEW
        </h1>
        <h1 className="absolute z-20 text-white font-semibold bg-yellow-500 translate-y-[-10px] translate-x-[460px] p-2 aboutus w-full max-w-44 -skew-x-6">
          <p className="text-xs">SPONSORED BY.</p>
          <div className="grid grid-cols-3 grid-rows-2 gap-3">
            <img
              src="https://itcamp20.it.kmitl.ac.th/landing/itlogo.svg"
              alt="it"
              className="w-full h-full bg-black/30 p-1 rounded-md"
            />
            <img
              src="https://itcamp20.it.kmitl.ac.th/landing/sponsors/lactasoy.svg"
              alt="lactasoy"
              className="w-full h-full bg-black/30 p-1 rounded-md"
            />
            <img
              src="https://itcamp20.it.kmitl.ac.th/landing/sponsors/borntodev.svg"
              alt="borntodev"
              className="w-full h-full bg-black/30 p-1 rounded-md"
            />
            <img
              src="https://itcamp20.it.kmitl.ac.th/landing/sponsors/swf.svg"
              alt="swf"
              className="w-full h-full bg-black/30 p-1 rounded-md"
            />
            <img
              src="https://itcamp20.it.kmitl.ac.th/landing/sponsors/usefulfood.svg"
              alt="usefulfood"
              className="w-full h-full bg-black/30 p-1 rounded-md"
            />
            <img
              src="https://itcamp20.it.kmitl.ac.th/landing/sponsors/advice.svg"
              alt="advice"
              className="w-full h-full bg-black/30 p-1 rounded-md"
            />
          </div>
        </h1>
      </div>

      <img
        src="/background.png"
        alt="bg"
        className="absolute w-full h-screen inset-0 object-cover z-20 pointer-events-none"
      />

      <button
        className="h-[20rem] w-[15rem] text-transparent absolute z-50 translate-x-[-200px]"
        onClick={() => {
          setIsModalOpen(!isModalOpen);
          setIsOpen(!isOpen);
        }}
      >
        Invisible
      </button>

      <img
        src="/door.png"
        alt="door"
        className={`absolute w-full h-screen inset-0 object-cover z-10 transition-all duration-1000 scale-[1.01] translate-x-[3px] translate-y-[6px] ${
          isOpen ? "[transform:_perspective(100px)_rotateY(-90deg)]" : ""
        }`}
      />
      <Modal isModalOpen={isModalOpen} setIsModalOpen={updateSharedState} />
    </div>
  );
}

export default Enter;
