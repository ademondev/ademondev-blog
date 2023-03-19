import React, { FC } from 'react'
import HeaderCombobox from './HeaderCombobox';
import Image from 'next/image';
import Link from 'next/link';
import { Post } from './Post';

type HeaderPost = Omit<Post, "contentHtml">

export interface PostType {
    postData: HeaderPost[]
}

const Header: FC<PostType> = ({ postData }) => {
    return (
        <header className="h-16 border-b-[1px] border-gray-400">
            <div className="flex justify-between xl:max-w-7xl xl:mx-auto">
                    <Link href="/" className="flex items-center transition-all delay-75 duration-200 hover:scale-110">
                        <Image src="/svg/mainLogo.svg" width={35} height={35} alt="ademondev logo"
                            className='m-2'
                        />
                        <div className="text-xl text-not-quite-black font-bold hidden sm:inline-block">ademondev's blog</div>
                    </Link>
                <div className="flex items-center m-3">
                    <HeaderCombobox postData={postData}/>
                </div>
            </div>
        </header>
    )
}

export default Header;
