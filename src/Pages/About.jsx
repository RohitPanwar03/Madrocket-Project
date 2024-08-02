import React from 'react'
import Layout from '../Components/Layout'
import aboutimage from "../images/about.png"
import aboutimage2 from "../images/about2.jpeg"
import aboutimage3 from "../images/about3.avif"
import library from "../images/library.jpg"
import pool from "../images/pool.jpg"
import lab from "../images/lab.webp"
import sports from "../images/sports.jpg"


const About = () => {
    return (
        <Layout>
            <div className='m-10'>
                <img className='h-96 w-full' src={aboutimage} alt="banner" />
                <h1 style={{ color: "white" }} className='absolute top-64 ml-20 text-4xl font-bold '>About</h1>
                <h1 style={{ color: "white" }} className='absolute top-80 ml-20 text-6xl font-bold'>Mission and History</h1>
            </div>
            <div className='flex mt-10 justify-center items-center'>
                <p className='m-20 text-3xl'>
                    Our mission is to <strong>change the way education meets the future;</strong> to foster interdisciplinary, integrated thinking and innovative leadership; to engage fully in the global community; and to facilitate lifelong learning.
                </p>
            </div>
            <div className='flex justify-center items-center flex-col'>
                <div className='md:flex justify-evenly w-3/4'>
                    <div className='m-10 md:w-2/4'>
                        <img className='h-80 w-full' src={aboutimage2} alt="" />
                    </div>
                    <div className='m-10 text-2xl md:w-2/4 '>
                        <p>Springdale Public School was founded in 1991 by Courtney and Steven J. Ross, who recognized that preparing students to meet the challenges of an increasingly connected and rapidly changing world requires innovative models to transform education.  </p>
                    </div>
                </div>
                <div className='p-10 w-3/4'>
                    <p className='text-2xl'>
                        Drawing on pedagogical research from leading education experts, the Ross Model incorporates a global perspective with integrated, hands-on learning and active problem-solving. Ross School is accredited by the New York State Association of Independent Schools (NYSAIS) and Middle States Association Commission on Elementary and Secondary Schools (MSA) and was awarded the first International Credential ever given by MSA. MSA has also recognized Ross as a Program of Distinction in Global Literacies.
                    </p>
                </div>
                <div className='flex flex-wrap justify-evenly m-10 gap-4'>

                    <img className='w-96' src={library} alt="" />
                    <img className='w-96' src={pool} alt="" />
                    <img className='w-96' src={lab} alt="" />
                    <img className='w-96' src={sports} alt="" />
                </div>
                <div className='p-10 w-full'>
                    <img className='w-full' src={aboutimage3} alt="" />
                </div>
            </div>

        </Layout>
    )
}

export default About
