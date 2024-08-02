import React from 'react'
import Layout from '../Components/Layout'
import Crousel from './../Components/Crousel';
import school from "../images/gallery/campus2.avif"

const HomePage = () => {
    return (
        <Layout>
            <div className='m-2 flex flex-col items-center '>
                <div className='w-full flex items-center'>
                    <Crousel />
                    <p className='absolute text-white text-6xl pl-10 font-bold'>A dynamic day and boarding school in the Hamptons serving Nursery through Postgraduate.</p>
                </div>
                <div className='w-full flex flex-col items-center mt-10 bg-slate-200 p-10'>
                    <p className='text-6xl font-bold border-b-8 border-red-900 p-4 '>75+ Programs. For You.</p>
                    <p className='mt-8 text-3xl text-center w-1/2'>Transform your life and career with an undergraduate or graduate degree! Both online and on-campus learning is available so you can learn on your schedule.</p>
                </div>
                <div className='w-full flex flex-col items-center mt-10'>
                    <p className='text-6xl font-bold border-b-8 border-red-900 p-4 '>Online & On-Campus</p>
                    <p className='mt-8 text-3xl text-center w-1/2'>With our flagship campus in Parkville, Missouri, and our residential campus in Gilbert, Arizona — along with over 20 locations nationwide with online and hybrid options, and over 60 online degrees — your goals are just within reach!</p>
                </div>
                <div className='lg:flex mt-10 justify-evenly bg-slate-200 p-20'>
                    <p className='text-4xl lg:w-2/4 font-medium'>Springdale Public School, endowed with a singular infrastructure of campuses, is situated in a pastoral environment deeply connected to both nature and the world's cultural and economic center, New York City. </p>
                    <p className='  lg:w-1/4 text-lg'>On the Springdale Public School campuses in East Hampton and Bridgehampton, buildings and classrooms are intentionally and systematically designed based upon research in how students learn and how our brains develop. The curriculum is woven into the design of spaces through the use of art and artifacts, which act as a visual and experiential text and are a core component of students' educational experiences at Springdale.</p>
                </div>
                <div className='w-full flex items-center '>
                    <img className='w-full h-96' src={school} alt="school" />
                    <p className='absolute text-white text-6xl pl-10 font-bold'>A dynamic day and boarding school in the Hamptons serving Nursery through Postgraduate.</p>
                </div>
            </div>
        </Layout>
    )
}

export default HomePage
