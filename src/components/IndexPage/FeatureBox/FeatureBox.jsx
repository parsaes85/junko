import React from 'react'

function FeatureBox({img, title, desc}) {
  return (
    <div className='flex items-center gap-4 font-IRANSans'>
        <div>
            <img src={img} alt="" />
        </div>
        <div className='space-y-2'>
            <h1 className='font-semibold'>{title}</h1>
            <p className='text-[13px]'>{desc}</p>
        </div>
    </div>
  )
}

export default FeatureBox