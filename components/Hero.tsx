import React, { FC } from 'react';
import Image from 'next/image';

type Props = {}

export const Hero: FC<Props> = (props) => {
    return (<>
        <div className="relative grid py-14 px-6 grid-cols-4 pb-10 
            md:grid-cols-8"
        >
            <div className="text-left col-start-1 col-end-5
                md:col-start-1 md:col-end-8 md:py-20 md:font-bold
                lg:text-center lg:col-start-2 lg:col-end-8 z-20"
            >
                <div className="text-2xl font-bold mb-4 text-not-quite-black
                    md:text-6xl"
                >
                    Welcome to a piece of my <span className='font-bold bg-gradient-to-r from-blue-900 to-blue-600 text-transparent bg-clip-text'>mind</span>...
                </div>
                <div className='text-sm text-gray-500
                    md:text-lg'
                >
                    ...where I share my experience for others to learn <span className='font-bold'>faster</span>
                </div>
                <div className="">
                    <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-10
                        transition-all duration-200 shadow-lg hover:shadow-blue-600 active:scale-95">
                        Read random post
                    </button>
                </div>
                <div className="absolute bottom-0 top-full overflow-x-hidden">
                    <Image src="/svg/wave.svg" width={10000} height={600} alt="ademondev logo" className='text-white' />
                </div>
            </div>
        </div>
        <div className="bottom-0 left-0 overflow-hidden text-white">
            <svg data-name="Layer 1" className='fill-not-quite-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
            </svg>
        </div>
    </>)
}
