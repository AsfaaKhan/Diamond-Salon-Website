import 'bootstrap/dist/css/bootstrap.min.css'
import * as React from "react"
import Image from "next/image";
import Link from "next/link";
import { Niconne } from "next/font/google"

const Font = Niconne({
    subsets: ['latin'],
    weight: ["400"]
})


export default function HeroSlider() {
    return (
        <div className=" mt-10  w-2/4  h-2/5 mx-auto  ">
            <div id="demo" className="carousel slide " data-bs-ride="carousel">

                {/*  Indicators/dots  */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
                </div>

                {/*  The slideshow/carousel  */}
                
                <div className="carousel-inner">

                    {/* First Image */}
                    <div className="carousel-item active">
                        <Image src="/images/bg1.jpg " alt="Los Angeles" width={500} height={500} className="d-block w-100 " />
                    </div>

                    {/*  Second Image */}
                    <div className="carousel-item">
                        <div className="relative">
                            <Image src="/images/bg2.jpg " alt="Los Angeles" width={500} height={500} className="d-block w-100"/>

                            <div className="absolute inset-0 bg-black/50 "></div>
                            <div className="absolute inset-0 flex justify-center items-center">
                                <Link href="/bookingPage"  className={`text-4xl font-bold text-white italic ${Font.className}` }> Book Now</Link>
                            </div>
                        </div>
                    </div>

                    {/* Third Image */}
                    <div className="carousel-item">
                        <div className="relative">
                            <Image src="/images/bg3.jpg " alt="Los Angeles" width={500} height={500} className="d-block w-100"/>

                            <div className="absolute inset-0 bg-black/50 "></div>
                            <div className="absolute inset-0 flex justify-center items-center">
                                <Link href="/bookingPage"  className={`text-4xl font-bold text-white italic ${Font.className}` }>Book Now</Link>
                            </div>
                        </div>
                    </div>

                    {/* Four Image */}
                    <div className="carousel-item">
                         <div className="relative">
                            <Image src="/images/bg4.jpg " alt="Los Angeles" width={500} height={500} className="d-block w-100"/>

                            <div className="absolute inset-0 bg-black/50 "></div>
                            <div className="absolute inset-0 flex justify-center items-center">
                                <Link href="/bookingPage"  className={`text-4xl font-bold text-white italic ${Font.className}` }>Book Now</Link>
                            </div>
                        </div>
                    </div>

                    {/* Fifth Image */}
                    <div className="carousel-item">
                        <div className="relative">
                            <Image src="/images/bg5.jpg " alt="Los Angeles" width={500} height={500} className="d-block w-100"/>

                           <div className="absolute inset-0 bg-black/50 "></div>
                            <div className="absolute inset-0 flex justify-center items-center">
                                <Link href="/bookingPage"  className={`text-4xl font-bold text-white italic ${Font.className}` }>Book Now</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Left and right controls/icons --> */}
                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>

            </div>
        </div>
    )
}
