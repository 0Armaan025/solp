import React from "react";
import "./middlepart.css";
import Button from "@mui/material/Button";

const MiddlePart = () => {
  return (
    <>
      <div className="middlePart">
        <div className="boxes flex flex-row justify-center items-center">
          <div className="leftBox flex flex-col justify-center items-center bg-none">
            <center style={{ background: "none" }}>
              <h2
                style={{ background: "none", fontFamily: "Poppins" }}
                className="text-4xl text-white font-bold hover:text-5xl transition-all hover:cursor-pointer hover:text-[#dddbdb]"
              >
                Solp
              </h2>
              <h4 className="w-96 bg-none font-poppins mt-4 text-gray-200 font-light">
                Lorem duis adipisicing officia sit elit veniam voluptate non
                excepteur tempor adipisicing eiusmod. Voluptate deserunt
                adipisicing veniam dolore culpa velit in non ullamco minim duis
                veniam laborum. Aliqua cillum aliqua pariatur ea nostrud duis
                amet cillum consequat sint. Eu quis enim enim dolore sint.
                Exercitation adipisicing ex laboris exercitation esse est labore
                laboris duis laborum anim magna minim esse. Labore aliqua
                excepteur Lorem commodo dolore ad pariatur eiusmod. Sunt ex
                laborum mollit et eiusmod aute laboris sunt.
              </h4>
            </center>
          </div>
          <div className="rightBox flex flex-col justify-center items-center bg-none mt-8">
            <center className="bg-none">
              <img
                src="https://plus.unsplash.com/premium_photo-1676422355165-d809008b8342?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3N8ZW58MHx8MHx8fDA%3D"
                style={{ width: "80%", borderRadius: "6px" }}
                className="bg-none rounded-6xl hover:scale-105 transition-all cursor-pointer "
              />
            </center>
          </div>
        </div>
        <br />
        <div className="someRandomTextBox w-[100%]   ">
          <center className="bg-none">
            <h4 className="bg-none p-8 text-4xl text-white font-black">
              LET'S MAKE YOUR READING AND WRITING HABIT BETTER!
            </h4>
            <br style={{ background: "none" }} />
            <button
              className="mb-4 py-4 px-6 hover:cursor-pointer font-black text-xl text-white bg-[#102228] hover:bg-[#071215] transition-all rounded-lg"
              style={{ borderRadius: "4px" }}
            >
              GET STARTED!
            </button>
          </center>
        </div>
        <br />
        <div className="pricingPart"></div>
      </div>
    </>
  );
};

export default MiddlePart;
