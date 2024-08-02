import React from 'react'
import Layout from './../Components/Layout';
import school from '../images/gallery/school.avif'
import infrastructure1 from '../images/gallery/infrastructure1.avif'
import infrastructure2 from '../images/gallery/infrastructure2.avif'
import infrastructure3 from '../images/gallery/infrastructure3.avif'
import infrastructure4 from '../images/gallery/infrastructure4.avif'
import campus1 from '../images/gallery/campus1.avif'
import campus2 from '../images/gallery/campus2.avif'
import campus3 from '../images/gallery/campus3.avif'
import campus4 from '../images/gallery/campus4.avif'
import playground from '../images/gallery/playground.avif'

const Gallery = () => {
    return (
        <Layout>
            <div>
                <div className='m-10 flex items-center'>
                    <img className='w-full h-96' src={school} alt="banner" />
                    <p className='text-white absolute text-5xl font-medium '>Gallery</p>
                </div>
                <div className='mt-10 flex justify-start'>
                    <div className='m-10 w-3/4'>
                        <p className='text-4xl font-medium'>
                            The springdale School campus exudes a sense of beauty and harmony, with each space thoughtfully designed to create a captivating educational environment.
                        </p>
                    </div>
                </div>
                <div className='m-10 flex flex-col'>
                    <p className='text-4xl font-mediumn font-medium'>
                        School Infrastructure
                    </p>
                    <div className=' flex gap-6 flex-wrap mt-10 '>
                        <img className='w-96 rounded-md hover:scale-105 ' src={infrastructure1} alt="infrastructure" />
                        <img className='w-96 rounded-md hover:scale-105' src={infrastructure2} alt="infrastructure" />
                        <img className='w-96 rounded-md hover:scale-105' src={infrastructure3} alt="infrastructure" />
                        <img className='w-96 rounded-md hover:scale-105' src={infrastructure4} alt="infrastructure" />
                    </div>
                </div>
                <div className='m-10 flex flex-col'>
                    <p className=' text-4xl font-mediumn  font-medium'>
                        Campus
                    </p>
                    <div className=' flex gap-6 flex-wrap mt-10 '>
                        <img className='w-96 rounded-md hover:scale-105 h-96' src={campus1} alt="infrastructure" />
                        <img className='w-96 rounded-md hover:scale-105 h-96' src={campus2} alt="infrastructure" />
                        <img className='w-96 rounded-md hover:scale-105 h-96' src={campus3} alt="infrastructure" />
                        <img className='w-96 rounded-md hover:scale-105 h-96' src={campus4} alt="infrastructure" />
                    </div>
                </div>
                <div className='m-10 flex items-center'>
                    <img className='w-full h-96' src={playground} alt="banner" />
                    <div className='absolute overflow-hidden'>
                        <p className='text-white  text-2xl font-medium ml-2'>Athletic Facilities
                        </p>
                        <p className='text-white mt-4 text-xl font-medium ml-2'>Extending beyond the campus core, one finds four substantial athletic fields for various sporting events, such as soccer and baseball. A fully-equipped tennis center further enhances the campus, catering to students seeking professional coaching to elevate their tennis skills and participate in tournaments.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Gallery
