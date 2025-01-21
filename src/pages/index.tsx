import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";
// import '../styles/navbar.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export default function Home() {
//   return (
//     <div
//       className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
//     >
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               src/pages/index.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }

const Navbar = () => {
  return(
    <nav className="">
      <div className="btn float-left">
        <a href="/" className="navtext">Home</a>
      </div>
      <div className="float-right">
        <ul className="space-x-4">
          <li className="btn">
            <a href="/experience">My Experience</a>
          </li>
          <li className="btn">
            <a href="/projects">My Projects</a>
          </li>
          <li className="btn">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}


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
                <a href="/" className="text-black  hover:bg-gray-200 rounded-lg p-2 text-xl">Home</a>  
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <a href="/experience" className="text-black hover:bg-gray-200 rounded-lg p-2 text-xl">Experience</a>
                <a href="/projects" className="text-black hover:bg-gray-200 rounded-lg p-2 text-xl">Projects</a>
                <a href="/contact" className="text-black  hover:bg-gray-200 rounded-lg p-2 text-xl">Contact</a>
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
              <a href="/experience" className="text-black block hover:bg-gray-200 rounded-lg p-2">Experience</a>
              <a href="/projects" className="text-black block hover:bg-gray-200 rounded-lg p-2">Projects</a>
              <a href="/contact" className="text-black block hover:bg-gray-200 rounded-lg p-2">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

const Navbar3 = () => {
  const [isNavBarVisible, setIsNavBarVisible] = useState(false)
  const toggleNavBar = () => {
    setIsNavBarVisible(!isNavBarVisible)
  }

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Home</a>
      </div>
      <div className="flex-none">
        
        <ul className="menu menu-horizontal px-1 max-sm:hidden" /**for wider screens */>  
          <li><a>Experience</a></li>
          <li><a>Projects</a></li>
          <li><a>Contact</a></li>
        </ul>

        <div className="dropdown">
          <button className="btn btn-square btn-ghost sm:invisible" onClick={toggleNavBar} /** for thinner screens */>
            {isNavBarVisible ? 
            // <svg
            //   xmlns="http://www.w3.org/2000/svg"
            //   fill="none"
            //   viewBox="0 0 24 24"
            //   className="inline-block h-5 w-5 stroke-current">
            //   <path
            //     strokeLinecap="round"
            //     strokeLinejoin="round"
            //     strokeWidth="2"
            //     d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
            // </svg>
            <svg className="h-8 w-8 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  
            <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            : <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 14">
            <path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z"/>
        </svg>}
          </button>
          {isNavBarVisible && ( 
          <>
            {/* <ul className="menu menu-sm dropdown-content px-1 sm:hidden" > /**for wider screens */  }
            <ul         
              tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>Experience</a></li>
              <li><a>Projects</a></li>
              <li><a>Contact</a></li>
            </ul>
          </> )
          }
        </div>        
        


        
      </div>
    </div>
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
          <img className="h-auto max-w-full" src="/headshot.jpg" alt="Headshot of Josh Meier standing in front of Stonehenge">
          </img>
        </div>
        
      </div>
        
      
    </div>
  )
}