import React, { FC } from 'react'

interface PaginationProps {
    items: number
    pageSize: number
    currentPage: number
    onPageChange: (page: number) => void
}

export const Pagination: FC<PaginationProps> = ({ items, pageSize, currentPage, onPageChange }) => {
    const pagesCount = Math.ceil(items / pageSize);

    // 1. If there is only one page, don't show pagination
    if (pagesCount === 1) return null;
    // 2. If there are more than one page, show pagination
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

    return (
        <div className=''>
            <ul className="flex">
                {pages.map((page) => (
                    <li
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`flex justify-center items-center h-6 w-6 rounded-md transition-all duration-200 text-black bg-white cursor-pointer
                            mx-1
                            hover:bg-blue-100 hover:shadow-blue-600 hover:shadow-sm
                            ${currentPage === page ? 'bg-blue-600 text-white' : '' }
                            ${currentPage === page ? 'hover:bg-blue-600' : ''}
                        `}
                    >
                        <a className='styleLink'>
                            {page}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
