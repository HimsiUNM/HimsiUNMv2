"use client"

import { useEffect, useState } from "react"

interface Slide {
  id: number
  image: string
  alt: string
}

const slides: Slide[] = [
  { id: 1, image: "/walpaperhero.png", alt: "Banner 1" },
]

export default function HeroSlider() {
  return (
    <section id="home" className="relative w-full overflow-hidden">
      <div className="relative w-full h-auto">
        <img
          src="/walpaperhero.png"
          alt="Hero Banner"
          className="w-full h-auto object-contain object-top block"
          width={1920}
          height={900}
        />
      </div>
    </section>
  )
}