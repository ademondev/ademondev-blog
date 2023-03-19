import React, { FC, ReactNode } from 'react';
import Image from 'next/image';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';

interface Footer {
    black?: boolean
}

export const Footer: FC<Footer> = ({ black = true }) => {
    const socials: FooterIcon[] = [
        {
            url: '#',
            icon: <AiFillGithub />
        },
        {
            url: '#',
            icon: <AiFillLinkedin />
        },
        {
            url: '#',
            icon: <AiOutlineTwitter />
        }
    ]
    return (<>
        <div className={`bottom-0 left-0 overflow-hidden text-white ${ black ? 'bg-not-quite-black' : 'bg-white' }`}>
            <svg data-name="Layer 1" className='fill-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
            </svg>
        </div>
        <div className="bg-black ">
            <div className="flex flex-col items-center
                md:flex-row md:justify-between md:pb-4
                xl:max-w-7xl xl:mx-auto"
            >
                <div className="flex justify-center p-2 border-b-slate-300 border-b
                    md:border-b-0 md:border-r-slate-300 md:border-r"
                >
                    <Image src="/svg/mainLogo.svg" width={35} height={35} alt="ademondev logo"
                        className='mx-2'
                    />
                    <div className="flex items-center">
                        <p className="text-md font-bold text-white mr-2">ademondev</p>
                    </div>
                </div>
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
        <a href={`${url}`} className="bg-white rounded-full p-2 mx-2 transition-all duration-200 hover:scale-105 active:scale-95">
            {icon}
        </a>
    );
}
