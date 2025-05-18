
import Gallery from "@/components/Gallery"
import HeroPage from "@/components/HeroPage"
import HeroPageSlider from "@/components/ClientHeroSlider"
export default function Home() {
  return (
    <div>
      <div>
        <HeroPage />
        <Gallery />
        <HeroPageSlider/>
      </div>
    </div>
  )
}

