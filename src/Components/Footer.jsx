import React from 'react'
import insta from '../images/insta.jpg'
import fb from '../images/fb.png'
import logo from '../images/logo.png'

const Footer = () => {
    return (
        <div className='bg-blue-400 text-white p-1  '>
            <div className='m-10'>
                <div className='flex justify-between mb-10'>
                    <div className='h-14 w-34'>
                        <img className='h-full w-full ' src={logo} alt='logo' />
                    </div>
                    <div className='flex justify-between w-28'>
                        <img className='h-10 w-12 mix-blend-color-burn ' src={insta} alt="insta" />
                        <img className='h-10 mix-blend-color-burn w-12' src={fb} alt="insta" />

                    </div>
                </div>
                <div className='flex m-4 justify-evenly '>
                    <div className='w-2/4 mr-20 '>
                        <h1 className='text-3xl font-bold mb-8'>About</h1>
                        <p className='font-medium'>Our mission is to change the way education meets the future; to foster interdisciplinary, integrated thinking and innovative leadership; to engage fully in the global community; and to facilitate lifelong learning.</p>
                        <p className='font-medium'>18 Goodfriend Drive
                            East Hampton, NY 11937</p>
                        <p className='font-medium'>739 Butter Lane
                            Bridgehampton, NY 11932</p>
                    </div>
                    <div className='w-1/4 '>
                        <h1 className='text-3xl mb-8 font-bold'>Contact</h1>
                        <p className='font-medium'>Upper School: 631-907-5000</p>
                        <p className='font-medium'>Lower School: 631-702-8300</p>
                        <p className='font-medium'>Summer: 631-907-5376 </p>
                    </div>
                    <div className='w-1/4 text-start ml-10'>
                        <h1 className='text-3xl font-bold mb-8'>Quick Links</h1>
                        <p className='font-medium'>Contact</p>
                        <p className='font-medium'>About</p>
                        <p className='font-medium'>Visit</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
