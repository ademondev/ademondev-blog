import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
    id: string;
}

export const Hero: FC<Props> = (props) => {
    return (<>
        <div className="relative grid py-14 px-6 grid-cols-4 pb-10 
            md:grid-cols-8"
        >
            <div className="text-left col-start-1 col-end-5
                md:col-start-1 md:col-end-8 md:py-20 md:font-bold
                lg:text-center lg:col-start-2 lg:col-end-8 z-20"
            >
                <div className="text-3xl font-bold mb-4 text-not-quite-black
                    md:text-6xl"
                >
                    Welcome to a piece of my <span className='font-bold bg-gradient-to-r from-blue-900 to-blue-600 text-transparent bg-clip-text'>mind</span>...
                </div>
                <div className='text-md text-gray-500
                    md:text-lg'
                >
                    ...where I share my experience for others to learn <span className='font-bold'>faster</span>
                </div>
                <div className="">
                    <Link href={`/posts/${props.id}`}>
                        <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-10 select-none
                            transition-all duration-200 shadow-lg hover:shadow-blue-600 hover:scale-105 active:scale-95">
                            Read random post
                        </button>
                    </Link>
                </div>
                <div className="absolute bottom-0 top-full overflow-x-hidden">
                    <Image src="/svg/wave.svg" width={10000} height={600} alt="ademondev logo" className='text-white' />
                </div>
            </div>
        </div>
        <div className="h-32 w-full relative overflow-hidden">
            {/* <div className="w-[200%] h-full absolute bottom-0 left-0 border border-red-600 animate-wave"></div> */}
            <svg className='animate-wave w-[200%] h-full fill-not-quite-black top-3 absolute bottom-0 left-0' preserveAspectRatio='none' version="1.1" viewBox="0 0 264.58 39.731" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(-5.7615 -112.65)">
                    <g transform="translate(-8.97 -17.228)">
                        <path d="m105.84 129.88c-37.666-0.17597-61.037 33.339-91.112 13.338v26.392h264.58v-26.392c-64.593-40.402-92.604 26.392-132.29 0-15.644-9.7848-29.142-13.282-41.179-13.338z"  />
                    </g>
                </g>
            </svg>
        </div>
    </>)
}
