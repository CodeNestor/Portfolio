import React, { useState } from "react";
import CarousalModal from "./CarousalModal";
import jobsadmin from "../assets/Projects/Jobs/adminthumbnail.jpeg";
import jobwebthumbnail from "../assets/Projects/Jobs/jobswebthumbnail.jpg";
import crmthumb from "../assets/Projects/CRM_Audit_Times/CRM_Thumb.png";
import booksthumb from "../assets/Projects/Books/booksthumb.jpg";
import adminthumb from "../assets/Projects/Books/Book_Dashboard_Thumb.png";

// books ==============
import bookshome from '../assets/Projects/Books/home.png'
import bookssearch from '../assets/Projects/Books/searchbooks.png'
import booksabout from '../assets/Projects/Books/about.png'
import bookscart from '../assets/Projects/Books/cart.png'
import bookscheckout from '../assets/Projects/Books/bookscheckout.png'
import bookscontact from '../assets/Projects/Books/contact.png'
import booksdetail from '../assets/Projects/Books/detail.png'

// books admin ========

import booksdashboard from '../assets/Projects/Books/dashboard.png'
import booksschool from '../assets/Projects/Books/school.png'
import booksorders from '../assets/Projects/Books/orders.png'
import booksgrades from '../assets/Projects/Books/grades.png'
import bookslogin from '../assets/Projects/Books/login.png'
import booksform from '../assets/Projects/Books/form.png'

// crm ==============

import crmhome from '../assets/Projects/CRM_Audit_Times/home.png'
import crmabout from '../assets/Projects/CRM_Audit_Times/about.png'
import crmcontact from '../assets/Projects/CRM_Audit_Times/contact.png'
import crmpricing from '../assets/Projects/CRM_Audit_Times/pricing.png'

// jobs web =============

import jobshome from '../assets/Projects/Jobs/webhome.png'
import alljobs from '../assets/Projects/Jobs/jobs.png'
import resume from '../assets/Projects/Jobs/resume.png'
import resumeform from '../assets/Projects/Jobs/resumeform.png'
import profile from '../assets/Projects/Jobs/profile.png'


// jobs admin =============

import jobsplans from '../assets/Projects/Jobs/plans.png'
import jobsdashboard from '../assets/Projects/Jobs/dashboard.png'
import jobsform from '../assets/Projects/Jobs/jobsform.png'
import dashjobs from '../assets/Projects/Jobs/dashjobs.png'
import dashcategory from '../assets/Projects/Jobs/dashcategory.png'

const Portfolio = () => {

  const data = [
    { id: 1, name: 'Customer Relationship Management (CRM)', description: 'Pioneered the development of a dynamic CRM system tailored for ERP sales, streamlining lead management, enhancing customer interactions, and optimizing the sales lifecycle for a substantial boost in revenue streams.', thumbnail: crmthumb, project: [{ src: crmhome }, { src: crmabout }, { src: crmcontact }, { src: crmpricing }, { video: 'https://www.youtube.com/watch?v=pFDJEKFy8jA' }]},
    { id: 2, name: 'Jobs Website', description: 'I spearheaded a comprehensive job application platform for an Australian client, utilizing React.js for the website. Successfully delivered a unified, user-centricsolution that enhances recruitment processes and user engagement.', thumbnail: jobwebthumbnail, project: [{ src: jobshome }, { src: alljobs }, { src: resume }, { src: profile }, { src: resumeform }, { video: 'https://www.youtube.com/watch?v=pFDJEKFy8jA' }]},
    { id: 3, name: 'Jobs Panel', description: 'I led the development of a React.js-powered job application platform for an Australian client, creating Admin and Provider Panels. Delivered a unified, user-centric solution optimizing recruitment processes and enhancing user engagement.', thumbnail: jobsadmin, project: [{ src: jobsdashboard }, { src: jobsform }, { src: dashjobs }, { src: jobsplans }, { src: dashcategory }, { video: 'https://www.youtube.com/watch?v=pFDJEKFy8jA' }] },
    { id: 4, name: 'Books Website', description: 'Built a book website for a local Pakistani client using Next.js, leveraging React.js for the book panel. Incorporated Redux Toolkit to ensure efficient data management and updates, enhancing the overall user experience.', thumbnail: booksthumb, project: [{ src: bookshome }, { src: bookssearch } , { src: booksdetail }, { src: booksabout },  { src: bookscontact }, { src: bookscart },  { src: bookscheckout }, { video: 'https://www.youtube.com/watch?v=pFDJEKFy8jA' }] },
    { id: 5, name: 'Books Panel', description: 'Constructed a book panel for a local Pakistani client, utilizing React.js. Integrated Redux Toolkit for streamlined data management and updates, contributing to an efficient and user-friendly book management system.', thumbnail: adminthumb, project: [{ src: booksdashboard }, { src: booksschool }, { src: booksorders }, { src: booksgrades }, { src: booksform }, { src: bookslogin }, { video: 'https://www.youtube.com/watch?v=pFDJEKFy8jA' }] },
  ]

  const [open, setOpen] = useState(false);
  const [ obj, setObj] = useState("")

  const toggleOpen = () => setOpen(!open)

  const handClick = (val ) => {
    console.log(val);
    setOpen(true)
    setObj(val)
  }

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white pt-[5%]"
    >
      <CarousalModal open={open} handleClose={toggleOpen} obj={obj} />
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center" >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Portfolio
          </p>
          <p className="py-6 max-md:text-[.9rem]">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {data.map((value) => (
            <div onClick={() => handClick(value)} key={value?.id} className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105 cursor-pointer">
              <img
                src={value?.thumbnail}
                alt="projects"
                className="rounded-lg "

              />
              <div className="p-6 text-[.9rem]">
                <h1 className="font-[600] text-[1.2rem]">{value?.name}</h1>
                <h1 className="mt-4">{value?.description?.slice(0, 100) + '...'}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
