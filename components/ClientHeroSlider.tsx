"use client"

import dynamic from "next/dynamic"

const HeroPageSlider = dynamic(() => import('./HeroSlider'), {
    ssr: false
})

export default HeroPageSlider