import { Aclonica } from "next/font/google";
import { Niconne } from "next/font/google"
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const Font = Aclonica({
    subsets: ['latin'],
    weight: ["400"]
})
const Font2 = Niconne({
    subsets: ['latin'],
    weight: ["400"]
})


export default function Gallery() {
    return (
        <div className="pt-20 pb-20 gap-12 ">

            {/* Heading */}

            <div className="container pt-20 pb-20  flex flex-col justify-center items-center text-center gap-[10px]">
                <h3 className={`${Font2.className} font-bold text-6xl text-textColor`} style={{ "letterSpacing": "0.1px" }}> Services</h3>

                <p className={`${Font.className} font-normal text-5xl text-yellowTextColor text-gray`} style={{ "letterSpacing": "0.2px" }}>Explore Products According to Categories </p>

            </div>

            {/* Gallery */}
            <div className="container flex flex-col gap-10  lg:flex-row">
                {/* 1st side */}

                <div className=" w-full lg:w-[500px] h-[500px]  bg-[url('/images/h1.jpg')] bg-no-repeat bg-cover bg-center ">
                    <div className=" pt-[400px] pl-[14px]">
                        <Button variant={"categoryButton"} className="hover:bg-slate-200" >Makeup </Button>
                    </div>
                </div>


                {/* 2nd side */}
                <div className="flex-1 flex flex-col  lg:flex-row gap-10" >
                    {/* Image1 */}
                    <div className="flex-1">
                        <div className=" h-[500px] w-full  sm:h-[500px]  bg-[url('/images/h2.jpg')] bg-no-repeat bg-cover bg-center ">
                            <div className=" pt-[400px] pl-[14px]">
                                <Button variant={"categoryButton"} className="hover:bg-slate-200" >Treatments</Button>
                            </div>
                        </div>
                    </div>

                    {/* Image2 */}
                    <div className="flex flex-col  sm:flex-row  lg:flex-col  gap-4">

                        {/* 3rd Image */}

                        <div className="w-full  lg:w-[240px]   h-[240px] bg-[url('/images/s7.jpg')] bg-no-repeat bg-cover bg-center ">
                            <div className="mt-[171px] ml-[14px]">
                                <Button variant={"categoryButton"} className="hover:bg-slate-200">Hair Services</Button>
                            </div>
                        </div>

                        {/* 4th Image */}

                        <div className="w-full lg:w-[240px]  h-[240px] bg-[url('/images/s6.jpg')] bg-no-repeat bg-cover bg-center ">
                            <div className="mt-[171px] ml-[14px]">
                                <Button variant={"categoryButton"} className="hover:bg-slate-200" >Skin Treatment</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-20 ">
                {/* Cards  */}

                <h1 className={`${Font2.className}  text-textColor  font-extrabold   flex justify-center text-centerr items-center text-4xl sm:text-5xl md:text-6xl  lg:text-6xl py-10`}>Beauty  Starts Here __ Treat Yourself Today</h1>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">

                    {/* Card 1 */}
                    <div className="w-[300px] h-[300px] perspective">
                        <div className="relative w-full h-full duration-700 transform-style preserve-3d hover:rotate-y-180">
                            {/* Front Side */}
                            <div className="absolute w-full h-full backface-hidden bg-gray-300 text-black rounded-lg overflow-hidden">
                                <Image
                                    src="/images/s1.jpg"
                                    alt="Avatar"
                                    width={300}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Back Side */}

                            <div className=" absolute bg-[url('/images/s1.jpg')]  bg-cover bg-no-repeat bg-center w-full h-full text-white rotate-y-180 backface-hidden flex flex-col items-center justify-center p-4 rounded-lg">

                                <div className="absolute inset-0 bg-black/50 bg-opacity-60"></div>
                                <div className="absolute text-white p-5">
                                    <h1 className="text-2xl font-bold">Hair Cutting & Styling  </h1>
                                    <p className="text-md">Elegance. Style. You.</p>
                                    <p className="text-sm">Our Diamond Salon Enhance your look with Styling hair cutting. </p>
                                    <Link href={"/bookingPage"} className="relative border-1 p-2 rounded bg-yellowTextColor text-textColor hover:bg-textColor hover:text-hoverColor no-underline " >
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Card 2 */}
                    <div className="w-[300px] h-[300px] perspective">
                        <div className="relative w-full h-full duration-700 transform-style preserve-3d hover:rotate-y-180">
                            {/* Front Side */}
                            <div className="absolute w-full h-full backface-hidden bg-gray-300 text-black rounded-lg overflow-hidden">
                                <Image
                                    src="/images/s2.jpg"
                                    alt="Avatar"
                                    width={300}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Back Side */}
                            <div className=" absolute bg-[url('/images/s2.jpg')]  bg-cover bg-no-repeat bg-center w-full h-full text-white rotate-y-180 backface-hidden flex flex-col items-center justify-center p-4 rounded-lg">

                                <div className="absolute inset-0 bg-black/50 bg-opacity-60"></div>
                                <div className="absolute text-white p-5">
                                    <h1 className="text-2xl font-bold">Manicure Service </h1>
                                    <p className="text-md">Elegance. Style. You.</p>
                                    <p className="text-sm">Our Diamond Salon Enhance your look with manicure. </p>
                                    <Link href={"/bookingPage"} className="relative border-1 p-2 rounded bg-yellowTextColor text-textColor hover:bg-textColor hover:text-hoverColor no-underline " >
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Card 3 */}
                    <div className="w-[300px] h-[300px] perspective">
                        <div className="relative w-full h-full duration-700 transform-style preserve-3d hover:rotate-y-180">
                            {/* Front Side */}
                            <div className="absolute w-full h-full backface-hidden bg-gray-300 text-black rounded-lg overflow-hidden">
                                <Image
                                    src="/images/s10.jpg"
                                    alt="Avatar"
                                    width={300}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Back Side */}
                            <div className=" absolute bg-[url('/images/s10.jpg')]  bg-cover bg-no-repeat bg-center w-full h-full text-white rotate-y-180 backface-hidden flex flex-col items-center justify-center p-4 rounded-lg">

                                <div className="absolute inset-0 bg-black/50 bg-opacity-60"></div>
                                <div className="absolute text-white p-5">
                                    <h1 className="text-2xl font-bold">Padicure Service </h1>
                                    <p className="text-md">Elegance. Style. You.</p>
                                    <p className="text-sm">Our Diamond Salon Enhance your look with padicure service. </p>
                                    <Link href={"/bookingPage"} className="relative border-1 p-2 rounded bg-yellowTextColor text-textColor hover:bg-textColor hover:text-hoverColor no-underline " >
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container flex justify-center items-center mt-10 ">
                    <Button variant={"categoryButton"} className="text-white bg-iconColor hover:bg-yellowTextColor rounded shadow-md border-1 ">
                        <Link href={"/servicePage"} className="no-underline text-white">
                            See More
                        </Link>
                    </Button>
                </div>
            </div>

        </div>
    )
}

