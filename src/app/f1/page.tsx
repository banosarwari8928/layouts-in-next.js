import React from 'react'
import Link from 'next/link'
function page() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
<div className=' p-28 text-center border-2 border-blue-700 rounded-md shadow-2xl shadow-blue-500 text-4xl '> 
    <h1>this is the folder 1.</h1>
  <Link href="/f1/f2">go to folder 2.</Link>
  <Link href="/f3">go to folder 3.</Link>
</div>
    </div>
  )
}

export default page