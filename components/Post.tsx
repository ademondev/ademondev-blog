import React, { FC } from 'react';
import Date from './Date';
import Image from 'next/image';
import Markdown from 'markdown-to-jsx';
import { BsDot } from 'react-icons/bs';
import { readingTime } from '../lib/readingTime';
import { FiBookOpen } from 'react-icons/fi';

type PostType = {
    postData: Post
};

export interface Post {
    date: string;
    title: string;
    id: string;
    contentHtml: string;
    imageUrl: string;
}

export const Post: FC<PostType> = ({ postData }) => {
    const link = postData.imageUrl.length !== 0 ? postData.imageUrl : 'defaultBanner.png';
    return (<div className="md:mx-auto md:max-w-3xl">
        <div className="">
            <div className="relative w-full h-80">
                <Image src={`/images/${link}`} alt="Post image" fill={true} className="object-cover" />
                <svg data-name="Layer 1" className='absolute bottom-0 left-0 z-30 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
        <article className='bg-white mb-20
            md:mb-36'
        >
            <div className="grid grid-cols-4 grid-rows-2 justify-center items-center text-center mb-14
                md:mb-20"
            >
                <h1 className='col-start-1 col-end-5 row-start-1 text-3xl font-bold text-not-quite-black
                    md:text-5xl'
                >
                    {postData.title}
                </h1>
                <div className="flex flex-col col-start-1 col-end-5 row-start-2 mt-5
                    md:flex-row md:justify-center md:items-center md:mt-0 md:text-lg"
                >
                    <div className="flex justify-center mr-2 mb-5
                        md:mr-1 md:mb-0 md:mt-5"
                    >
                        <Image src="/images/profile.png" alt="Profile image" width={40} height={50} className="rounded-full" />
                        <div className="flex items-center font-medium">ademondev</div>
                    </div>
                    <div className="flex justify-center
                        md:mt-5"
                    >
                        <div className="flex justify-center items-center">
                            <BsDot className='hidden md:inline'/>
                        </div>
                        <Date dateString={postData.date} />
                        <div className="flex justify-center items-center">
                            <BsDot className=''/>
                            <FiBookOpen className='mr-1 text-not-quite-black' />
                        </div>
                        <span>{readingTime(postData.contentHtml)}</span>
                    </div>
                </div>
            </div>
            <article className="prose lg:prose-xl px-4 mx-auto">
                <Markdown>{postData.contentHtml}</Markdown>
            </article>
        </article>
    </div>)
}
