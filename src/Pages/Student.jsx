import React from 'react'
import Layout from './../Components/Layout';
import academic1 from "../images/Academics/academics1.avif"
import sports from "../images/students/sports.avif"
import music from "../images/students/music.avif"
import coding from "../images/students/coding.avif"
import science from "../images/students/science.avif"
import environment from "../images/students/environment.avif"
import art from "../images/students/art.avif"
import dance from "../images/students/dance.avif"
import debate from "../images/students/debate.avif"
import student1 from "../images/students/student1.jpg"
import student2 from "../images/students/student2.jpg"
import student3 from "../images/students/student3.jpg"

const Student = () => {
    return (
        <Layout>
            <div>
                <div className='m-10 flex items-center h-96'>
                    <img className='w-full h-full' src={academic1} alt="background image" />
                    <p className='absolute ml-6 text-white text-6xl'>Students</p>
                </div>
                <div className='flex flex-col items-center mt-4'>
                    <div className='w-3/4'>
                        <p className='text-5xl inline mb-5 font-medium border-b-4 pb-2 border-black'>Life at Springdale</p>
                        <ul className='list-disc'>
                            <li>
                                <p className='text-xl mt-8'><strong>Extracurricular Activities : </strong>"Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club"</p>
                            </li>
                            <li>
                                <p className='text-xl mt-4'><strong>Clubs and Societies : </strong>"Literary Society, Environmental Club, Astronomy Club, Coding Club"</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex m-10  gap-4 flex-wrap justify-center'>
                    <img className='w-96 rounded-md' src={art} alt="art" />
                    <img className='w-96 rounded-md' src={science} alt="science" />
                    <img className='w-96 rounded-md' src={dance} alt=" dance" />
                    <img className='w-96 rounded-md' src={environment} alt="environment" />
                    <img className='w-96 rounded-md' src={debate} alt="debate" />
                    <img className='w-96 rounded-md' src={music} alt="music" />
                    <img className='w-96 rounded-md' src={coding} alt="coding" />
                    <img className='w-96 rounded-md' src={sports} alt="sports" />
                </div>
                <div className='w-3/4 lg:pl-40 pl-20 mt-20'>
                    <p className='text-5xl mb-5 font-medium '>Springdale Public School Field Academy is an opportunity for students and teachers to travel and work on intensive projects between Winter and Spring Terms.</p>

                </div>

                <div className='w-3/4 lg:pl-40 pl-20 mt-20'>
                    <p className='text-5xl mb-5 font-medium border-b-4 inline p-2 border-black'>Achievements</p>

                </div>

                <div className='flex m-10  gap-4 flex-wrap pl-10 lg:pl-32'>
                    <div className='w-64'>
                        <div className='h-2/3'>
                            <img className=' h-full w-64 rounded-md' src={student3} alt=" dance" />
                        </div>
                        <div className='h-1/3'>
                            <p className='text-2xl font-medium mt-4'>John Smith</p>
                            <p>National Level Math Olympiad Winner"
                            </p>
                        </div>
                    </div>
                    <div className=' w-64'>
                        <div className='h-2/3'>
                            <img className='h-full w-64 rounded-md' src={student1} alt="art" />
                        </div>
                        <div className='h-1/3'>
                            <p className='text-2xl font-medium mt-4'>Sarah Lee</p>
                            <p>Gold Medalist in State Swimming Championship"</p>
                        </div>
                    </div>



                </div>
            </div>
        </Layout>
    )
}

export default Student
