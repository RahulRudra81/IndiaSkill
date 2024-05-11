import {React,useEffect,useState} from 'react'
import Nav from '../components/Navbar'
import { Typography,Button } from '@material-tailwind/react'
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Admin = () => {
  const [grades,setGrades]=useState([])
  const url=import.meta.env.VITE_BACKEND_URL
  const res=async()=>{
    
    await fetch(`${url}/class/`,{
        method:"GET",
      })
      .then((res)=>res.json())
      .then((data)=>{
        setGrades(data)
      })
      .catch((err)=> console.log(err))
  }
  useEffect(()=>{
    res()
    
  },[])
  return (
    <div>
      <Nav/>
      <div className='flex flex-col w-screen items-center gap-4 mt-20 p-10'>
          {grades.map((grade,key)=>
            <div className='flex w-[90%] px-5 rounded-lg shadow-md justify-evenly' key={key}>
              <Typography className='flex flex-col  gap-5 items-center justify-center  font-medium p-10'>
                <div className='flex flex-row gap-4'><span>Grade :</span><span>{grade.classNumber}</span></div>
                <div className='flex flex-row gap-4'><span>Section :</span><span>{grade.section}</span></div>
                
              </Typography>
              <Typography className='flex flex-col gap-5 items-center justify-center  font-medium p-10'>
                <div className='flex flex-row gap-4'> 
                  <span>Number of Students :</span>
                  <span>{grade.students.length}</span>
                </div>
                <div className='flex flex-row gap-4'> 
                  <span>Number of Teachers :</span>
                  <span>{grade.teachers.length}</span>
                </div>
              </Typography>
              <div className='flex items-center '>
              <Link to={`/class/${grade._id}`}>
               <Button >
                  <FaArrowAltCircleRight  className='text-xl'/>
                </Button>
              </Link>
              </div>
            </div>
          )}
      </div>
    </div>
  )
}

export default Admin