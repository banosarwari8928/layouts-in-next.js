import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
        <h1 className='text-4xl border border-blue-800'>hi dear, I am happy to be your frinds </h1>
        <Link href="/dashbord">go to frinds page</Link>
    </div>
  )
}

export default page