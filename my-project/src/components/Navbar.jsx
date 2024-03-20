import React, {useState} from 'react'
import { menu, close, logo } from '../assets'
import ContactPage from '../pages/ContactPage'
import { Link } from 'react-router-dom'

const Navbar = () => {
const [toggle, setToggle]=useState(false)
const handleClick = ()=>setToggle(!toggle)
  return (
    <div className='w-full h-[80px] z-10 bg-white fixed drop-shadow-lg relative'>
        <div className='flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto'>
            
            <div className='flex items-center'>
            
            </div>

                <div className='items-center flex-grow text-center'>
                    <ul className='hidden md:flex justify-center'>
                        <li className='text-xl'>Välkommen till hemsidan om mig - Berke Tarhan!</li>
                        <li className='text-xl'><Link to="/contact">Kontaktsida</Link></li>
                    </ul>
                </div>


                

                <div className='md:hidden' onClick={handleClick}>
                    <img src={!toggle?menu:close} alt='menu' className='w-[28px] h-[28px] object-contain mr-10'/>
                </div>

        </div>
       

    </div>

  )
}

export default Navbar
