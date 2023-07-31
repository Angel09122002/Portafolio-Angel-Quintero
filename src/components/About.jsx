import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-white text-black"
    >
      <div className="max-w-screen-lg p-3 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline ">
            About Me
          </p>
        </div>

        <p className="text-xl mt-20">
           I am Ángel Quintero, a passionate Computer Science student with a deep fascination for the world of technology. Since my first encounter with programming, I knew I had discovered my true passion.
        </p>

        <br />

        <p className="text-xl">
          The ability of technology to solve problems and improve the quality of life is what motivates me each day to explore and learn more. Every line of code I write is like a puzzle coming together to create useful and creative solutions. I aspire to work on interesting projects and collaborate with talented individuals, which fuels my desire to continue growing as a technology professional.
        </p>
      </div>
    </div>
  );
};

export default About;
