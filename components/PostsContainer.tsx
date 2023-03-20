import React, { FC, useState } from 'react';
import Link from 'next/link';
import { FaHashtag } from 'react-icons/fa';
import { Pagination } from './Pagination';
import { paginate } from '../lib/paginate';

interface PostData {
    date: string;
    title: string;
    id: string;
    imageUrl: string;
}

interface Props {
    postData: PostData[];
}

export const PostsContainer: FC<Props> = ({ postData }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 1;

    function onPageChange(page: number) {
        setCurrentPage(page);
    }

    const paginatedPosts = paginate<PostData>(postData, currentPage, pageSize);

    return (
        <div className="bg-not-quite-black text-white flex flex-col justify-center items-center pb-16">
            <div
                className="text-2xl text-left mb-5 font-semibold
                md:text-5xl md:font-semibold md:mb-10"
            >
                Latest posts
            </div>
            <div className="w-11/12
                md:w-3/4
                xl:max-w-7xl"
            >
                {paginatedPosts.map((post) => {
                    return (
                        <PostLink id={post.id} title={post.title} date={post.date} />
                    );
                })}
            </div>
            <div className="mt-2">
                <Pagination
                    items={postData.length}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={onPageChange}
                    />
            </div>
        </div>
    );
};

interface PostLink { 
    id: string;
    title: string;
    date: string;
}

const PostLink: FC<PostLink> = ({ id, title, date }) => {
    return (
        <Link href={`/posts/${id}`} key={`${id}`} className="flex justify-start m-3 p-2 rounded-md text-black bg-white hover:scale-105 active:scale-95 cursor-pointer hover:shadow-md transition-all duration-200 ease-in-out">
            <div className="flex items-center">
                <FaHashtag className='h-8 w-8' />
            </div>
            <div className="flex flex-col ml-3">
                <div className="text-lg font-bold">{title}</div>
                <div className="text-sm">{date}</div>
            </div>
        </Link>
    );
}