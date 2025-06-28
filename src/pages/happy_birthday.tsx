// "use client"

// import { useState, useRef } from "react"
// import dynamic from "next/dynamic"
// import CentralButton from "@/components/central-button"
// import BirthdayText from "@/components/birthday-text"
// import { getRandomImage } from "@/lib/utils"
// import Image from 'next/image';


// // Dynamically import the AnimatedImage component with no SSR
// const AnimatedImage = dynamic(
//   () => import("@/components/animated-image").then((mod) => ({ default: mod.AnimatedImage })),
//   {
//     ssr: false,
//   },
// )

// export default function Home() {
//   // Change this URL to your desired background image
//   const backgroundUrl = "bdaybackground.jpg"
//   const [images, setImages] = useState<string[]>([])
//   const containerRef = useRef<HTMLDivElement>(null)

//   // Working placeholder images that will definitely load
//   const workingImages = [
//     "headshot.jpg",
//     // "/placeholder.svg?height=300&width=300&text=Memory+2&bg=4ecdc4&color=white",
//     // "/placeholder.svg?height=300&width=300&text=Memory+3&bg=45b7d1&color=white",
//     // "/placeholder.svg?height=300&width=300&text=Memory+4&bg=96ceb4&color=white",
//     // "/placeholder.svg?height=300&width=300&text=Memory+5&bg=ffeaa7&color=black",
//     // "/placeholder.svg?height=300&width=300&text=Memory+6&bg=dda0dd&color=white",
//   ]

//   const handleButtonClick = async () => {
//     const randomImage = getRandomImage(workingImages)
//     console.log("Adding image:", randomImage)
//     setImages([...images, randomImage])

//     // Dynamically import confetti only when needed
//     const confetti = (await import("canvas-confetti")).default
//     confetti({
//       particleCount: 100,
//       spread: 70,
//       origin: { y: 0.6 },
//       colors: ["#ff0a54", "#ff477e", "#ff7096", "#ff85a1", "#fbb1bd", "#f9bec7"],
//     })
//   }
// //   const handleClearImages = () => {
// //     setImages([])
// //   }

//   return (
//     <div
//       className="relative w-full h-screen overflow-hidden"
//       ref={containerRef}
//       style={{
//         // backgroundImage: "bdaybackground.jpg",//`url(${backgroundUrl})`,
//         // backgroundSize: "cover",
//         // backgroundPosition: "center",
//         position: "relative",
//         height: "1000px",
//         zIndex:0,
//       }}
//     >
//         <Image
//         src="bdaybackground.jpg"
//         alt="Background Image"
//         // layout="fill"
//         fill
//         // width={500}
//         // height={1000}
//         style={{
//             objectFit: 'cover',
//             zIndex:1,
//             // position: "relative",
//           }}        
//           quality={100}
//         priority
        
//       />
//         {/* <div>
//              <ClearButton onClick={handleClearImages} imageCount={images.length} />
//         </div> */}
//       {/* Centered content */}
//       <div
//         className="relative inset-0 flex flex-col items-center justify-center"
//         style={{
//           position: "relative",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           zIndex: 2,
//         }}
//       >
//         {/* <BirthdayText /> */}
//         <CentralButton onClick={handleButtonClick} />
//       </div>

//       {/* Container for animated images */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           zIndex: 10,
//         }}
//       >
//         {images.map((image, index) => (
//           <AnimatedImage key={`${image}-${index}`} src={image} containerRef={containerRef} />
//         ))}
//       </div>
//     </div>
//   )
// }
"use client"

import { useState, useRef } from "react"
import dynamic from "next/dynamic"
import CentralButton from "@/components/central-button"
// import BirthdayText from "@/components/birthday-text"
import { getRandomImage } from "@/lib/utils"
import Image from 'next/image';


// Dynamically import the AnimatedImage component with no SSR
const AnimatedImage = dynamic(
  () => import("@/components/animated-image").then((mod) => ({ default: mod.AnimatedImage })),
  {
    ssr: false,
  },
)

export default function Bday() {
  const backgroundUrl = "bdaybackground.jpg"
  const [images, setImages] = useState<string[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  const workingImages: string[] = [];
  for (let i = 1; i <= 22; i++) {
    workingImages.push(`note${i}.png`);
  }

  const handleButtonClick = async () => {
    const randomImage = getRandomImage(workingImages)
    console.log("Adding image:", randomImage)
    setImages([...images, randomImage])

    const confetti = (await import("canvas-confetti")).default
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ff0a54", "#ff477e", "#ff7096", "#ff85a1", "#fbb1bd", "#f9bec7"],
    })
  }

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      ref={containerRef}
      style={{
        // Set a definite height for the main container
        height: "100vh", // Use 100vh for full viewport height
      }}
    >
      {/* Background Image Container - This layer is at the very bottom */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 0, // Ensure this is the lowest z-index
        }}
      >
        <Image
          src="bdaybackground.jpg"
          alt="Background Image"
          fill
          quality={100}
          priority
          style={{
            objectFit: 'cover',
            pointerEvents: 'none', // Crucial: This prevents the image from capturing any mouse events
          }}
        />
      </div>

      {/* Main Content Layer - This should be above the background */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{
          // We set position absolute here too to ensure it layers correctly on top of the background div
          zIndex: 10, // Explicitly set it above the background image
        }}
      >
        {/* <BirthdayText /> */}
        <CentralButton onClick={handleButtonClick} />
      </div>

      {/* Animated Images Layer - This should be the top layer for animations */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2, // Highest z-index for floating images
        }}
      >
        {images.map((image, index) => (
          <AnimatedImage key={`${image}-${index}`} src={image} containerRef={containerRef} />
        ))}
      </div>
    </div>
  )
}