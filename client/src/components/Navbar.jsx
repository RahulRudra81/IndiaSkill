import {React,useEffect,useState} from "react";
import {
  Navbar,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router";

const Nav = () => {
    const navigate=useNavigate()
    const type=localStorage.getItem('type')
    
    useEffect(()=>{
        const token=localStorage.getItem('token')
        if(!token){
            navigate('/')
        }
        else{
            const type=localStorage.getItem('type')
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
    },[])
    const handleLogout=()=>{
      localStorage.clear()
      navigate('/')
    }
    
    
  return (
    <Navbar className="mx-auto w-full text-blue-gray-900 flex items-center justify-between">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          {type}
        </Typography>
        <div className="flex items-center">
          {/* <Button variant="text" size="sm" className="hidden lg:inline-block">
            <span>Log In</span>
          </Button> */}
          <Button
            variant="gradient"
            size="sm"
            onClick={handleLogout}
          >
            <span>Log out</span>
          </Button>
        </div>
    </Navbar>
  )
}

export default Nav