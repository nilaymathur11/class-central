import React from 'react'
import { Link } from 'react-router-dom'

export default function CourseCard({ data, fromMain }) {
    
    return (
        <div className='border border-slate-300 hover:border-[black] md:mx-[20px] md:my-[20px] rounded-md'>
            <Link to={`/courses/${data?.id}`}>
                <img src={data?.thumbnail} alt="course image" className={fromMain?'md:h-[400px] h-[200px] object-cover cursor-pointer rounded-md w-[100%]':'h-[200px] object-cover cursor-pointer rounded-md w-[100%]'} />
            </Link>
            <div className='p-[16px] box-border'>
                <Link to={`/courses/${data?.id}`} className='font-bold mb-[12px] md:text-[28px] text-[20px] text-[#0a2540] hover:underline cursor-pointer'>
                    {data?.name}
                </Link>
                {
                    fromMain ?
                        <div className='text-[#0a2540] md:text-[25px] text-[20px] mb-[12px]'>{data?.description}</div>
                        :
                        null
                }
                <div className='text-[#0a2540] mb-[12px]'>
                    Duration : {data?.duration}
                </div>
                <div>
                    <span className='text-[#0a2540] me-[12px]'>{data?.instructor}</span>
                    <span className='text-[#6f7074]'>Dec 4th, 2023</span>
                </div>
            </div>
        </div>
    )
}
