import React,{useState} from 'react'
import axios from 'axios'
import Link from 'next/link'
import toast, { Toast } from 'react-hot-toast'
import { useRouter } from 'next/router'

export default function ProfilePage() {
  const router = useRouter()
  const [data, setData] = useState("nothing")

  const getUserDetails = async () => {
    const res = await axios.post('/api/users/me') 
    console.log(res.data);
    setData(res.data._id)    
  }

  const logout = async () => {
    try {
      await axios.get('/api/users/logout')
      toast.success("logged out successfully")
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message)                  
    }
  }

  return (
    <div>Profile page</div>
  )
}

