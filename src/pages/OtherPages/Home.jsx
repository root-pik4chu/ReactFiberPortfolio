import React from 'react'
import '../../App.css'
import PageOne from '../PageOne'
import NavBar from './NavBar'
import Footer from './Footer'
import { easeIn, motion } from 'framer-motion'

const Home = () => {
  return (
    
    <div>
      <div className=" text-zinc-200 ">
        <div className="wrapperForPageOne w-full relative ">
          <div className="w-full">
            <PageOne />
           <div className=" overlay absolute w-full h-full ">
           
<div className="absolute  top-[35vh] left-[3vw]">
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{duration:1, easings:easeIn}}
            className="">
            <h1 className='text-[6vw] font-medium font-[f3] mix-blend-difference'>Creative</h1>
            <h1 className='text-[6vw]  relative bottom-15 tracking-tight font-medium font-[f4] mix-blend-difference'>Developer</h1>
            </motion.div>
           </div>
            <div className=" absolute top-[42vh] w-[20%] font-[f2]  left-[75vw] ">
              <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                transition={{duration:1 , easings:easeIn}}
                
              className=" text-[.7vw] font-300 leading-none ">
                <h1 className=" leading-tight  mix-blend-difference">
                  Hi! I'm Maharashtraian-based
                  <strong className=""> creative web developer</strong> and
                  <strong className=""> web designer</strong>.
                </h1>

                <br />
                <h1 className="  leading-tight  mix-blend-difference">
                  I started as a competitive coder and Java developer 1 year ago, but my passion lies in the creative field <strong> UI/UX work, development,</strong> and <strong>creating</strong> ,something that fulfills the user condition.
                </h1>
              </motion.div>
            </div>
           </div>
           <div className="footer relative w-full">
            <Footer />
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}




export default Home
