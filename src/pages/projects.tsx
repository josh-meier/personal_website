import Link from 'next/link'
import Navbar from "@/components/navbar";
import Image from "next/image";


export default function Projects(){
  return(
    // <div className="w-11/12  place-self-center pt-6">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar />

      <div className="p-4 mb-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300" role="alert">
        <span className="font-medium">Beware!</span> This website is currently still under construction.
      </div>

      <h1 className="text-4xl font-semibold dark:text-white pt-16">
        Laundry Room Dashboard 
      </h1>
      <p className="py-4 text-2xl text-gray-500 dark:text-gray-400">
        Through Carleton's <abbr title='Human Computer Interaction' className="no-underline">HCI</abbr> class, I'm working with Julian Tanguma, Leo Moran, and Ezra Barber 
        to design an interface of a website or app in Figma. We've decided to design a website that would be used as a way for university students to 
        check their local laundry room's machine availability to avoid that annoying realization that there isn't even a machine open after you just carried all your
         stuff down 3 flights of stairs. 
      </p>

      <Image className="h-auto w-11/12" width={3000} height={1000} src="/figma_prototype_1.png" alt="Screenshot of figma design displaying a search functionality for your dorm, then
       a dashboard with machines and the time left until they are free, and a popup for when you are confirming your use of a machine">
          </Image>
      <p className="py-4 text-1xl text-gray-500 dark:text-gray-400">
        This design addresses our user's needs for a quick search functionality or map to select their dorm, the ability to see how much time is left on each machine 
        or if that machine is out of service, and a confirmation of the user starting their machine that will come up after the user scans a QR code so that its very
        simple to use the website.  
      </p>
        
      
    </div>
  )
}