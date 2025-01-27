import React, { useEffect, useState } from 'react'




const Footer = () => {

   const [time , setTime] = useState(new Date());

   useEffect(()=>{
      const timer = setInterval(()=>{
         setTime(new Date());
      },1000)

      return ()=> clearInterval(timer)
   },[])


  return (
    <>

   <div className="w-[94%] h-[10vh] font-[f2]  relative top-[85vh] left-1/2 transform -translate-x-1/2 grid grid-cols-12 text-[.8vw] items-end">
   <div className="col-span-2  col-start-1">
    <p className="text-[0.9vw] ">Local Time {time.toLocaleTimeString()}</p>
  </div>
  
  <div className="col-span-2 col-start-4 ">
    
    <p>LinkedIn</p>
    <p>GitHub</p>
    <p>LeetCode</p>
   
  </div>
 
  <div className="col-span-2 col-start-12 ">
  <p>&copy; 2025 Root</p>
  </div>
  
   </div>


{/* <div className="font-[f2] bg-pink-300 text-white w-[94%] relative top-[85vh] left-1/2 transform -translate-x-1/2 h-[5vw] z-20 grid grid-cols-12 text-[.7vw] items-center">
 
  <div className="col-span-2 bg-red-500 col-start-1">
    <p className="text-[0.9vw]">Local Time {time.toLocaleTimeString()}</p>
  </div>

 
  <div className="col-span-2 col-start-8 ">
    <p className="opacity-60">Available for Freelance</p>
    <p className="font-semibold">SahilSaundale@gmail.com</p>
  </div>

  
  <div className="col-span-2 col-start-4 bg-red-400">
    
    <p>LinkedIn</p>
    <p>GitHub</p>
    <p>LeetCode</p>
   
  </div>
</div> */}
    </>
  )
}

export default Footer
