import {React,useState,useEffect} from 'react'
import {
  Select,
  Option,
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


const Landing = () => {
  const navigate=useNavigate()
  const [option,setOption]=useState("student")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const url=import.meta.env.VITE_BACKEND_URL
  const handleEmail=(e)=>{
    setEmail(e.target.value)
  }
  const handlePassword=(e)=>{
    setPassword(e.target.value)
  }
  const handleSubmit=async()=>{
    const res= await fetch(`${url}/auth/`,{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email:email,
        password:password,
        type:option
      })
    }).then((res)=>res.json())
    .then((result)=>{
      if(result.status==="OK"){
        toast.success("Login Succesful")
        localStorage.setItem('token' ,result.token)
        localStorage.setItem('type',result.type)
        if(option==='student'){
          navigate('/student')
        }
        if(option==='teacher'){
          navigate('/teacher')
        }
        if(option==='admin'){
          navigate('/admin')
        }
      }else{
        toast.warning("Please check your creadentials.")
      }
    }).catch((err)=>{
      toast.error("User doesn't exist")
      console.log(err)
    })
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token != null){
      const type= localStorage.getItem('type')
      if(type==='student'){
        navigate('/student')
      }
      if(type==='teacher'){
        navigate('/teacher')
      }
      if(type==='admin'){
        navigate('/admin')
      }
    }
  }, [])
  return (
    <div className='flex bg-gray-100 h-screen w-screen justify-center items-center'>
      <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      transition: Bounce
      theme="dark"
    />
      <Card className='p-10' shadow={true}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to login.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              type='email'
              onChange={handleEmail}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handlePassword}
            />
            <div className="flex w-72 flex-col gap-6">
      <Select 
        size="md" 
        label="Who are you?"
        value={option}
        onChange={(value)=>setOption(value)}
        // variant='outlined'
      >
        <Option value='admin'>Admin</Option>
        <Option value='student'>Student</Option>
        <Option value='teacher'>Teacher</Option>
      </Select>
      </div>
            
          </div>
          <Button onClick={handleSubmit} className="mt-6" fullWidth>
            Sign in
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="#" className="font-medium text-gray-900">
              Sign In
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  )
}

export default Landing