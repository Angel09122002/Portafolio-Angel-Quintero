import React from "react";
import ME from "../assets/Me.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-black">
            I'm a Front-end Developer
          </h2>
          <p className="text-black py-4 max-w-md">
            I'm a passionate Front-end developer. Excited to
              advance my journey as a web developer and work on exciting
              projects. Thank you for visiting my portfolio; hope to collaborate
              in the future.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-black to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={ME}
            alt="my profile"
            className="rounded-2xl mx-auto w-/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
