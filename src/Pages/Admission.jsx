import React from 'react'
import Layout from './../Components/Layout';
import bgimg from '../images/admission/Admission.jpg'
import admission2 from '../images/admission/admission2.avif'

const Admission = () => {
    return (
        <Layout>
            <div>
                <div className='m-10 flex items-center'>
                    <img className='w-full h-96' src={bgimg} alt="" />
                    <p className='absolute text-6xl font-medium font-sans p-10' style={{ color: 'white' }}>Admissions</p>
                </div>
                <div className='m-10 flex flex-col items-center'>
                    <div className='w-2/3'>

                        <p className='text-4xl font-medium mb-4'>Springdale Public School is now accepting applications for the 2024 - 2025 academic year. </p>
                        <hr />
                        <p className='text-center mt-4'>Springdale Public School is currently accepting applications for the 2024 - 2025 school year. The deadline for applications is January 15, 2024. Students who apply by this deadline will be notified on March 10, 2024, as to the status of their acceptance. After this deadline, Ross School will continue accepting new applications on a rolling basis. To apply to Springdale Public School, please start an online application here. Space is limited. </p>

                    </div>
                    <div className='w-2/3 mt-20 mb-16  '>
                        <p className='text-4xl font-medium'>Process & Criteria</p>
                        <p className='text-xl mt-10'>"Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades."</p>
                        <p className='text-xl'> "Admission forms are available for download. Submit the completed form along with required documents at the school office."</p>
                        <button className='border-2 text-blue-400 border-blue-400 p-2 rounded-lg hover:bg-blue-400 hover:text-white mt-8 font-medium' download>Admission Form</button>
                    </div>
                    <div className='w-2/3 mt-10  border-b-2 border-r-2 border-t-2'>
                        <p className='text-4xl font-medium mb-4 mt-4'>Important Dates:</p>
                        <hr />
                        <ul className='list-disc mt-4 ml-10 text-xl mb-10'>
                            <li>"Admission Form Availability: March 1st"</li>
                            <li>"Last Date for Submission: March 31st"</li>
                            <li>"Entrance Test: April 15th"</li>
                            <li>"Announcement of Results: April 30th"</li>
                        </ul>
                    </div>
                    <div className='w-2/3 mt-16'>
                        <p className='text-xl'><strong>Scheduled Campus Tours </strong> of our Upper School Campus (East Hampton) take place on Mondays at 9 am. Scheduled tours of our Lower School Campus (Bridgehampton) are offered on Wednesdays at 9 am.  </p>
                    </div>
                    <div className='m-10 w-2/3'>
                        <img className=' h-96 w-full' src={admission2} alt="" />
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default Admission
