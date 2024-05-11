import React from 'react';
import my1 from '../Assets/my.png';
// import glasses from '../Assets/glasses.png'
import styles from '../Style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faInstagram, } from '@fortawesome/free-brands-svg-icons';
import { motion, } from 'framer-motion';


const Intro = () =>
{

    return (
        <section id="home" className={` flex flex-col-reverse md:flex-row p-4 sm:p-0 `}>
            <div className={`flex-1 ${styles.flexAllStart} flex-col xl:px-4 sm:px-28 mt-16`}>
                <motion.div className='flex flex-col'
                    initial={{
                        opacity: 0,
                        y: 40,

                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.6,
                            delay: 0.5
                        }
                    }}>
                    <span className='text-red-950 text-5xl font-light mb-4'>
                        Hy! I Am
                    </span>
                    <span className='text-yellow-500 font-serif font-medium text-6xl '>
                        Khusrhid Alam
                    </span>
                    <span className='text-red-950 text-5xl font-light mt-4'>
                        Full Stack Web Devloper
                    </span>
                </motion.div>

                <div className="ml-3 mt-16">
                    <button className={`${styles.buttonDesign} px-9 py-2`}>Hire me</button>
                </div>
                <div className='mt-28 ml-3 space-x-10'>
                    <FontAwesomeIcon icon={faGithub} className='h-10 w-10 text-yellow-500 hover:scale-110 hover:cursor-pointer' />
                    <FontAwesomeIcon icon={faLinkedinIn} className='h-10 w-10 text-yellow-500 hover:scale-110 hover:cursor-pointer ' />
                    <FontAwesomeIcon icon={faInstagram} className='h-10 w-10 text-yellow-500 hover:scale-110 hover:cursor-pointer' />

                </div>
            </div>


            <div className="px-8 sm:px-20 flex justify-center items-center">

                <div className='h-[440px] w-[284px] sm:h-[550px] sm:w-[355px]'>
                    <img src={my1} alt="MyImg" className='h-full w-full object-fit' />

                </div>


            </div>
        </section>
    );
};

export default Intro;
