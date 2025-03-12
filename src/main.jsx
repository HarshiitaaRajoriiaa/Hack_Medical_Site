import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider , Route} from 'react-router-dom'
import Layout from './Layout'
import Login from './Component/Login'
import About from './Component/About'
import Home from './Component/Home'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/about' element={<About/>} />
      <Route path='/login' element={<Login/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router}/>
    
  </StrictMode>,
)
