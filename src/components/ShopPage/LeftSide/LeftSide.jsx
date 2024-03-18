import React from 'react'
import LeftSideHeader from '../LeftSideHeader/LeftSideHeader'
import LeftSideColProductBox from '../LeftSideColProductBox/LeftSideColProductBox'
import LeftSideRowProductBox from '../LeftSideRowProductBox/LeftSideRowProductBox'

function LeftSide() {
  return (
    <div className="flex-[4]">
      <LeftSideHeader />

      <div className='grid grid-cols-1 gap-4 mt-4'>
        <LeftSideRowProductBox />
        <LeftSideRowProductBox />
        <LeftSideRowProductBox />
        <LeftSideRowProductBox />
        <LeftSideRowProductBox />
      </div>
    </div>
  )
}

export default LeftSide