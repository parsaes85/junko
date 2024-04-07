import React from 'react'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import RightSide from '../../components/BlogPage/RightSide/RightSide'
import LeftSide from '../../components/BlogPage/LeftSide/LeftSide'
import LeftSidePagination from '../../components/ShopPage/LeftSidePagination/LeftSidePagination'

function Blog() {
  return (
    <>
    <Breadcrumb page="بلاگ" />

    <main className="flex flex-col-reverse lg:flex-row gap-8 px-4 xs:px-24 mb-16">
      <RightSide />
      <LeftSide />
    </main>

    <LeftSidePagination />
  </>
  )
}

export default Blog