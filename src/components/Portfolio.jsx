import React from "react";
import ecommerce from "../assets/portfolio/ecommerProductPage.png";
import flappyBird from "../assets/portfolio/flappyBird.png";
import landingPageHappytails from "../assets/portfolio/landingPageHappytails.png";
import littlelemon from "../assets/portfolio/littlelemon.png";
import mouseover from "../assets/portfolio/mouseover.png";
import pokedex from "../assets/portfolio/pokedex.png";
import weatherapp from "../assets/portfolio/weatherapp.png";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "Pokedex-API",
      src: pokedex,
      text: "",
      githubLink: "https://github.com/Angel09122002/Pokedexjs",
      demoLink: "https://spectacular-liger-e9470a.netlify.app",
    },
    {
      id: 2,
      title: "Ecommerce Product Page",
      src: ecommerce,
      text: "",
      githubLink: "https://github.com/Angel09122002/Ecommerce-Project",
      demoLink: "https://ecommerce-project-angelquintero.netlify.app",
    },
    {
      id: 3,
      title: "Little lemon project",
      src: littlelemon,
      text: "",
      githubLink: "https://github.com/Angel09122002/little-lemon-capstone",
      demoLink: "https://spiffy-gecko-d72cb0.netlify.app",
    },

    {
      id: 6,
      title: "Weather App-API",
      src: weatherapp,
      text: "",
      githubLink:
        "https://github.com/Angel09122002/WeatherApp-ReactJs?tab=readme-ov-file#technologies-used-1",
      demoLink: "https://weather-app-react-js-angel-quintero.netlify.app",
    },
    {
      id: 7,
      title: "LandingPage HappytailsPetsSpa",
      src: landingPageHappytails,
      text: "",
      githubLink: "https://github.com/Angel09122002/Happytailspetsspa",
      demoLink: "https://willowy-phoenix-3480d3.netlify.app",
    },
    {
      id: 8,
      title: "Flappy Bird Game Js  ",
      src: flappyBird,
      text: "",
      githubLink: "https://github.com/Angel09122002/FlappyBird-game-JS",
      demoLink: "https://flappy-birdgame-js.netlify.app",
    },
    {
      id: 9,
      title: "MouseOver",
      src: mouseover,
      text: "",
      githubLink: "https://github.com/Angel09122002/Onmouseover-Nike-page",
      demoLink: "https://poetic-gaufre-136099.netlify.app",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-r from-violet-300 from-5% via-violet-300 to-white text-black md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline">Portfolio</p>
          <p className="py-6">Check out my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 px-12 sm:px-0">
          {portfolios.map(({ id, title, src, text, githubLink, demoLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="p-4 h-11">
                <h1 className="font-bold text-black-500">{title}</h1>
                <p className="text-lg font-bold pb-2"></p>
                <p className="text-sm ">{text}</p>
              </div>
              <div className="flex items-center justify-center">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
