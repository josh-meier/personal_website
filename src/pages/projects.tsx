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

          <p className="py-4 text-1xl text-gray-500 dark:text-gray-400">
            <b>What was our UX Evaluation like?</b>
            <ol  style={{ listStyleType: "disc" }}>
              <li>
                Tasks: Finding an open machine in your dorm, Seeing that a machine is broken/reporting it for maintenance, Selecting a default/favorite dorm
              </li>
              <li>
                Process: We used various think aloud interviews and focus groups where we had users complete our tasks while telling us their feedback and thinking along the way
              </li>
              <li>
                Results (Qualitative): Finding open machines was intuitive and simple ("I like that its really simple and clean"), users wished there was a floor plan layout instead of a list ("Because the name is laundromap, I thought I would see the location of each laundry machine and dryer"),
                reporting broken machines was easy ("I liked that I was able to describe the issue and report multiple machines at once"), selecting a default dorm was unclear what it did ("It would have been nice if there were some instructions")
              </li>
              <li>
                Results (Quantitative): Task 1: 15 seconds and no errors, Task 2: 43 seconds and 1 error, Task 3: 9 seconds and no errors
              </li>
              <li>
                Improvements: I took the feedback and implemented a floor layout option for the user to view instead of the list. I also implemented a popup to let the user know what the default star does when you click it.
              </li>
              <li>
                Future Steps: In the future I want to make the app look a bit more appealing, allow the user to input whether they are okay with others moving their clothes or not, and enable the user to set a timer for when their load will be finished.
              </li>
            </ol>   
          </p>
          
          
          
        </div>
        
        <div className='pt-16 px-12'>
          
          <div className='flex flex-col'>  
          <p className="py-4 text-1xl text-gray-500 dark:text-gray-400">Low Fidelity Prototype (no interactions): </p>

              <Image className="h-auto w-11/12" width={3000} height={1000} src="figma1.jpg" alt="Screenshot of figma design displaying a search functionality for your dorm, then
          a dashboard with machines and the time left until they are free, and a popup for when you are confirming your use of a machine">
              </Image>

          <p className="py-4 text-1xl text-gray-500 dark:text-gray-400">Mid Fidelity Requirement 1: </p>

            <Image src={"req1.gif"} width={260} height={400} alt='Gif of user selecting their dorm, then scrolling through the list of washers and dryers to see 
            what is available and what is being used.'></Image>
                      <p className="py-4 text-1xl text-gray-500 dark:text-gray-400">Mid Fidelity Requirement 2: </p>

            <Image src={"req2.gif"} width={260} height={400} alt='Gif of user selecting their dorm, then scrolling down to go the maintenance request form which 
            has all of the washers and dryers with checkboxes next to them, a textbox to describe the issue, and a submit button.'></Image>
                      <p className="py-4 text-1xl text-gray-500 dark:text-gray-400">Mid Fidelity Requirement 3: </p>

            <Image src={"req3.gif"} width={260} height={400} alt='Gif of user selecting their dorm, then hitting a gray star next to the dorm name
            so that the star becomes yellow and indicates that that dorm is where the user lives.'></Image>
                     
                      <p className="py-4 text-1xl text-gray-500 dark:text-gray-400">High Fidelity Home Page: </p>

<Image src={"listlayout.gif"} width={260} height={400} alt='Gif of user selecting their dorm and seeing what machines are available.'></Image>
<p className="py-4 text-1xl text-gray-500 dark:text-gray-400">High Fidelity default dorm improvement: </p>

<Image src={"newdefault.gif"} width={260} height={400} alt='Gif of user selecting their default dorm by clicking a star and a popup shows up saying that that dorm will no be automatically selected.'></Image>
<p className="py-4 text-1xl text-gray-500 dark:text-gray-400">High Fidelity laundry room floor layout improvement: </p>

<Image src={"floorlayout.gif"} width={260} height={400} alt='Gif of user scrolling through a top down floor layout of the machines in a laundry room.'></Image>

          </div>

          
        </div>
        
      </div>


      


      
        
      
    </div>
  )
}