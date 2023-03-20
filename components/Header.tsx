import React, { FC, useState } from 'react'
import HeaderCombobox from './HeaderCombobox';
import Image from 'next/image';
import Link from 'next/link';
import { Post } from './Post';

type HeaderPost = Omit<Post, "contentHtml">

export interface PostType {
    postData: HeaderPost[]
}

const Header: FC<PostType> = ({ postData }) => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
  
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;
  
      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };
  
    React.useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [prevScrollPos, visible, handleScroll]);

    return (
        <header className={`h-16 px-2 bg-white border-b-[1px] border-gray-400 fixed top-0 w-full z-50 transition-all duration-300 ${
            visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}>
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
