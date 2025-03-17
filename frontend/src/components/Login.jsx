import React, { useState } from 'react';  
import { Link, useNavigate } from 'react-router-dom';  
import toast from "react-hot-toast";  
import axios from "axios";  
import { useDispatch } from "react-redux";  
import { setAuthUser } from '../redux/userSlice';  
import { BASE_URL } from '..';  
import loginImg from '../components/authentication.gif';  

const Login = () => {  
  const [user, setUser] = useState({  
    username: "",  
    password: "",  
  });  
  const [showPassword, setShowPassword] = useState(false);  
  const dispatch = useDispatch();  
  const navigate = useNavigate();  

  const onSubmitHandler = async (e) => {  
    e.preventDefault();  
    try {  
      const res = await axios.post(`${BASE_URL}/api/v1/user/login`, user, {  
        headers: {  
          'Content-Type': 'application/json'  
        },  
        withCredentials: true  
      });  
      navigate("/");  
      console.log(res);  
      dispatch(setAuthUser(res.data));  
    } catch (error) {  
      toast.error(error.response.data.message);  
      console.log(error);  
    }  
    setUser({  
      username: "",  
      password: ""  
    });  
  };  

  return (  
    <div className="min-w-96 mx-auto flex">  
      <div className='w-full p-12 rounded-lg shadow-md bg-slate-900 bg-clip-padding backdrop-filter backdrop-blur-md shadow-lg border-gray-100'>  
        <h1 className='text-3xl font-bold text-center text-white'>Login</h1>  
        <form onSubmit={onSubmitHandler}>  
          <div>  
            <label className='label p-2'>  
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
            <label className='label p-2'>  
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
                className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent text-white'>  
                {showPassword ? "Hide" : "Show"}  
              </button>  
            </div>  
          </div>  
          <p className='text-center my-2 text-green-300'>Don't have an account? <Link to="/signup"> signup </Link></p>  
          <div>  
            <button type="submit" className='"cursor-pointer inline-flex items-center rounded-full px-32 ml-2 py-3 text-xl font-mono font-semibold text-rose-600 hover:text-white border-2 border-rose-600 hover:bg-rose-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 hover:bg-rose-600 duration-300 focus:bg-transparent"'>Login</button>  
          </div>  
        </form>  
      </div>  
      <div className="w-full p-12 rounded-lg shadow-md bg-slate-900">  
        <img className="object-contain min-h-0 h-full w-52" src={loginImg} alt="Login" />  
      </div>  
    </div>  
  );  
};  

export default Login;