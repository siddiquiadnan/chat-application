import React, { useState } from 'react';  
import { Link, useNavigate } from 'react-router-dom';  
import axios from "axios";  
import toast from "react-hot-toast";  
import { BASE_URL } from '..';  
import singupImg from '../components/singuplogo.png';  
import './styles.css';




const Signup = () => {  
  const [user, setUser] = useState({  
    fullName: "",  
    username: "",  
    password: "",  
    confirmPassword: "",  
    gender: "",  
  });  
  
  const [showPassword, setShowPassword] = useState(false);  
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);  
  
  const navigate = useNavigate();  

  const handleCheckbox = (gender) => {  
    setUser({ ...user, gender });  
  }  

  const onSubmitHandler = async (e) => {  
    e.preventDefault();  
    try {  
      const res = await axios.post(`${BASE_URL}/api/v1/user/register`, user, {  
        headers: {  
          'Content-Type': 'application/json'  
        },  
        withCredentials: true  
      });  
      if (res.data.success) {  
        navigate("/login");  
        toast.success(res.data.message);  
      }  
    } catch (error) {  
      toast.error(error.response.data.message);  
      console.log(error);  
    }  
    setUser({  
      fullName: "",  
      username: "",  
      password: "",  
      confirmPassword: "",  
      gender: "",  
    });  
  }  

  return (  
    <div className="min-w-96 mx-auto flex">  
      <div className='w-full p-10 rounded-lg shadow-md bg-slate-900 bg-clip-padding backdrop-filter backdrop-blur-md'>  
        <h1 className='text-3xl font-bold text-center text-white'>Signup</h1>  
        <form onSubmit={onSubmitHandler}>  
          <div>  
            <label className='label p-1.5'>  
              <span className='text-base label-text text-white'>Full Name</span>  
            </label>  
            <input  
              value={user.fullName}  
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}  
              className='w-full input input-bordered h-10'  
              type="text"  
              placeholder='Full Name' />  
          </div>  
          <div>  
            <label className='label p-1.5'>  
              <span className='text-base label-text text-white'>Username</span>  
            </label>  
            <input  
              value={user.username}  
              onChange={(e) => setUser({ ...user, username: e.target.value })}  
              className='w-full input input-bordered h-10'  
              type="text"  
              placeholder='Username' />  
          </div>  
          <div>  
            <label className='label p-1.5'>  
              <span className='text-base label-text text-white'>Password</span>  
            </label>  
            <div className="relative">  
              <input  
                value={user.password}  
                onChange={(e) => setUser({ ...user, password: e.target.value })}  
                className='w-full input input-bordered h-10'  
                type={showPassword ? "text" : "password"}  
                placeholder='Password' />  
              <button  
                type="button"  
                onClick={() => setShowPassword(!showPassword)}  
                className='absolute right-2 top-1/2 transform -translate-y-1/2 text-white'>  
                {showPassword ? "Hide" : "Show"}  
              </button>  
            </div>  
          </div>  
          <div>  
            <label className='label p-1.5'>  
              <span className='text-base label-text text-white'>Confirm Password</span>  
            </label>  
            <div className="relative">  
              <input  
                value={user.confirmPassword}  
                onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}  
                className='w-full input input-bordered h-10'  
                type={showConfirmPassword ? "text" : "password"}  
                placeholder='Confirm Password' />  
              <button  
                type="button"  
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}  
                className='absolute right-2 top-1/2 transform -translate-y-1/2 text-white'>  
                {showConfirmPassword ? "Hide" : "Show"}  
              </button>  
            </div>  
          </div>  
          <div className='flex items-center my-4'>  
            <div className='flex items-center'>  
              <p className='text-white'>Male</p>  
              <input  
                type="checkbox"   
                checked={user.gender === "male"}  
                onChange={() => handleCheckbox("male")}  
                className="checkbox mx-1.5 bg-slate-800" />  
            </div>  
            <div className='flex items-center'>  
              <p className='text-white'>Female</p>  
              <input  
                type="checkbox"   
                checked={user.gender === "female"}  
                onChange={() => handleCheckbox("female")}  
                className="checkbox mx-1.5 bg-slate-800" />  
            </div>  
          </div>  
          <p className='text-center my-1.5 text-green-300'>Already have an account? <Link to="/login"> login </Link></p>  
          <div>  
            <button type='submit' className='"cursor-pointer inline-flex items-center rounded-full px-28 ml-2 py-2 text-xl font-mono font-semibold text-rose-600 hover:text-white border-2 border-rose-600 hover:bg-rose-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 hover:bg-rose-600 duration-300 focus:bg-transparent"'>Signup</button>  
          </div>  
        </form>  
      </div>  

      <div className="w-full p-16 rounded-r-lg shadow-md bg-slate-900">  
        <img className="w-72 object-contain min-h-2 h-full" src={singupImg} alt="Signup" />  
      </div>  
    </div>  
  );  
}  

export default Signup;