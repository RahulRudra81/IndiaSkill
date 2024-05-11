import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Typography, Button } from '@material-tailwind/react'
const ClassDetail = () => {
    const [students, setStudents] = useState([])
    const [studentId, setStudentId] = useState([])
    const [teachers, setTeachers] = useState([])
    const [teacherId, setTeacherId] = useState([])

    const { id } = useParams()
    const url = import.meta.env.VITE_BACKEND_URL
    // console.log(id)

    //getting class details

    const res = async () => {
        try {
            const response = await fetch(`${url}/class/details/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch class details');
            }

            const data = await response.json();
            // console.log(data)
            setStudentId(data[0].students);
            setTeacherId(data[0].teachers);
        } catch (error) {
            console.error('Error fetching class details:', error);
        }
    }

    //getting student details
    const fetchStudent = () => {
        const studentDetailPromises = studentId.map(async (student) => {
            try {
                 await fetch(`${url}/student/details/${student}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }).then((res)=>res.json())
                .then((data)=>{
                    console.log(data)
                    return data
                })
            } catch (err) {
                console.log(err)
            }
        })
        const allStudentDetails= Promise.all(studentDetailPromises)
        setStudents(allStudentDetails);
    }

    useEffect(() => {
        res()
        
    }, [id, url])
    console.log(students)
    return (
        <div>
        fgnmeoslmf
            <div className='flex flex-col w-screen items-center gap-4 mt-20 p-10'>
                {/* {students.map((student, key) =>
                    <div className='flex w-[90%] px-5 rounded-lg shadow-md justify-evenly' key={key}>
                        {student}
                    </div>
                )} */}
            </div>
        </div>
    )
}

export default ClassDetail