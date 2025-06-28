"use client"

interface CentralButtonProps {
  onClick: () => void
}

export default function CentralButton({ onClick }: CentralButtonProps) {
  return (
    <button
      onClick={onClick}
      className="absolute place-self-center object-center px-8 py-8 text-xl font-bold text-white shadow-lg transform transition-all hover:scale-105 active:scale-95 active:translate-y-1"
      style={{
        backgroundColor: "#d8b4fe", // Light purple (tailwind purple-300)
        border: "4px solid #a78bfa", // Border (tailwind purple-400)
        borderRadius: "8px",
        marginTop: "400px",
        marginLeft:"60px",
        marginRight:"60px",
        position: "absolute",
        alignSelf: "center",
        padding: "10px",
        boxShadow: "0 4px 0 #8b5cf6, 0 6px 0 #7c3aed", // 8-bit style shadow (purple-500, purple-600)
        fontFamily: "'Press Start 2P', cursive, system-ui",
        letterSpacing: "0.5px",
        textShadow: "2px 2px 0 #7c3aed",
        imageRendering: "pixelated",
        zIndex:5,
      }}
    >
      22 Reasons Why I Love You!
    </button>
  )
}
