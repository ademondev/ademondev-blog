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
                        className={`flex justify-center items-center h-6 w-6 rounded-md transition-all duration-200 text-black  cursor-pointer
                            mx-1
                              hover:shadow-sm hover:shadow-blue-600
                            ${currentPage === page ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-white hover:bg-blue-200' }
                        `}
                    >
                            {page}
                    </li>
                ))}
            </ul>
        </div>
    );
}
