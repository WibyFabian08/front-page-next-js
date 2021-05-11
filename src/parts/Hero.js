import React, { useState } from "react";

function Hero() {
  const [email, setEmail] = useState('');

  function submit() {
    window.open(`http://localhost:3000/${email}`)
  }

  return (
    <div className="flex justify-between items-center">
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl md:text-5xl text-white mb-2 md:mb-5">
          <span className="text-green-400 mb-4">The New </span>Way to
        </h1>
        <h1 className="text-2xl md:text-5xl text-white mb-5 ">
          Achive Good <span className="text-green-400">Skills</span>
        </h1>
        <p className="text-white text-lg mb-8">
          We provide tons of pathskill that <br className="" />{" "}
          you can choose and focus on
        </p>
        <form onSubmit={submit} className="flex">
          <input
            className="bg-white px-4 py-3 w-full md:w-1/2 focus:outline-none border lg:border-0 md:border-blue-700"
            type="text"
            placeholder="Your Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="text-white button-form px-4">Daftar Now</button>
        </form>
      </div>
      <div className="w-1/2 hidden md:block">
        <div className="relative" style={{ height: 440, width: 369 }}>
          <div
            className="border absolute border-gray-400 -right-60 mb-5"
            style={{ height: 350, width: 300 }}
          ></div>
          <div className="absolute mt-16 right-0 -mr-32">
            <img
              style={{ height: 350, width: 300 }}
              src="../../images/poto-mbak-anisa.png"
              alt=""
            />
          </div>
          <div
            className="absolute bg-white mt-32 py-4 px-4"
            style={{ height: 113, width: 290 }}
          >
            <p className="font-regular mb-4" style={{ color: "#132B50" }}>
              Metode belajar yang santai seperti nonton drakor di Netflix
            </p>
            <p className="text-gray-400 text-sm">Alyssa, Apps Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
