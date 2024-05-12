import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Typography, Button } from '@material-tailwind/react'
import loading from '../assets/loading.gif'
const ClassDetail = () => {
    const [students, setStudents] = useState([])
    const [teachers, setTeachers] = useState([])
    const [ClassDetail, setClassDetail] = useState([])
    const { id } = useParams()
    const url = import.meta.env.VITE_BACKEND_URL
    // console.log(id)

    const fetchClass = async () => {
        try {
            const response = await fetch(`${url}/class/details/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    setClassDetail(data)
                })
        } catch (error) {
            console.error('Error fetching class details:', error);
        }
    }

    //getting teachers
    const fetchTeachers = async () => {
        try {
            const response = await fetch(`${url}/teacher/getTeacher/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((res) => res.json())
                .then((data) => {
                    setTeachers(data)
                })
        } catch (error) {
            console.error('Error fetching class details:', error);
        }
    }

    //getting student details
    const fetchStudents = async () => {

        try {
            await fetch(`${url}/student/getstudents/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((res) => res.json())
                .then((data) => {
                    // console.log(data)
                    setStudents(data)
                })
        } catch (err) {
            console.log(err)
        }


    }

    useEffect(() => {
        fetchClass()
        fetchTeachers()
        // fetchStudents()
    }, [id, url])
    // console.log(ClassDetail.length)
    return (
        <div className='flex flex-col w-screen items-center p-10'>
            <Typography className='text-4xl'>
                {ClassDetail.length > 0 ? <span>Grade: {ClassDetail[0].classNumber} '{ClassDetail[0].section}'</span> : <>Loading</>}
            </Typography>
            <div className='flex  justify-evenly w-screen  gap-4 mt-20 p-10'>
                <div className='w-[50%] flex flex-col items-center gap-5'>
                    <Typography className='text-3xl'>Students</Typography>
                    {students.length > 0 ?
                        students.map((student, key) =>
                            <div className='flex w-full px-5 rounded-lg shadow-md justify-evenly' key={key}>
                                <Typography className='flex flex-col p-10'>
                                    <span>Name : {student.name}</span>
                                    <span>Age : {student.age}</span>
                                    <span>Email:{student.email}</span>
                                    <span>Password:{student.password}</span>
                                </Typography>
                            </div>
                        ) :
                        <div className='flex items-center justify-center'>
                            <img src={loading} className='w-10 h-10' />
                            <Typography className='text-xl '>Loading</Typography>
                        </div>
                    }
                 </div>

                <div className='w-[50%]  flex flex-col items-center gap-5'>
                    <Typography className=' text-3xl'>Teachers</Typography>
                    {teachers.map((teacher, key) =>
                        <div className='flex w-full px-5 rounded-lg shadow-md justify-evenly' key={key}>
                            <Typography className='flex flex-col p-10'>
                                <span>Name : {teacher.name}</span>
                                <span>Age : {teacher.age}</span>
                                <span>Email:{teacher.email}</span>
                                <span>Password:{teacher.password}</span>
                            </Typography>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ClassDetail