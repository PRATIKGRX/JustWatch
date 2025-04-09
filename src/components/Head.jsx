import React from 'react'
import { TbMessageDots } from "react-icons/tb";
import { FaBell } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
const Head = () => {
  return (
    <div className='border-b-2'>
        <div className='flex justify-between px-10 py-5 text-xl font-bold '>
            <div>
                <p className=''>Demo Here will be Name and something</p>
            </div>
            <div className='flex gap-2'>
                <input type="text" />
                <button><TbMessageDots /></button>
                
                <button><FaBell /></button>
                <button><FiUser /></button>
                
            </div>
        </div>
    </div>
  )
}

export default Head
