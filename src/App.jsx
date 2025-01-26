import * as THREE from 'three'
import { useRef, useReducer, useMemo } from 'react'

import './App.css'

import {Routes , Route} from "react-router-dom"

import LocomotiveScroll from 'locomotive-scroll'

import Home from './pages/OtherPages/Home'
import Contact from './pages/OtherPages/Contact'
import Projects from './pages/OtherPages/Projects'
import Layout from './Layout'


export default function App(props) {
  const locomotiveScroll = new LocomotiveScroll()
  const text = useRef(null)

 

  return (
    <>
     
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element = {<Home />} />
          <Route path='Projects' element = {<Projects />} />
          <Route path='Contact' element = {<Contact />} />
        </Route>
      </Routes>
      {/* <VariableFontGsap /> */}
      
    </>
  )
}
