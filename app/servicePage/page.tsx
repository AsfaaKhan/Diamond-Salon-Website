"use client";
import Image from "next/image";
import { Aclonica } from "next/font/google";
import { Niconne } from "next/font/google"
import Link from "next/link";

const Font = Aclonica({
  subsets: ['latin'],
  weight: ["400"]
})
const Font2 = Niconne({
  subsets: ['latin'],
  weight: ["400"]
})

export default function Service() {
  return (
    
    <div className="mt-10">
      <div className="relative bg-[url('/images/service2.jpg')] bg-cover bg-no-repeat bg-center  h-[400px]  md:h-[500px]  lg:h-[80vh]  mx-auto p-20 sm:p-10 md:p-20 flex justify-center flex-col  gap-7 items-center ">
        <div className="absolute inset-0 bg-black/50  h-[400px] md:h-[500px] lg:h-[80vh] bg-opacity-60"></div>

        <div className={` ${Font2.className}  absolute text-white  font-extrabold  rounded-full flex flex-col gap-6  sm:gap-7 md:gap-8 lg:gap-10  justify-center items-center`}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl  lg:text-7xl">Beauty  Starts Here __ <br /> Treat Yourself Today</h1>
        </div>
      </div>


      {/* Service Card   */}
      <div className="bg-pink-50 pt-10 pb-32  min-h-screen">
        <div className="flex flex-col items-center justify-center ">
          <h1 className={`mt-5 text-4xl sm:text-6xl font-bold mb-4 ${Font.className} text-textColor`}>Our Services</h1>
          <h3 className={` ${Font2.className} text-4xl sm:text-6xl mb-6 text-yellowTextColor`} >{`"Luxury Meets Comfort in Every Service"`}</h3>
          <hr className="border-black border-b-2" />
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


            {/* Card 4 */}
            <div className="w-[300px] h-[300px] perspective">
              <div className="relative w-full h-full duration-700 transform-style preserve-3d hover:rotate-y-180">
                {/* Front Side */}
                <div className="absolute w-full h-full backface-hidden bg-gray-300 text-black rounded-lg overflow-hidden">
                  <Image
                    src="/images/s7.jpg"
                    alt="Avatar"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Back Side */}
                <div className=" absolute bg-[url('/images/s7.jpg')]  bg-cover bg-no-repeat bg-center w-full h-full text-white rotate-y-180 backface-hidden flex flex-col items-center justify-center p-4 rounded-lg">

                  <div className="absolute inset-0 bg-black/50 bg-opacity-60"></div>
                  <div className="absolute text-white p-5">
                    <h1 className="text-2xl font-bold">Skin Care & Treatment </h1>
                    <p className="text-md">Elegance. Style. You.</p>
                    <p className="text-sm">Our Diamond Salon Enhance your look with skincare service. </p>
                    <Link href={"/bookingPage"} className="relative border-1 p-2 rounded bg-yellowTextColor text-textColor hover:bg-textColor hover:text-hoverColor no-underline " >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>


            {/* Card 5 */}
            <div className="w-[300px] h-[300px] perspective">
              <div className="relative w-full h-full duration-700 transform-style preserve-3d hover:rotate-y-180">
                {/* Front Side */}
                <div className="absolute w-full h-full backface-hidden bg-gray-300 text-black rounded-lg overflow-hidden">
                  <Image
                    src="/images/s5.jpg"
                    alt="Avatar"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Back Side */}

                <div className=" absolute bg-[url('/images/s5.jpg')]  bg-cover bg-no-repeat bg-center w-full h-full text-white rotate-y-180 backface-hidden flex flex-col items-center justify-center p-4 rounded-lg">

                  <div className="absolute inset-0 bg-black/50 bg-opacity-60"></div>
                  <div className="absolute text-white p-5">
                    <h1 className="text-2xl font-bold">Nail Extention </h1>
                    <p className="text-md">Elegance. Style. You.</p>
                    <p className="text-sm">Our Diamond Salon Enhance your look with our nail extension. </p>
                    <Link href={"/bookingPage"} className="relative border-1 p-2 rounded bg-yellowTextColor text-textColor hover:bg-textColor hover:text-hoverColor no-underline " >
                      Book Now
                    </Link>
                  </div>

                </div>

              </div>
            </div>

            {/* Card  6*/}
            <div className="w-[300px] h-[300px] perspective">
              <div className="relative w-full h-full duration-700 transform-style preserve-3d hover:rotate-y-180">
                {/* Front Side */}
                <div className="absolute w-full h-full backface-hidden bg-gray-300 text-black rounded-lg overflow-hidden">
                  <Image
                    src="/images/s6.jpg"
                    alt="Avatar"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Back Side */}

                <div className=" absolute bg-[url('/images/s6.jpg')]  bg-cover bg-no-repeat bg-center w-full h-full text-white rotate-y-180 backface-hidden flex flex-col items-center justify-center p-4 rounded-lg">

                  <div className="absolute inset-0 bg-black/50 bg-opacity-60"></div>
                  <div className="absolute text-white p-5">
                    <h1 className="text-2xl font-bold">Skin Facail</h1>
                    <p className="text-md">Elegance. Style. You.</p>
                    <p className="text-sm">Our Diamond Salon Enhance your look with skin facial service. </p>
                    <Link href={"/bookingPage"} className="relative border-1 p-2 rounded bg-yellowTextColor text-textColor hover:bg-textColor hover:text-hoverColor no-underline " >
                      Book Now
                    </Link>
                  </div>

                </div>

              </div>
            </div>

            {/* Card 7 */}
            <div className="w-[300px] h-[300px] perspective">
              <div className="relative w-full h-full duration-700 transform-style preserve-3d hover:rotate-y-180">
                {/* Front Side */}
                <div className="absolute w-full h-full backface-hidden bg-gray-300 text-black rounded-lg overflow-hidden">
                  <Image
                    src="/images/s8.jpg"
                    alt="Avatar"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Back Side */}
                <div className=" absolute bg-[url('/images/s8.jpg')]  bg-cover bg-no-repeat bg-center w-full h-full text-white rotate-y-180 backface-hidden flex flex-col items-center justify-center p-4 rounded-lg">
                  <div className="absolute inset-0 bg-black/50 bg-opacity-60"></div>
                  <div className="absolute text-white p-5">
                    <h1 className="text-2xl font-bold">Make Up</h1>
                    <p className="text-md">Elegance. Style. You.</p>
                    <p className="text-sm">Our Diamond Salon Enhance your look with makeup service. </p>
                    <Link href={"/bookingPage"} className="relative border-1 p-2 rounded bg-yellowTextColor text-textColor hover:bg-textColor hover:text-hoverColor no-underline " >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>


            {/* Card 8 */}
            <div className="w-[300px] h-[300px] perspective">
              <div className="relative w-full h-full duration-700 transform-style preserve-3d hover:rotate-y-180">
                {/* Front Side */}
                <div className="absolute w-full h-full backface-hidden bg-gray-300 text-black rounded-lg overflow-hidden">
                  <Image
                    src="/images/s9.jpg"
                    alt="Avatar"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Back Side */}
                <div className=" absolute bg-[url('/images/s9.jpg')]  bg-cover bg-no-repeat bg-center w-full h-full text-white rotate-y-180 backface-hidden flex flex-col items-center justify-center p-4 rounded-lg">
                  <div className="absolute inset-0 bg-black/50 bg-opacity-60"></div>
                  <div className="absolute text-white p-5">
                    <h1 className="text-2xl font-bold">Skin treatment</h1>
                    <p className="text-md">Elegance. Style. You.</p>
                    <p className="text-sm">Our Diamond Salon Enhance your look with skin treatment. </p>
                    <Link href={"/bookingPage"} className="relative border-1 p-2 rounded bg-yellowTextColor text-textColor hover:bg-textColor hover:text-hoverColor no-underline " >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

