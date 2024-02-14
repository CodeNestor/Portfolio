import { Button, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';

const CarousalModal = ({ open, handleClose }) => {


    return (
        <div>
            {/* <Button variant="contained" onClick={handleOpen}>Open Modal</Button> */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, width: '80vw', maxWidth: 900 }}>

                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <Carousel stopAutoPlayOnHover={true} interval={5000}>
                            <img src="https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc=" alt="image1" className='w-[100%] ' />
                            <img src="https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg" alt="image2" className='w-[100%] ' />
                            <img src="https://www.shutterstock.com/image-photo/random-pic-craneheron-village-outdoor-260nw-1742166515.jpg" alt="image3" className='w-[100%] ' />
                        </Carousel>
                    </Typography>
                    {/* <Button onClick={handleClose}>Close Modal</Button> */}
                </div>
            </Modal>
        </div>
    );
};

export default CarousalModal;