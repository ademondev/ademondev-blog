import { useState, Fragment, FC } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { GrSearch } from 'react-icons/gr';
import { AiOutlineCheck } from 'react-icons/ai';
import { PostType } from './Header';
import Link from 'next/link';

export const HeaderCombobox: FC<PostType> = ({ postData }) => {
  const [selectedPost, setSelectedPost] = useState('')
  const [query, setQuery] = useState('')

  const filteredpostData =
    query === ''
      ? postData
      : postData.filter((article) => {
        return article.title.toLowerCase().includes(query.toLowerCase())
      })

  return (
    <Combobox value={selectedPost} onChange={setSelectedPost}>
      <div className="relative mt-1">
        <div className="relative w-full cursor-default overflow-hidden rounded-full text-left border border-gray-400 transition-all duration-200 hover:border-gray-600 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-not-quite-black sm:text-sm">
          <div className="flex items-center">
            <GrSearch className='ml-3' />
            <Combobox.Input
              className="w-full outline-none py-1 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              displayValue={(postData: any) => postData.title}
              onChange={(event) => setQuery(event.target.value)}
              spellCheck={false}
              placeholder="Search posts..."
            />
          </div>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery('')}
        >
          <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredpostData.length === 0 && query !== '' ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                Nothing found.
              </div>
            ) : (
              filteredpostData.map((postData) => (
                  <Combobox.Option
                    key={postData.id}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 pl-10 pr-4 ${active ? 'bg-logo-blue text-white' : 'text-gray-900'
                      }`
                    }
                    value={postData}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block cursor-pointer truncate ${selected ? 'font-medium' : 'font-normal'}`}
                        >
                          {postData.title}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute cursor-pointer inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-not-quite-black'
                              }`}
                          >
                            <AiOutlineCheck className='h-5 w-5' aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  )
}



export default HeaderCombobox;