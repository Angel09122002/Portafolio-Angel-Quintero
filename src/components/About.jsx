import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-white text-black">
      <div className="max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-0">
          <p className="text-4xl font-bold inline ">About Me</p>
        </div>

        <p className="text-xl mt-12">
          Hello! My name is Angel Quintero, and I am a Computer Science student.
          I have always been passionate about technology, and that's what led me
          to start programming. I love the thrill of solving problems and seeing
          how my passion for technology can be of help to others in some way.
        </p>

        <br />

        <p className="text-xl mt-6">
          Being able to make a positive impact on people's lives through
          technology is what excites me the most. I am eager to work on
          interesting projects that challenge me and provide opportunities for
          learning and growth. I believe that every project I take on is a
          chance to expand my knowledge and skills as a developer. I am thrilled
          to embark on this journey of discovery and contribute my skills to
          create innovative and meaningful solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
