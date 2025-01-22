import Image from "next/image";
import { useState } from "react";
import Link from "next/link";


const Navbar2 = () => {
  const [isNavBarVisible, setIsNavBarVisible] = useState(false)
  const toggleNavBar = () => {
    setIsNavBarVisible(!isNavBarVisible)
  }
  return(
    <>
      <nav className="bg-transparent">
        {/* <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"> */}
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/personal_website" className="text-black  hover:bg-gray-200 rounded-lg p-2 text-xl">Home</Link>  
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
        {/* </div> */}
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
      {/* <Navbar /> */}
      <Navbar2 />
      {/* <Navbar3 /> */}

      <div className="p-4 mb-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300" role="alert">
        <span className="font-medium">Beware!</span> This website is currently still under construction.
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="px-2 md:pt-36">
          <h1 className="text-4xl font-semibold dark:text-white">
            Hey, I'm Josh! 
          </h1>
          <p className="py-4 text-2xl text-gray-500 dark:text-gray-400">
            I'm a software engineer graduating from Carleton College in June 2025. I most recently completed an externship with Lytup, 
            a sustainable energy startup, and at school I've been working as a mobile app developer for Project Friendship the last 2 years.  
            <strong className="font-normal"> I'm currently looking for full-time developer roles starting in Summer 2025</strong>!
          </p>

          <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">Click to learn more about me!</div>
            <div className="collapse-content">
              <p className="text-gray-500 dark:text-gray-400">
                My name is Josh Meier and I am a senior Computer Science major here at Carleton! Throughout my time here, I have 
                pursued interests in data science, cognitive science, linguistics, psychology, and architecture (I was even able to study abroad in Italy, Spain, and England!). 
              </p>
              <p className="text-gray-500 dark:text-gray-400 pt-4">
                Outside of class, I am a captain of the Carleton Men's <abbr title="Division 3" className="no-underline">DIII</abbr> Track and Cross Country teams as well
                as an avid performer and singer in the Carleton Singing Knights A Cappella group. When I'm not running or arranging music, you can also find me playing soccer, 
                thrifting, drawing, or exploring new places and scenery.
              </p>
            </div>
          </div>
        </div>
        <div className="px-2 pt-4 md:pt-18 ">
          <Image className="h-auto max-w-full" width={1000} height={1000} src="/headshot.jpg" alt="Headshot of Josh Meier standing in front of Stonehenge">
          </Image>
        </div>
        
      </div>
        
      
    </div>
  )
}