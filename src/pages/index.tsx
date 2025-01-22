import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";


export default function Home(){
  return(
    // <div className="w-11/12  place-self-center pt-6">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar/>

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

          <Link href={"/Joshua_Meier_Resume_2024.pdf"} target='_blank' className="btn btn-md bg-green-200 my-4 container">View My Resume</Link>


          <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium text-center">Learn more about me!</div>
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
          <Image className="h-auto w-11/12" width={1000} height={1000} src="/headshot.jpg" alt="Headshot of Josh Meier standing in front of Stonehenge">
          </Image>
        </div>
        
      </div>
        
      
    </div>
  )
}