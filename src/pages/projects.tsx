import Link from 'next/link'
import Navbar from "@/components/navbar";
import Image from "next/image";
import figma_prototype from "../../public/figma_prototype_1.png"


export default function Projects(){
  return(
    // <div className="w-11/12  place-self-center pt-6">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar />

      <div className="p-4 mb-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300" role="alert">
        <span className="font-medium">Beware!</span> This website is currently still under construction.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-semibold dark:text-white pt-16">
            Laundry Room Dashboard 
          </h1>
          <p className="py-4 text-2xl text-gray-500 dark:text-gray-400">
            Through Carleton's <abbr title='Human Computer Interaction' className="no-underline">HCI</abbr> class, I'm working with Julian Tanguma, Leo Moran, and Ezra Barber 
            to design an interface of a website or app in Figma. We've decided to design a website that would be used as a way for university students to 
            check their local laundry room's machine availability to avoid that annoying realization that there isn't even a machine open after you just carried all your
            stuff down 3 flights of stairs. 
          </p>
          <div>
           <Link href={"https://www.figma.com/proto/X0XeeeSdStnqMSLS9tKsQT/Untitled?node-id=72-159&t=9wDIgmlTtU7w4WNY-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=72%3A159"}
            target='_blank' className="btn btn-md bg-slate-300 my-4 container">View the prototype (in figma)</Link>
          </div>

          {/* <Image className="h-auto w-11/12" width={3000} height={1000} src="/figma1.jpg" alt="Screenshot of figma design displaying a search functionality for your dorm, then
          a dashboard with machines and the time left until they are free, and a popup for when you are confirming your use of a machine">
              </Image> */}
          <p className="py-4 text-1xl text-gray-500 dark:text-gray-400">
            <b>This design addresses our user's requirements: </b>
            <ol  style={{ listStyleType: "upper-roman" }}>
              <li>Users can see how much time is left on each machine in their dorm</li>
              <li>Users can see when machines are out of order and can report broken machines</li>
              <li>Users can select a dorm preference so it shows immediately after logging in</li>
            </ol>
          </p>
          
      
        
          <p className="py-4 text-1xl text-gray-500 dark:text-gray-400">
            I: The prototype fulfills these requirements by displaying each machine in the dorm with a timer and indication of 
            whether its in use, available, or out of order. You start by selecting your dorm, clicking view, and then you can see
            all the washers and dryers and their statuses by scrolling horizontally.
          </p>
          <p className="py-4 text-1xl text-gray-500 dark:text-gray-400">
            II: Once you select your dorm, at the bottom of each page, there is a button that takes you to a maintenance request form. 
            There you can select what machines were giving trouble, describe why, and then submit the request. 
          </p>
          <p className="py-4 text-1xl text-gray-500 dark:text-gray-400">
            III: After selecting your dorm for the first time, to indicate your dorm preference, there is a star next to the dorm 
            name which you can click to indicate that you live there and would like it to show up automatically upon opening the website.
          </p>
          
          
          
        </div>
        
        <div className='pt-48 px-12'>
          
          <div className='flex flex-row'>  
            <Image src={"/req1.gif"} width={260} height={400} alt='Gif of user selecting their dorm, then scrolling through the list of washers and dryers to see 
            what is available and what is being used.'></Image>
            <Image src={"/req2.gif"} width={260} height={400} alt='Gif of user selecting their dorm, then scrolling down to go the maintenance request form which 
            has all of the washers and dryers with checkboxes next to them, a textbox to describe the issue, and a submit button.'></Image>
            <Image src={"/req3.gif"} width={260} height={400} alt='Gif of user selecting their dorm, then hitting a gray star next to the dorm name
            so that the star becomes yellow and indicates that that dorm is where the user lives.'></Image>
          </div>

          <p className="py-4 text-1xl text-gray-500 dark:text-gray-400">
            <b>What has been our user research process?</b>
            <ol  style={{ listStyleType: "disc" }}>
              <li>
                Individual and Group interviews: We conducted a total of 9 interviews, with some of them being semi-structured individual interviews
                and others being focus groups of multiple people. We asked Carleton student's that live in the dorms about their laundry habits, 
                what they like and dislike about the current status of the laundry rooms, and about what they would find useful in a website designed
                to improve the process.
              </li>
              <li>
                Analysis of interviews: After our interviews were completed, we began to conduct an axial coding process where we looked through each
                other's transcripts and denoted when an interviewee would say a goal of theirs, a condition or cause that led to an action, their action
                in a situation, and the consequences of that action. Then we combed through these quotes to find commonalities present among different 
                interviews to gain an understanding of what issues and features were the most important to our users. We created an affinity diagram to 
                represent these common themes from our interviews.
              </li>
            </ol>   
          </p>
        </div>
        
      </div>


      


      
        
      
    </div>
  )
}