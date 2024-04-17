import React from 'react';
import my1 from '../Assets/my.png';
import styles from '../Style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Intro = () =>
{
    return (
        <section id="home" className={` flex flex-col md:flex-row p-4 sm:p-0`}>
            <div className={`flex-1 ${styles.flexAllStart} flex-col xl:px-4 sm:px-28 mt-16`}>
                <div className='flex flex-col'>
                    <h1 className='text-red-950 text-5xl font-light mb-4'>
                        Hy! I Am
                    </h1>

                    <h1 className='text-yellow-500 font-serif font-medium text-6xl '>
                        Khusrhid Alam
                    </h1>

                    <h1 className='text-red-950 text-5xl font-light mt-4'>
                        Full Stack Web Devloper
                    </h1>
                </div>

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
                <div className='h-[330px] w-[213px] sm:h-[550px] sm:w-[355px]'>
                    <img src={my1} alt="MyImg" className='h-full w-full object-fit' />
                </div>

            </div>
        </section>
    );
};

export default Intro;
