import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='md:px-[40px] px-[12px] box-border md:py-[10px] py-[20px] shadow-md justify-between items-center'>
        <div className='mx-auto w-full max-w-screen-xl'>
            <ul className='grid grid-flow-col auto-cols-auto md:gap-[100px] md:justify-start justify-between items-center'>
                <li className='font-bold md:text-[40px] text-[20px] cursor-pointer'>
                  <Link to={'/'}>
                    <span className='text-[#009fff]'>CLASS</span><span>CENTRAL</span>
                  </Link>
                </li>
                <li className='hover:text-[#009fff] hover:underline md:text-[22px] font-bold cursor-pointer'>
                  <Link to={'/dashboard'}>Dashboard</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}
