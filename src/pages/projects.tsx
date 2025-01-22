import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";

import Link from 'next/link'

const Navbar2 = () => {
  const [isNavBarVisible, setIsNavBarVisible] = useState(false)
  const toggleNavBar = () => {
    setIsNavBarVisible(!isNavBarVisible)
  }
  return(
    <>
      <nav className="bg-transparent">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-black  hover:bg-gray-200 rounded-lg p-2 text-xl">Home</a>  
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link href="/experience" className="text-black hover:bg-gray-200 rounded-lg p-2 text-xl">Experience</Link>
                <Link href="/projects" className="text-black hover:bg-gray-200 rounded-lg p-2 text-xl">Projects</Link>
                <Link href="/contact" className="text-black  hover:bg-gray-200 rounded-lg p-2 text-xl">Contact</Link>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button className="inline-flex items-center justify-center p-2 rounded-md text-white
               hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
               onClick={toggleNavBar}>
                {isNavBarVisible ? <svg className="h-8 w-8 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  
            <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            : <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 14">
            <path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z"/>
        </svg>}
               </button>

            </div>
          </div>
        {isNavBarVisible && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/experience" className="text-black block hover:bg-gray-200 rounded-lg p-2">Experience</Link>
              <Link href="/projects" className="text-black block hover:bg-gray-200 rounded-lg p-2">Projects</Link>
              <Link href="/contact" className="text-black block hover:bg-gray-200 rounded-lg p-2">Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default function Home(){
  return(
    // <div className="w-11/12  place-self-center pt-6">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar2 />

      <div className="p-4 mb-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300" role="alert">
        <span className="font-medium">Beware!</span> This website is currently still under construction.
      </div>
      
        
      
    </div>
  )
}