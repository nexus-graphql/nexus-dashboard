import React from "react";

export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="absolute justify-center top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <a
            className="text-indigo text-lg uppercase hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
            Deployment
          </a>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
