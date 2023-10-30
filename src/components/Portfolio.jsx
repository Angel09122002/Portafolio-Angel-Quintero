import React from "react";
import mouseover from "../assets/portfolio/mouseover.png";
import pokedex from "../assets/portfolio/pokedex.png";
import littlelemon from "../assets/portfolio/littlelemon.png";
import slidervideo from "../assets/portfolio/slidervideo.png";
import landingPageHappytails from "../assets/portfolio/landingPageHappytails.png";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: landingPageHappytails,
      text: "LandingPage for Happytails Pets Spa Mobile Dog Groomin",
      githubLink: "https://github.com/Angel09122002/Happytailspetsspa",
      demoLink: "https://willowy-phoenix-3480d3.netlify.app",
    },
    {
      id: 2,
      src: littlelemon,
      text: "Little lemon project",
      githubLink: "https://github.com/Angel09122002/little-lemon-capstone",
      demoLink: "https://spiffy-gecko-d72cb0.netlify.app",
    },
    {
      id: 3,
      src: pokedex,
      text: "Pokedex",
      githubLink: "https://github.com/Angel09122002/Pokedexjs",
      demoLink: "https://spectacular-liger-e9470a.netlify.app",
    },

    {
      id: 4,
      src: slidervideo,
      text: "SliderVideo Effect",
      githubLink: "https://github.com/Angel09122002/SliderVideo",
      demoLink: "https://rainbow-kleicha-34c84f.netlify.app",
    },
    {
      id: 5,
      src: mouseover,
      text: "MouseOver",
      githubLink: "https://github.com/Angel09122002/Onmouseover-Nike-page",
      demoLink: "https://poetic-gaufre-136099.netlify.app",
    },
  ];

  return (
    <div name="portfolio" className="bg- w-full text-black md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline">Portfolio</p>
          <p className="py-6">Check out my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, text, githubLink, demoLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="p-4">
                <p className="text-lg font-bold pb-2">Project {id}</p>
                <p className="text-sm">{text}</p>
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
