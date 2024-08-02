import React from 'react'
import Layout from '../Components/Layout'

const Contact = () => {
    return (
        <Layout>
            <div className='flex justify-evenly p-10 '>
                <div className=''>

                    <p className='mt-4'><strong>Address : </strong>739 Butter Lane
                        Bridgehampton, NY 11932</p>
                    <p className='mt-2'><strong>Springdale Public School Main Line & Directory : </strong>631-907-5000 </p>
                    <p className='mt-2'><strong>Lower School Office : </strong>631-702-8300</p>
                    <p className='mt-2'><strong>Upper School Office : </strong>631-907-5508 </p>
                    <p className='mt-2'><strong>Health Center, Upper Campus : </strong>631-907-5166, <span style={{ color: "blue" }}>nurse@springdale.org</span> </p>
                    <p className='mt-2'><strong>Security, Upper Campus : </strong>631-907-5100, <span style={{ color: "blue" }}>security@springdale.org </span> </p>
                    <p className='mt-2'><strong>Admissions : </strong>631-907-5400, <span style={{ color: "blue" }}>nurse@springdale.org</span> </p>
                    <p className='mt-2'><strong>Springdale Public School Programs : </strong>631-907-5376,  <span style={{ color: "blue" }}>summer@springdale.org </span> </p>
                    <p className='mt-2'><strong>Tennis Center : </strong>631-907-5162, <span style={{ color: "blue" }}>tenniscenter@springdale.org </span> </p>

                </div>
                <div className='w-5/12 lg:w-6/12'>
                    <iframe className='h-full w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1307873.4925832318!2d78.15327149780394!3d29.42241302451913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c105274bea0c3%3A0x1ffa75399fc434e8!2sSpring%20Dales%20Public%20School!5e0!3m2!1sen!2sin!4v1722606436691!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className='flex flex-wrap justify-center p-10 mb-55  rounded '>

                <div className="w-2/4 ">
                    <h1 className='text-center text-5xl font-medium'>Contact Me</h1>
                    <form className='w-full flex flex-col items-center mt-5' name="submit-to-google-sheet">
                        <input className='bg-gray-200 w-full border-0 outline-none p-4 mt-4 mb-4 text-xl rounded-md' type="text" name="Name" placeholder="Your Name" required />
                        <input className='bg-gray-200 w-full border-0 outline-none p-4 mt-4 mb-4 text-xl rounded-md' type="email" name="Email" placeholder="Your Email" required />
                        <textarea className='bg-gray-200 w-full border-0 outline-none p-4 mt-4 mb-4 text-xl rounded-md' name="Message" placeholder="Enter Your Query" required defaultValue={""} />
                        <button className='text-xl mt-5 cursor-pointer pt-4 pb-4 pl-14 pr-14 border-blue-400 border-2 rounded-xl hover:bg-blue-400' type="submit" >Submit</button>

                    </form>
                </div>


            </div>
        </Layout>
    )
}

export default Contact
