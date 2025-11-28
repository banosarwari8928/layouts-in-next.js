import React from 'react'
import Link from 'next/link'
function page() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
<div className=' p-28 text-4xl text-center border-2 border-blue-700 rounded-md shadow-2xl shadow-blue-500'> 
    <h1>this is the folder 2.</h1>
  <Link href="/f4">go to folder 4.</Link>
</div>
    </div>
  )
}

export default page