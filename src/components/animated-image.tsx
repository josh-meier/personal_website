"use client"

import { useEffect, useRef, type RefObject } from "react"
import Image from "next/image"

interface AnimatedImageProps {
  src: string
  containerRef: RefObject<HTMLDivElement>
}

export function AnimatedImage({ src, containerRef }: AnimatedImageProps) {
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!imageRef.current || !containerRef.current || typeof window === "undefined") return

    // Dynamically import GSAP and Draggable only on the client side
    const loadGSAP = async () => {
      try {
        const { gsap } = await import("gsap")
        const { Draggable } = await import("gsap/Draggable")

        // Register the plugin
        gsap.registerPlugin(Draggable)

        const container = containerRef.current!
        const image = imageRef.current!

        // Get viewport dimensions
        const viewportWidth = window.innerWidth
        const viewportHeight = window.innerHeight
        const imageSize = 150

        // Center position
        const centerX = viewportWidth / 2 - imageSize / 2
        const centerY = viewportHeight / 2 - imageSize / 2

        // Random angle for the image to fly out
        const angle = Math.random() * Math.PI * 2
        const distance = 80 + Math.random() * 120 // Reduced distance to keep images on screen

        // Calculate target position with bounds checking
        let targetX = centerX + Math.cos(angle) * distance
        let targetY = centerY + Math.sin(angle) * distance

        // Keep images within viewport bounds
        targetX = Math.max(0, Math.min(targetX, viewportWidth - imageSize))
        targetY = Math.max(0, Math.min(targetY, viewportHeight - imageSize))

        // Set initial position
        gsap.set(image, {
          x: centerX,
          y: centerY,
          scale: 0,
          rotation: 0,
          opacity: 0,
        })

        // Initial animation - pop out from the center
        gsap.to(image, {
          x: targetX,
          y: targetY,
          scale: 1,
          rotation: -15 + Math.random() * 30,
          opacity: 1,
          duration: 0.8,
          ease: "elastic.out(1, 0.5)",
          onComplete: () => {
            // Add a slight floating animation
            gsap.to(image, {
              y: targetY + (Math.random() * 20 - 10),
              rotation: -5 + Math.random() * 10,
              duration: 1 + Math.random(),
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            })
          },
        })

        // Make the image draggable with proper bounds
        const draggableInstance = Draggable.create(image, {
          type: "x,y",
          bounds: {
            minX: 0,
            minY: 0,
            maxX: viewportWidth - imageSize,
            maxY: viewportHeight - imageSize,
          },
          edgeResistance: 0.65,
          throwProps: true,
          onDragStart: () => {
            gsap.killTweensOf(image)
          },
          onDragEnd: function () {
            gsap.to(image, {
              y: this.endY + (Math.random() * 20 - 10),
              rotation: this.rotation + (Math.random() * 10 - 5),
              duration: 1 + Math.random(),
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            })
          },
        })[0]

        // Return cleanup function
        return () => {
          gsap.killTweensOf(image)
          if (draggableInstance) {
            draggableInstance.kill()
          }
        }
      } catch (error) {
        console.error("Failed to load GSAP:", error)
        return () => {}
      }
    }

    let cleanup: (() => void) | undefined

    loadGSAP().then((cleanupFn) => {
      cleanup = cleanupFn
    })

    return () => {
      if (cleanup) {
        cleanup()
      }
    }
  }, [src, containerRef])

  return (
    <div
      ref={imageRef}
      style={{
        position: "absolute",
        width: "250px",
        height: "200px",
        zIndex: 10,
        borderRadius: "10px",
        // boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        overflow: "hidden",
        // backgroundColor: "#f0f0f0",
        pointerEvents: "auto",
        cursor: "grab",
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.cursor = "grabbing"
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.cursor = "grab"
      }}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt="Birthday image"
        fill
        style={{ objectFit: "cover" }}
        onLoad={() => console.log("Image loaded:", src)}
        onError={(e) => console.error("Image failed to load:", src, e)}
      />
    </div>
  )
}
