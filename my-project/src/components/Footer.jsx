import React from 'react'
import {FaFacebook, FaGithub, FaInstagram, FaTwitter, FaTwitch} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-[#02044A] text-gray-300 py-8 px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            
        </div>

        <div className='flex flex-col max-h-96 max-w-[1300px] px-1 py-12 m-auto justify-between sm:flex-row text-center text-gray-500 items-center'>
            <p>2024 Berke Tarhan, All rights reserved</p>
            <div className='flex justify-between sm:w-[300px] pt-4 text-2xl gap-2'>
                <FaFacebook/>
                <FaGithub/>
                <FaInstagram/>
                <FaTwitch/>  
                <FaTwitter/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            r
            </div>
        </div>
      
    </div>
  )
}

export default Footer
