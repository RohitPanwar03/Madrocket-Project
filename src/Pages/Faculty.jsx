import React from 'react'
import Layout from './../Components/Layout';
import principal from '../images/teachers/principal.avif'
import teacher1 from '../images/teachers/teacher1.jpg'
import teacher2 from '../images/teachers/teacher2.jpg'
import teacher3 from '../images/teachers/teacher3.jpg'
import teacher4 from '../images/teachers/teacher 4.jpg'
import teacher5 from '../images/teachers/reacher5.jpg'

const Faculty = () => {
    return (
        <Layout>
            <div className='m-20'>
                <div>
                    <h1 className='text-6xl font-bold'>Faculty</h1>
                </div>
                <div className='mt-20'>
                    <h1 className='text-2xl mb-4 font-medium'>The majority of Springdale faculty hold advanced degrees. They hail from a variety of academic and professional backgrounds, thereby adding to the rich tapestry of a Springdale education.
                    </h1>
                    <hr />
                    <p className='text-xl mt-4'>
                        Teachers develop close relationships with students, providing a caring and supportive environment where academic excellence, social skills, self-esteem, and respect for others are fostered through cooperative learning and personal development. Small class sizes ensure that each student benefits from mentor relationships with their teachers.
                    </p>
                </div>
                <div className='m-20 flex justify-evenly lg:m-32'>
                    <div className='w-2/4 lg:w-1/4'>
                        <img className='w-3/4' src={principal} alt="" />
                    </div>
                    <div className='w-2/4'>
                        <p className='text-3xl font-medium mb-4'>John Doe:</p>
                        <p className='text-xl'><strong>Principal</strong>, M.Ed, 20 years of experience in educational administration.</p>
                        <p className='text-lg font-medium mt-8 hidden sm:block'>"Create an environment where people enjoy coming to work.</p>
                        <p className='text-lg font-medium hidden  sm:block'>
                            School should be fun. Mistakes will be made. We do our best learning through

                            our failures so invite failure in. And still be joyous."</p>
                    </div>
                </div>
                <div className='m-10'>
                    <h1 className='text-6xl text-center  font-medium'>Teachers</h1>
                    <div className=' mt-10 flex justify-center items-center gap-4 flex-wrap'>
                        <div className='max-w-60  h-96' >

                            <img className='w-full ' src={teacher1} alt="" />

                            <p className='mt-4 text-xl font-medium ' >Jane Smith:</p>
                            <p className='mt-2  text-lg'>Vice Principal, M.Sc. in Physics, 15 years of teaching experience</p>
                        </div>
                        <div className='max-w-60  h-96'>

                            <img className='w-full h-60' src={teacher2} alt="" />

                            <p className='mt-4 text-xl font-medium' >Emily Johnson:</p>
                            <p className='mt-2  text-lg'>English Teacher, M.A. in English, 10 years of teaching experience.</p>
                        </div>
                        <div className='max-w-60  h-96 overflow-hidden'>
                            <img className='w-full' src={teacher3} alt="" />
                            <p className='mt-4 text-xl font-medium' >Michael Brown:</p>
                            <p className='mt-2 text-lg'>Mathematics Teacher, M.Sc. in Mathematics, 8 years of teaching experience.</p>
                        </div>
                        <div className='max-w-60  h-96 overflow-hidden '>
                            <img className='w-full' src={teacher4} alt="" />
                            <p className='mt-4 text-xl font-medium' >Sophia Davis:</p>
                            <p className='mt-2  text-lg'>Science Teacher, M.Sc. in Chemistry, 12 years of teaching experience.</p>
                        </div>
                        <div className='max-w-60 h-96 overflow-hidden'>
                            <img className='w-full' src={teacher5} alt="" />
                            <p className='mt-4 text-xl font-medium' >David Wilson:</p>
                            <p className='mt-2 text-lg '>Computer Science Teacher, B.Tech in Computer Science, 5 years of teaching experience.</p>
                        </div>

                    </div>
                </div>
                <div></div>
            </div>
        </Layout>
    )
}

export default Faculty
