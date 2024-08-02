import React from 'react'
import Layout from './../Components/Layout';
import academics1 from '../images/Academics/academics1.avif'
import academics2 from '../images/Academics/academics2.avif'
import academics3 from '../images/Academics/academics3.avif'
import academics4 from '../images/Academics/academics4.avif'
import academics5 from '../images/Academics/academics5.avif'
import academics6 from '../images/Academics/academics6.avif'

const Academics = () => {
    return (
        <Layout>
            <div>
                <div className='m-10 flex items-center h-96'>
                    <img className='w-full h-full' src={academics1} alt="background image" />
                    <p className='absolute ml-6 text-white text-6xl'>Academics</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='w-3/4 p-4'>
                        <p className='text-4xl mb-5 font-medium'>Currriculum</p>
                        <ul className='list-disc'>
                            <li>
                                <p className='text-xl mt-8'><strong>Primary (Grades 1-5) : </strong>English, Mathematics, Science, Social Studies, Art, Physical Education</p>
                            </li>
                            <li>
                                <p className='text-xl mt-4'><strong>Secondary (Grades 6-10) : </strong>English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</p>
                            </li>
                            <li>
                                <p className='text-xl mt-4'><strong>Senior Secondary (Grades 11-12): </strong></p>
                                <ul className=''>
                                    <li>
                                        <p className='text-xl mt-2'>
                                            <strong>Science Stream : </strong>
                                            Physics, Chemistry, Biology, Mathematics, Computer Science, English
                                        </p>
                                    </li>
                                    <li>
                                        <p className='text-xl mt-2'>
                                            <strong>Commerce Stream : </strong>
                                            Accountancy, Business Studies, Economics, Mathematics, English
                                        </p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex m-10  gap-4 flex-wrap justify-center'>
                    <img className='w-96 rounded-md' src={academics2} alt="primary" />
                    <img className='w-96 rounded-md' src={academics3} alt="secondary" />
                    <img className='w-96 rounded-md' src={academics4} alt=" science" />
                    <img className='w-96 rounded-md' src={academics5} alt="commerce" />
                </div>
                <div className='m-10 flex justify-center mt-20 '>
                    <div className='w-3/4'>
                        <p className=' text-4xl font-medium mb-4'>Springdale Public School academic program instills in students an appreciation for the continuum of history, offering them a much broader context to comprehend the world today. </p>
                    </div>
                </div>
                <div className=' md:flex m-10 justify-evenly mt-20'>
                    <div className='2/5'>
                        <img className='w-full' src={academics6} alt="classroom" />
                    </div>
                    <div className='md:w-2/5'>
                        <p className='text-lg lg:text-2xl'>We strive to nurture comprehensive thinkers and break down the barriers of siloed thinking, allowing students to integrate their knowledge across various subjects.

                            We firmly believe that in order to equip students to meet the challenges of the future, it is crucial for them to develop a systemic understanding of the world. We strive to provide multiple avenues into the content, recognizing that the varied and diverse ways in which they learn and grow. </p>
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default Academics
