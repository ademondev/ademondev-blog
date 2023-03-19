import React, { FC } from 'react';
import Date from '../components/Date';
import Image from 'next/image';

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
        <article className='bg-white'>
            <h1 className=''>{postData.title}</h1>
            <div className=''>
                <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
    </div>)
}
