import * as THREE from 'three'
import { useRef, useReducer, useMemo ,useEffect } from 'react'

import './App.css'

import { Routes, Route, useLocation } from 'react-router-dom'

import LocomotiveScroll from 'locomotive-scroll'

import Home from './pages/OtherPages/Home'
import Contact from './pages/OtherPages/Contact'
import Projects from './pages/OtherPages/Projects'
import Layout from './Layout'
import { AnimatePresence, motion } from 'framer-motion'

export default function App(props) {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'), // Ensure you have a container with `data-scroll-container`
      smooth: true,
    });

    return () => {
      locomotiveScroll.destroy(); // Cleanup LocomotiveScroll on unmount
    };
  }, []);
  const text = useRef(null)
  const location =  useLocation()
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PagrWraper>
                  <Home />
                </PagrWraper>
              }
            />
            <Route
              path="Projects"
              element={
                <PagrWraper>
                  <Projects />
                </PagrWraper>
              }
            />
            <Route
              path="Contact"
              element={
                <PagrWraper>
                  <Contact />
                </PagrWraper>
              }
            />
          </Route>
        </Routes>
      </AnimatePresence>

      {/* <VariableFontGsap /> */}
    </>
  )
}

function PagrWraper({ children }) {
  return (
    <motion.div  className="">
      {children}
    </motion.div>
  )
}

