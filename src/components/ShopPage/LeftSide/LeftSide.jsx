import React from 'react'
import LeftSideHeader from '../LeftSideHeader/LeftSideHeader'
import LeftSideColProductBox from '../LeftSideColProductBox/LeftSideColProductBox'

function LeftSide() {
  return (
    <div className="flex-[4]">
      <LeftSideHeader />

      <div className='grid grid-cols-4 gap-4'>
        <LeftSideColProductBox />
        <LeftSideColProductBox />
        <LeftSideColProductBox />
        <LeftSideColProductBox />
        <LeftSideColProductBox />
        <LeftSideColProductBox />
        <LeftSideColProductBox />
        <LeftSideColProductBox />
        <LeftSideColProductBox />
        <LeftSideColProductBox />
        <LeftSideColProductBox />
        <LeftSideColProductBox />
      </div>
    </div>
  )
}

export default LeftSide