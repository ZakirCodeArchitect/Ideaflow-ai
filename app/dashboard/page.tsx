"use client"

import React, { useState } from 'react'
import SearchSection from './_components/searchSection';
import TemplateListSection from './_components/templateListSection';
// import HistoryPage from './history/page';

function Dashboard() {
    const [useSearchInput, setUserSearchInput]=useState<string>()
  return (
    <div>
      {/* Search Section */}
      <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)}/>

      {/* Template List Section */}
      <TemplateListSection userSearchInput={useSearchInput}/>

    </div>
  )
}

export default Dashboard
