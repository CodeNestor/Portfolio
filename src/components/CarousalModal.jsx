import { Button, Modal, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import ReactPlayer from 'react-player';

const CarousalModal = ({ open, handleClose, obj }) => {
console.log(obj)
    return (
        <div>
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
                                <h1 className='pl-6 pt-4 text-3xl '>{obj?.name}</h1>
                                <h1 className='text-[1.2rem] p-6'>{obj?.description}</h1>
                                {obj?.project?.map((value) => (
                                    <div>
                                        {value?.video ?
                                            ('')
                                            :
                                            (<img src={value?.src} alt="image3" className='w-[100%] ml-auto mr-auto mt-10 shadow-xl' />)
                                        }
                                    </div>

                                ))}
                            </div>
                            {obj?.project?.map((value) => {
                                return (
                                    <div>
                                        {value?.video ?
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
