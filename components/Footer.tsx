import React, { FC, ReactNode } from 'react';
import Image from 'next/image';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import Link from 'next/link';

interface Footer {
    black?: boolean
}

export const Footer: FC<Footer> = ({ black = true }) => {
    const socials: FooterIcon[] = [
        {
            url: 'https://github.com/ademondev',
            icon: <AiFillGithub />
        },
        {
            url: 'https://www.linkedin.com/in/alejandro-pedemonte-806131265/',
            icon: <AiFillLinkedin />
        },
        {
            url: 'https://twitter.com/ademondev',
            icon: <AiOutlineTwitter />
        }
    ]
    return (<>
        <div className={`h-32 w-full relative overflow-hidden ${black ? 'bg-not-quite-black' : 'bg-white'}`}>
            <svg className='animate-wave w-[200%] h-full fill-black absolute bottom-0 left-0' preserveAspectRatio='none' version="1.1" viewBox="0 0 264.58 39.731" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(-5.7615 -112.65)">
                    <g transform="translate(-8.97 -17.228)">
                        <path d="m105.84 129.88c-37.666-0.17597-61.037 33.339-91.112 13.338v26.392h264.58v-26.392c-64.593-40.402-92.604 26.392-132.29 0-15.644-9.7848-29.142-13.282-41.179-13.338z" />
                    </g>
                </g>
            </svg>
        </div>
        <div className="bg-black ">
            <div className="flex flex-col items-center
                md:flex-row md:justify-between md:pb-4
                xl:max-w-7xl xl:mx-auto"
            >
                <Link href="/" className="flex justify-center p-2 border-b-slate-300 border-b
                    md:border-b-0 md:border-r-slate-300 md:border-r"
                >
                    <Image src="/svg/mainLogo.svg" width={35} height={35} alt="ademondev logo"
                        className='mx-2'
                    />
                    <div className="flex items-center">
                        <p className="text-md font-bold text-white mr-2">ademondev</p>
                    </div>
                </Link>
                <div className="flex items-center h-10 m-3">
                    {socials.map((social, index) => (
                        <FooterIcon key={index} url={social.url} icon={social.icon} />
                    ))}
                </div>
            </div>
        </div>
    </>)
}

interface FooterIcon {
    url: string,
    icon: ReactNode
}

const FooterIcon: FC<FooterIcon> = ({ url, icon }) => {
    return (
        <a href={`${url}`} target="_blank" className="bg-white rounded-full p-2 mx-2 transition-all duration-200 hover:scale-105 active:scale-95">
            {icon}
        </a>
    );
}
