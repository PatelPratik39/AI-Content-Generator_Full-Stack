import { Search } from 'lucide-react'
import React from 'react'

const SearchSection = ({ onSearchInput }: any) => {


  return (
    <div className='p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 flex flex-col justify-center items-center text-center text-white'>
      <h2 className='text-3xl font-bold text-white' >
        Browse AI Template
      </h2>
      <p>What would you like to create today??</p>
      <div className='w-full flex justify-center'>
        <div className='flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[50%]'>
          <Search className='text-primary' />
          <input type='text' placeholder='Search AI template ....' onChange={(event) => onSearchInput(event.target.value)} className='bg-transparent outline-none text-black flex-1 w-full' />
        </div>
      </div>
    </div>
  )
}

export default SearchSection