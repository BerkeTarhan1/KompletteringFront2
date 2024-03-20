import React from 'react'
import { Navbar, Footer,} from '../components'



const ContactPage = ({blogs}) => {
  return (
    <div className="flex flex-col h-screen">
        <Navbar/>
        <div className="flex-grow flex items-center justify-center">
            <p className='font-sans text-2xl italic font-bold'>
                <b>För att nå mig kan ni komma i kontakt med mig på följande sätt:</b>
                <br />
                <b>Mail: berketarhan@gmail.com</b>
                <br />
                <b>Tel: 072 123 45 60</b>
                <br />
                <b>Jag finns även på sociala medier under namnet Berke Tarhan!</b>
                
            </p>
        </div>
        
        <div className="mt-auto">
              <Footer/>
        </div>
          
        
            
    </div>

    
  )
}

export default ContactPage
