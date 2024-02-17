import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white max-md:pt-[5%] "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
        Experienced Frontend Developer with a 1.5 year of hands-on
        expertise in HTML,CSS, and JavaScript, specializing in responsive
        design for seamless user interactions. Adept at leveraging React.js,
        Next.js, and Tailwind CSS to create visually striking and userfriendly
        web applications. Proven track record of translating design concepts
        into pixel-perfect, responsive interfaces, and enhancing user
        engagement. Ready to bring my skills and passion for innovative
        frontend development to your team
        {/* I am a web developer, working as a frontend developer. Excited for improving my skills and learning new technologies. I'm open to learn and work with any web technology. */}
        </p>

        <br />

        <p className="text-xl">
        I like to code matters from scratch and love the idea of bringing thoughts to life. Connect with me to get your project done. <br /> <br />
        I enjoy creating or redesigning a distinct identity for a product or service, get more traffic from search engine and social platforms.
        </p>
      </div>
    </div>
  );
};

export default About;
