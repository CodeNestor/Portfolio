import { Button, Modal, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import ReactPlayer from 'react-player';


// books ==============
import bookshome from '../assets/Projects/Books/home.png'
import booksabout from '../assets/Projects/Books/about.png'
import bookscart from '../assets/Projects/Books/cart.png'
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





const CarousalModal = ({ open, handleClose, project }) => {

    const [data, setData] = useState()

    const books = [{ src: bookshome }, { src: booksabout }, { src: bookscart }, { src: bookscontact }, { src: booksdetail }, { video: 'https://www.youtube.com/watch?v=pFDJEKFy8jA' }]

    const booksadmin = [{ src: booksdashboard }, { src: booksschool }, { src: booksorders }, { src: booksgrades }, { src: booksform }, { src: bookslogin }, { video: 'https://www.youtube.com/watch?v=pFDJEKFy8jA' }]

    const crm = [{ src: crmhome }, { src: crmabout }, { src: crmcontact }, { src: crmpricing }, { video: 'https://www.youtube.com/watch?v=pFDJEKFy8jA' }]

    const jobs = [{ src: jobshome }, { src: alljobs }, { src: resume }, { src: profile }, { src: resumeform }, { video: 'https://www.youtube.com/watch?v=pFDJEKFy8jA' }]

    const jobsadmmin = [{ src: jobsdashboard }, { src: jobsform }, { src: dashjobs }, { src: jobsplans }, { src: dashcategory }, { video: 'https://www.youtube.com/watch?v=pFDJEKFy8jA' }]

    useEffect(() => {
        if (project === 'books') {
            setData(books)
        } else if (project === 'booksadmin') {
            setData(booksadmin)
        } else if (project === 'crm') {
            setData(crm)
        } else if (project === 'jobs') {
            setData(jobs)
        } else if (project === 'jobsadmin') {
            setData(jobsadmmin)
        }
    }, [project])

    // console.log('data', data);

    // console.log('project', project);


    return (
        <div>
            {/* <Button variant="contained" onClick={handleOpen}>Open Modal</Button> */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, width: '80vw', maxWidth: 900 }} >

                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <Carousel stopAutoPlayOnHover={true} navButtonsAlwaysVisible autoPlay={false}>

                            <div className='overflow-y-auto h-screen no-scrollbar bg-white'>
                                <h1 className='pl-6 pt-4 text-3xl '>Online Books store </h1>
                                <h1 className='text-[1.2rem] p-6'>Welcome to our online book store, your one-stop destination for all your reading needs! Dive into a world of literary treasures from the comfort of your home with our extensive collection of books spanning various genres, from gripping thrillers to heartwarming romance, thought-provoking non-fiction to enchanting fantasy.
                                    Browse through our user-friendly website and discover bestsellers, classics, and hidden gems alike. With our intuitive search and filter options, finding your next captivating read is a breeze. Once you've found the perfect book, simply add it to your cart and proceed to our secure checkout.
                                    Our streamlined checkout process ensures a hassle-free shopping experience, allowing you to complete your purchase with confidence and ease. Select your preferred payment method and shipping option, and before you know it, your new book will be on its way to your doorstep.
                                    Experience the convenience of online shopping with our trusted online book store. Whether you're a passionate bibliophile or just looking for your next great read, we're here to help you embark on your literary journey. Happy reading!</h1>
                                {data?.map((value) => (
                                    <div>
                                        {value.video ?
                                            ('')
                                            :
                                            (<img src={value?.src} alt="image3" className='w-[100%] ml-auto mr-auto mt-10 shadow-xl' />)
                                        }
                                    </div>

                                ))}
                            </div>
                            {data?.map((value) => {
                                return (
                                    <div>
                                        {value.video ?
                                            (
                                                <ReactPlayer controls={true} url={value?.video} width={'90%'} className='ml-auto mr-auto' />
                                            )
                                            :
                                            ('')
                                        }
                                    </div>

                                )
                            })}

                        </Carousel>

                    </Typography>
                    {/* <Button onClick={handleClose}>Close Modal</Button> */}
                </div>
            </Modal>
        </div>
    );
};

export default CarousalModal;
