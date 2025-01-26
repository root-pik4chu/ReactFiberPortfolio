import React from 'react'
import '../../App.css'
import PageOne from '../PageOne'
import NavBar from './NavBar'

const Home = () => {
  return (
    <div>
      <div className=" text-zinc-200">
        <div className="wrapperForPageOne w-full relative bg-red-400">
          <div className="w-full">
            <PageOne />
           <div className=" overlay absolute w-full h-full ">
           
<div className="absolute  top-[35vh] left-[3vw]">
            <div className="">
            <h1 className='text-[6vw] font-medium font-[f3]'>Creative</h1>
            <h1 className='text-[6vw]  relative bottom-15 tracking-tight font-medium font-[f4] mix-blend-difference'>Developer</h1>
            </div>
           </div>
            <div className=" absolute top-[42vh] w-[20%] font-[f2]  left-[75vw] ">
              <div className=" text-[.7vw] font-300 leading-none opacity-70">
                <p class=" leading-tight  mix-blend-difference">
                  Hi! I'm Maharashtraian-based
                  <strong class=""> creative web developer</strong> and
                  <strong class=""> web designer</strong>.
                </p>

                <br />
                <p class="  leading-tight  mix-blend-difference">
                  I started as a competitive coder and Java developer 1 year ago, but my passion lies in the creative field <strong> UI/UX work, development,</strong> and <strong>creating</strong> ,something that fulfills the user condition.
                </p>
              </div>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}




export default Home
