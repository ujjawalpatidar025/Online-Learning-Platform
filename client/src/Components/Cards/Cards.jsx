import { Box } from '@material-ui/core'
import React from 'react'
import MediaCard from './Card'

const courses=[
  {
    img:"/CoursesImg/maxresdefault.jpg",
    title:"Python Course",
    discription:"Python is one of the most demanded programming languages in the job market. Surprisingly, it is equally easy to learn and master Python. Let's commit our 100 days of code to python!",
    channel:"Code With Harry"
  },
  {
    img:"/CoursesImg/Data-Science-Courses.png",
    title:"Data Science Course",
    discription:"Python is one of the most demanded programming languages in the job market. Surprisingly, it is equally easy to learn and master Python. Let's commit our 100 days of code to python!",
    channel:"Code With Harry"
  },
  {
    img:"/CoursesImg/c++-course.png",
    title:"C++ Course",
    discription:"Python is one of the most demanded programming languages in the job market. Surprisingly, it is equally easy to learn and master Python. Let's commit our 100 days of code to python!",
    channel:"Code With Harry"
  },
  {
    img:"/CoursesImg/maxresdefault.jpg",
    title:"Python Course",
    discription:"Python is one of the most demanded programming languages in the job market. Surprisingly, it is equally easy to learn and master Python. Let's commit our 100 days of code to python!",
    channel:"Code With Harry"
  },
  {
    img:"/CoursesImg/Data-Science-Courses.png",
    title:"Data Science Course",
    discription:"Python is one of the most demanded programming languages in the job market. Surprisingly, it is equally easy to learn and master Python. Let's commit our 100 days of code to python!",
    channel:"Code With Harry"
  },
  {
    img:"/CoursesImg/c++-course.png",
    title:"C++ Course",
    discription:"Python is one of the most demanded programming languages in the job market. Surprisingly, it is equally easy to learn and master Python. Let's commit our 100 days of code to python!",
    channel:"Code With Harry"
  },
  {
    img:"/CoursesImg/maxresdefault.jpg",
    title:"Python Course",
    discription:"Python is one of the most demanded programming languages in the job market. Surprisingly, it is equally easy to learn and master Python. Let's commit our 100 days of code to python!",
    channel:"Code With Harry"
  }
]

const Cards = () => {
  return (
    <Box width={1} style={{ padding: '0', margin: '0',marginTop:"10vh", height:"90vh",display:"flex", justifyContent:"center", alignItems:"center", gap:"60px", flexWrap:"wrap"}}>
      {
        
        courses.map((item, index)=>{
           return <MediaCard id={index} image={item.img} {...item}/>
        })
      }

    </Box>
  )
}

export default Cards