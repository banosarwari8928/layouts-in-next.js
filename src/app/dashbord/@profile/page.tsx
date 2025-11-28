import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
        <h1 className='text-4xl'> this is the profile section</h1>
        <Link className='border border-blue-600 p-1.5 rounded-md shadow-blue-600 shadow-2xl' href="dashbord/frinds">go to frinds profile section </Link>
    </div>
  )
}

export default page