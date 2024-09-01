import { Search } from 'lucide-react'
import React from 'react'

function searchSection({onSearchInput}:any) {
  return (
    <div className='p-10 bg-gradient-to-br from-teal-500 via-teal-800 to-teal-900
    flex flex-col justify-center items-center text-white 
    '>
      <h2 className='text-2xl font-bold'>Browse all Templates</h2>
      <p>What would you like to create today?</p>
      <div className='w-full flex justify-center'>
        <div className='flex gap-2 items-center p-2 border rounded bg-slate-100 
        my-5 w-[40%]'>
            <Search className='text-primary'/>
            <input type='text' placeholder='Search'
            onChange={(event)=>onSearchInput(event.target.value)}
            className='bg-transparent text-primary w-full outline-none' 
            />
        </div>
      </div>
    </div>
  )
}

export default searchSection
