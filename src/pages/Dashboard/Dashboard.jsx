import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import CourseCard from '../../components/cards/CourseCard/CourseCard';

export default function Dashboard() {
    let [complete,setComplete] = useState([]);
    let CoursesAdded = useSelector(state => state.courses)
    return (
        <div className='md:max-w-[1150px] mx-auto px-[20px] pt-[12px] pb-[50px] box-border'>
            <div className='font-bold mt-[6px] md:text-[35px] text-[20px] text-[#0a2540] text-center'>
                Student Dashboard
            </div>
            <div className='font-bold md:mt-[50px] mt-[25px] md:text-[30px] text-[18px] text-[#0a2540]'>
                Enrolled Courses :
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-[25px]  mt-[6px] ms-[12px] md:text-[20px] text-[18px] text-[#0a2540]'>
                {
                    CoursesAdded?.length ?
                        CoursesAdded.map((v, i) => {
                            return (
                                <CourseCard data={v} key={i} />
                            )
                        })
                        :
                        <span>Not Enrolled To Any Course Yet...</span>

                }
            </div>
            <div className='font-bold md:mt-[50px] mt-[25px] md:text-[30px] text-[18px] text-[#0a2540]'>
                Your Progress :
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-[25px] mt-[6px] ms-[12px] md:text-[20px] text-[18px] text-[#0a2540]'>
                {
                    CoursesAdded?.length ?
                        CoursesAdded.map((v, i) => {
                            return (
                                <div key={i} className='border border-slate-300 p-[24px] rounded-md'>
                                    <div className='mb-[10px] font-bold'>{v?.name}</div>
                                    <div className='mb-[10px]'>Course Progress :</div>
                                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mb-[10px]">
                                        <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full mb-[10px]" style={complete.includes(i)?{width: '100%'}:{width: '45%'}}> {complete.includes(i)?'100%':'45%'}</div>
                                    </div>
                                    <div className='my-[10px] text-center'>
                                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 my-[10px] dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={()=>setComplete([...complete,i])}>{complete.includes(i)?'Completed':'Mark As Completed'}</button>
                                    </div>
                                    <div className='text-center'>
                                        <button type="button" className="me-[20px] text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                                <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
                                            </svg>
                                            <span class="sr-only">Icon description</span>
                                        </button>
                                        <button type="button" className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500 rotate-180">
                                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                                <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
                                            </svg>
                                            <span class="sr-only">Icon description</span>
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                        :
                        <span>Oops...Enroll To Any Course And Start Learning!</span>

                }
            </div>
        </div>
    )
}
