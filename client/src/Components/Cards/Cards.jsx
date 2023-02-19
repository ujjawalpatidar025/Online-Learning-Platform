import { Box } from '@material-ui/core'
import React from 'react'
import MediaCard from './Card'
// import i1 from '../../Images/1.png';
import py from './CoursesImg/maxresdefault.jpg'

const courses=[
  {
    img:{py},
    title:"Python Course",
    discription:"Python is one of the most demanded programming languages in the job market. Surprisingly, it is equally easy to learn and master Python. Let's commit our 100 days of code to python!",
    channel:"Code With Harry"
  },
  {
    img:{py},
    title:"Python Course",
    discription:"Python is one of the most demanded programming languages in the job market. Surprisingly, it is equally easy to learn and master Python. Let's commit our 100 days of code to python!",
    channel:"Code With Harry"
  },
  {
    img:{py},
    title:"Python Course",
    discription:"Python is one of the most demanded programming languages in the job market. Surprisingly, it is equally easy to learn and master Python. Let's commit our 100 days of code to python!",
    channel:"Code With Harry"
  },
  {
    img:{py},
    title:"Python Course",
    discription:"Python is one of the most demanded programming languages in the job market. Surprisingly, it is equally easy to learn and master Python. Let's commit our 100 days of code to python!",
    channel:"Code With Harry"
  },
  {
    img:{py},
    title:"Python Course",
    discription:"Python is one of the most demanded programming languages in the job market. Surprisingly, it is equally easy to learn and master Python. Let's commit our 100 days of code to python!",
    channel:"Code With Harry"
  },
  {
    img:{py},
    title:"Python Course",
    discription:"Python is one of the most demanded programming languages in the job market. Surprisingly, it is equally easy to learn and master Python. Let's commit our 100 days of code to python!",
    channel:"Code With Harry"
  },
  {
    img:{py},
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
           return <MediaCard id={index} {...item}/>
        })
      }
{/*       
      
      
      <MediaCard/>
      <MediaCard/>
      <MediaCard/>
      <MediaCard/> */}

    </Box>
  )
}

export default Cards