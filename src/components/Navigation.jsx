/*-------------------------------------------------------------------
|  🐼 React FC Navigation
|
|  🐯 Purpose: TOP NAVIGATION BAR
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import React from 'react'
import { BsGithub, BsTwitter } from 'react-icons/bs'

export const NavButton = () => {
  return (
    <span className="absolute text-white text-4xl top-5 left-4 cursor-pointer" onClick={Openbar}>
      <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
    </span>
  )
}

export const Navigation = () => {


  return (
    <div className="sidebar fixed z-50 top-0 bottom-0 lg:left-0 left-[-300px] duration-1000
    p-2 w-[300px] overflow-y-auto text-center bg-gray-900 shadow h-screen">
      <div className="text-gray-100 text-xl">
        <div class="p-2.5 mt-1 flex flex-col items-center rounded-md ">
          <i className="bi bi-x ml-20 cursor-pointer lg:hidden" onClick={Openbar}></i>
          <i className="bi bi-person-fill px-2 py-1 text-8xl bg-blue-600 rounded-full"></i>
          <h1 className="text-[15px] mt-3  ml-3 text-xl text-gray-200 font-bold">Admin Name</h1>
          
        </div>

        <div className="text-ml ml-3 text-left">Admin</div>
        <div>
          <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
            <i className="bi bi-house-door-fill"></i>
            <span className="text-[15px] ml-4 text-gray-200">Dashboard</span>
          </div>
          <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
            <i className="bi bi-mortarboard text-gray-400"></i>
            <span className="text-[15px] ml-4 text-gray-400">Estudiantes</span>
          </div>

          <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
            <i className="bi bi-people-fill text-gray-400"></i>
            <span className="text-[15px] ml-4 text-gray-400">Profesores</span>
          </div>

          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
            <i className="bi bi-journals text-gray-400"></i>
            <span className="text-[15px] ml-4 text-gray-400">Asignaturas</span>
          </div>

        </div>
      </div>
  </div>
  )
}

function dropDown() {
  document.querySelector('#submenu').classList.toggle('hidden')
  document.querySelector('#arrow').classList.toggle('rotate-0')
}

function Openbar() {
  document.querySelector('.sidebar').classList.toggle('left-[-300px]')
}