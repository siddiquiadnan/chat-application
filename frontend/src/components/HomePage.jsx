import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import MessageContainer from './MessageContainer'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const HomePage = () => {
  const { authUser } = useSelector(store => store.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!authUser) {
      navigate("/login");
    }
  }, []);
  return (
    <div className='flex sm:h-[450px] md:h-[650px]  md:w-[900px] cursor-pointer group overflow-hidden  bg-black/10 shadow-lg ring-1 ring-black/5 rounded-xl    '   >
        
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default HomePage