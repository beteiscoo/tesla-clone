import React from 'react'
import {ChevronDownIcon} from '@heroicons/react/24/outline'
import Fade from 'react-reveal/Fade'

function Section({img, title, description, ButtonTextL, ButtonTextR}) {
  
    return (
        <div className='h-full items-center w-full bg-cover bg-center bg-no-repeat flex flex-col justify-between'
            style={{
                backgroundImage: `url(${img})`
        }}>
        <Fade bottom>
        <div className='py-16 text-center'>
            <h1 >{title}</h1>
            <p>{description}</p>
        </div>
        </Fade>    
            <div>
                <Fade bottom>
                    <div className='cursor-pointer items-center mb-7.5 sm:flex '>
                        <button className='flex m-2 justify-center items-center h-10 w-60 bg-gray-800 text-white rounded-md opacity-85 uppercase text-xs'>
                        {ButtonTextL}
                        </button>
                        { ButtonTextR &&
                            <button className='text-black flex m-2 justify-center items-center h-10 w-60 bg-white rounded-md opacity-65 uppercase text-xs'>
                                {ButtonTextR}
                            </button>
                        }
                    </div>
                </Fade>
                <ChevronDownIcon className='mx-60 text-white animate-bounce h-10 mt-5 '/>
            </div>
        </div>
    )
}

export default Section
