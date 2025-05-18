"use client"
import HeroSlider from "@/components/HeroSlider"
import Gallery from "@/components/Gallery"
import HeroPage from "@/components/HeroPage"
export default function Home() {
  return (
    <div>
      <div>
        <HeroPage />
        <Gallery />
        <HeroSlider />
      </div>
    </div>
  )
}

