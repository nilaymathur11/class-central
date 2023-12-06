import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Courses } from '../../constants/Courses';
import CourseCard from '../../components/cards/CourseCard/CourseCard';
import { useState } from 'react';

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  let [allCourses, setAllCourses] = useState(Courses);
  function searchCourses(query) {
    // Convert the query to lowercase for case-insensitive search
    const lowerCaseQuery = query.toLowerCase();

    // Filter courses based on the name containing the query
    const filteredCourses = Courses.filter(course =>
      course.name.toLowerCase().includes(lowerCaseQuery)
    );

    return filteredCourses;
  }
  let handleInput = (e) => {
    const inputValue = e.target.value.trim(); // Get the trimmed value from the input box
    const searchResults = searchCourses(inputValue);
    setAllCourses(searchResults);
  }
  return (
    <div className='md:max-w-[1350px] mx-auto px-[20px] pt-[50px] box-border'>
      <div className='mb-[50px]'>
        <div className='grid md:grid-cols-2 grid-cols-1 md:h-[500px] items-center mb-[50px]'>
          <div className='md:h-[500px]'><img src="https://ccweb.imgix.net/https%3A%2F%2Fwww.classcentral.com%2Fimages%2F%2Fillustrations%2Fhomepage-hero%2Fhero-christmas.png?auto=format&h=650&ixlib=php-4.1.0&s=315663eeaf9d103ebee969270f62c872" alt="course image" className='w-[100%] h-[100%]' /></div>
          <div className='font-bold md:text-[50px] text-[30px] text-center'>Find Your Next Course</div>
        </div>
        <div className='font-bold md:text-[35px] text-[22px] mb-[20px]'>Recommended Courses</div>
        <div className='md:overflow-x-visible overflow-x-hidden md:h-[auto] h-[350px]'>
          <Slider {...settings}>
            {
              Courses.length ?
                Courses.map((v, i) => {
                  if (i <= 5) {
                    return (
                      <CourseCard data={v} key={i} />
                    )
                  }
                })
                :
                null
            }
          </Slider>
        </div>
      </div>
      <div className='mb-[50px]'>
        <div className='font-bold md:text-[35px] text-[22px] mb-[20px]'>Courses We Offer</div>
        <div className='font-bold md:text-[25px] text-[20px] mb-[20px] text-center'>Find Your Course</div>
        <div>
          <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[500px] mx-[auto] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-[20px]" placeholder="Search Courses" onChange={handleInput} />
        </div>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-[25px]'>
          {
            allCourses.length ?
              allCourses.map((v, i) => {
                return (
                  <CourseCard data={v} key={i} fromMain={true} />
                )
              })
              :
              <div className='font-bold md:text-[25px] text-[20px] mb-[20px] text-center'>Course Not Available...</div>
          }
        </div>
      </div>
    </div>
  )
}
