import React from 'react'
import { Link, Links } from 'react-router-dom'
import icon from "./icoon.svg" 
const NavBar = () => {
  return (
    <div className=' font-[f2]  text-white text-sm w-[94%] absolute top-0 left-1/2 transfrom -translate-x-1/2  h-[5vw]  z-20 grid grid-cols-12 text-[.7vw]'>
      
      <div className="col-span-1 col-start-1 flex items-end text-xl leading-none">root <br /> Pik@chu</div>
      
      <div className="col-span-4 col-start-4 justify-end flex flex-col ">
         <p className='opacity-60'>Available for Freelance</p>
         <p className=''>SahilSaundale@gmail.com</p>
      </div>
      
      <div className="col-span-1 col-start-8 justify-end flex flex-col">
         <p>Figma Design ,React Js, GSAP, Algorithms, FramerMotion</p>
      </div>

      <div className="w-[100%] h-full col-span-2 relative col-start-12">
      <ul className='flex flex-col justify-end h-full'>
         <li className='flex w-full gap-2 items-center '>
            <Link to={'/'}>Home </Link> 
           
            <img src={icon} alt="" />
         </li>
         <li className='flex w-full gap-2 items-center '>

            <Link to={'/Contact'}>Contact</Link>
            <img src={icon} alt="" />
         </li>
         <li className='flex w-full gap-2 items-center '>

            <Link to={'/Projects'}>Projects</Link>
            <img src={icon} alt="" />
         </li>
     
      </ul>
      </div>
    </div>
  )
}

export default NavBar
