import React, { useState } from "react";

//function for form reset
function handleSubmit(e){
  setTimeout(() => {
    e.target.reset();
  }, 3000);
}

const Contact = () => {
  const [message, setMessage] = useState('')
  const [subject, setSubject] = useState('')
  return (
    <div
      name="contact"
      className="pt-[5%] w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        
        <div className=" flex">
          <form
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            action="https://getform.io/f/a5bbeab4-3505-457e-bcda-603c8bc15711"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-2 bg-[#1F2937] rounded-md text-white focus:border-[1px] focus:outline-gray-800"
            />
            <input
              type="text"
              name="subject"
              placeholder="Enter your Subject"
              onChange={(e) => setSubject(e.target.value)}
              required
              className="my-4 p-2 bg-[#1F2937] rounded-md text-white focus:border-[1px] focus:outline-gray-800"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              onChange={(e) => setMessage(e.target.value)}
              rows="10"
              required
              className="p-2 bg-[#1F2937] rounded-md text-white focus:border-[1px] focus:outline-gray-800"
            ></textarea>

            <a href={`mailto:${'ahmadhassa2003@gmail.com'}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(message) || ''}`} type="submit" className="text-white bg-[#1D4ED8] px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:bg-opacity-70 duration-300">
              Send Message
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
