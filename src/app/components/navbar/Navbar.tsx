import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div
          className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
          style={{ background: "none" }}
        >
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
            style={{ background: "none" }}
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              style={{ background: "none" }}
              alt="Flowbite Logo"
            />
            <span
              className="self-center text-2xl font-semibold whitespace-nowrap text-white"
              style={{ background: "none", fontFamily: "Poppins" }}
            >
              Solp
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-default"
            style={{ background: "none" }}
          >
            <ul
              className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:border-gray-700"
              style={{ background: "none" }}
            >
              <li style={{ background: "none" }}>
                <a
                  style={{ background: "none", fontFamily: "Poppins" }}
                  href="#"
                  className="block py-2 px-3  rounded md:p-0 text-white"
                >
                  About
                </a>
              </li>
              <li style={{ background: "none" }}>
                <a
                  style={{ background: "none", fontFamily: "Poppins" }}
                  href="#"
                  className="block py-2 px-3  rounded md:p-0 text-white"
                >
                  Pricing
                </a>
              </li>

              <li style={{ background: "none" }} className="mb-4">
                <a
                  style={{ background: "none" }}
                  href="#"
                  className="block mb-4 px-3  rounded md:p-0 text-white"
                >
                  <img
                    style={{ background: "none" }}
                    src="https://cdn-icons-png.flaticon.com/128/4333/4333609.png"
                    height={30}
                    width={30}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
