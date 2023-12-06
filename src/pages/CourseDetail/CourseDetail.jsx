import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Courses } from '../../constants/Courses';
import { useDispatch, useSelector } from 'react-redux';
import { addCourse } from '../../redux/slices/CourseSlice/CourseSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CourseDetail() {
    const { id } = useParams();
    const dispatch = useDispatch()
    let CoursesAdded = useSelector(state => state.courses)
    let [courseData, setCourseData] = useState(null);
    let [syllabus, setSyllabus] = useState(false);
    let [alreadyEnrolled, setAlreadyEnrolled] = useState(false);

    useEffect(() => {
        let oneCourse = Courses.filter((v) => v?.id === Number(id));
        setCourseData(oneCourse[0]);
        checkEnrolled();
    }, [id])

    let checkEnrolled = ()=>{
        const isExist = CoursesAdded.filter((v)=>v?.id === Number(id))
        if(isExist.length){
            setAlreadyEnrolled(true)
        }else{
            setAlreadyEnrolled(false)
        }
    }

    let checkCourse = ()=>{
        const isExist = CoursesAdded.filter((v)=>v?.id === Number(id))
        if(!isExist.length){
            dispatch(addCourse(courseData))
            toast.success('Enrolled!')
            setAlreadyEnrolled(true)
        }else{
            toast.error('Already Enrolled To The Course!')
            setAlreadyEnrolled(false)
        }
    }
    return (
        <div className='md:max-w-[1150px] mx-auto px-[20px] pt-[12px] box-border'>
            <ToastContainer />
            <div>
                <img src="https://ccweb.imgix.net/https%3A%2F%2Fwww.classcentral.com%2Freport%2Fwp-content%2Fuploads%2F2023%2F12%2Fbcg_guitar_banner.png?auto=format&ixlib=php-4.1.0&w=300&s=2da5b394851f7d45d07a11188c5b13df" alt="course image" className='md:h-[600px] h-[200px] object-cover cursor-pointer rounded-md w-[100%]' />
            </div>
            <div className='mt-[6px]'>
                <span className='text-[#0a2540] me-[12px]'>{courseData?.instructor}</span>
                <span className='text-[#6f7074]'>Dec 4th, 2023</span>
            </div>
            <div className='font-bold mt-[6px] md:text-[35px] text-[20px] text-[#0a2540]'>
                {courseData?.name}
            </div>
            <div className='font-bold md:mt-[50px] mt-[25px] md:text-[25px] text-[18px] bg-[#0a2540] rounded-md w-[300px] py-[12px] text-center text-[#009fff] shadow-md mb-[25px] cursor-pointer' onClick={checkCourse}>
                {alreadyEnrolled?'Enrolled':'Enroll Now'}
            </div>
            <div className='font-bold md:mt-[50px] mt-[25px] md:text-[30px] text-[18px] text-[#0a2540]'>
                About Course :
            </div>
            <div className='mt-[6px] ms-[12px] md:text-[20px] text-[18px] text-[#0a2540]'>
                {courseData?.description}
            </div>
            <div className='font-bold md:mt-[50px] mt-[25px] md:text-[30px] text-[18px] text-[#0a2540]'>
                Enrollment Status :
            </div>
            <div className='mt-[6px] ms-[12px] md:text-[20px] text-[18px] text-[#0a2540] font-bold'>
                {
                    courseData?.enrollmentStatus === 'Open' ?
                        <span className='text-[green]'>{courseData?.enrollmentStatus}</span>
                        :
                        <span className='text-[red]'>{courseData?.enrollmentStatus}</span>
                }
            </div>
            <div className='font-bold md:mt-[50px] mt-[25px] md:text-[30px] text-[18px] text-[#0a2540]'>
                Course Duration :
            </div>
            <div className='mt-[6px] ms-[12px] md:text-[20px] text-[18px] text-[#0a2540]'>
                {courseData?.duration}
            </div>
            <div className='font-bold md:mt-[50px] mt-[25px] md:text-[30px] text-[18px] text-[#0a2540]'>
                Course Schedule :
            </div>
            <div className='mt-[6px] ms-[12px] md:text-[20px] text-[18px] text-[#0a2540]'>
                {courseData?.schedule}
            </div>
            <div className='font-bold md:mt-[50px] mt-[25px] md:text-[30px] text-[18px] text-[#0a2540]'>
                Course Location :
            </div>
            <div className='mt-[6px] ms-[12px] md:text-[20px] text-[18px] text-[#0a2540]'>
                {courseData?.location}
            </div>
            <div className='font-bold md:mt-[50px] mt-[25px] md:text-[30px] text-[18px] text-[#0a2540]'>
                What You Should Know Before Joining This Course ?
            </div>
            <div className='mt-[6px] ms-[12px] md:text-[20px] text-[18px] text-[#0a2540]'>
                {
                    courseData?.prerequisites?.length ?
                        courseData?.prerequisites.map((v, i) => {
                            return (
                                <li className='mb-[6px] ms-[12px]' key={i}>{v}</li>
                            )
                        })
                        :
                        null
                }
            </div>
            <div className='font-bold md:mt-[50px] mt-[25px] md:text-[25px] text-[18px] bg-[#0a2540] rounded-md w-[300px] py-[12px] text-center text-[#009fff] shadow-md mb-[25px] cursor-pointer' onClick={()=>setSyllabus(!syllabus)}>
                View Syllabus
            </div>
            <div className='mt-[6px] ms-[12px] md:text-[20px] text-[18px] text-[#0a2540]'>
                {
                    syllabus&&courseData?.syllabus?.length ?
                        courseData?.syllabus.map((v,i) => {
                            return (
                                <div className='mb-[25px] ms-[12px]' key={i}>
                                    <div className='font-bold'>Week : {v?.week}</div>
                                    <div>Topic : {v?.topic}</div>
                                    <div>Content : {v?.content}</div>
                                </div>
                            )
                        })
                        :
                        null
                }
            </div>
        </div>
    )
}
