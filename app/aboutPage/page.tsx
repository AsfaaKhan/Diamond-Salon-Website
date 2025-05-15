import { Aclonica } from "next/font/google"
const Font = Aclonica({
  subsets: ['latin'],
  weight: ["400"]
})
import { Niconne } from "next/font/google"

const Font2 = Niconne({
  subsets: ['latin'],
  weight: ["400"]
})

import Image from "next/image"

export default function About() {
  return (
    <div className="mt-10">

      {/* Background Image */}
      <div className="relative bg-[url('/images/bg.jpg')] bg-cover bg-no-repeat bg-center  h-[400px]  md:h-[500px]  lg:h-[80vh]  mx-auto p-20 sm:p-10 md:p-20 flex justify-center items-center ">
        <div className="absolute inset-0 bg-black/30  h-[400px] md:h-[500px] lg:h-[80vh] bg-opacity-60"></div>
        <div className={` ${Font2.className}  absolute text-white  font-extrabold text-9xl   flex flex-col  justify-end`}>
          <h1 className="text-5xl sm:text-6xl md:text-8xl">{`"A Glamorous You Starts Here"`}</h1>
        </div>
      </div>

      {/* About Page */}
      <div className=" bg-pink-50 text-gray-800 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Title */}
          <h1 className={` ${Font2.className} text-4xl sm:text-6xl md:text-8xl font-bold mb-6 text-textColor`}>Welcome to Diamond Salon</h1>


          {/* Our Story */}
          <section className="mt-10">
            <div className=" flex flex-col md:flex-row gap-10 justify-center items-center">
              <div>
                <h2 className={`${Font.className} text-2xl font-semibold mb-2 text-[#ffcc00]`}>Our Story </h2>
                <p className="text-lg leading-relaxed text-iconColor">
                  {` Diamond Salon began with a vision to empower individuals through beauty and self-care. For over a decade, we've provided luxurious experiences, blending glamour with comfort. Our salon is more than a space — it’s a destination where confidence is restored and transformations begin.`}
                </p>
              </div>

              <Image src={"/images/peakpx.jpg"} alt="story " width={500} height={500}></Image>
            </div>
          </section>


          {/* Mission & Vision */}
          <section className="mt-10 ">
            <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
              <div>

                <h2 className={`${Font.className} text-2xl font-semibold mb-2 text-[#ffcc00]`}>Our Mission</h2>
                <div className=" flex flex-col md:flex-row gap-10">
                  <p className="text-lg leading-relaxed text-textColor">
                    To deliver high-quality, personalized salon services that leave you glowing from the inside out.
                  </p>
                </div>

                <h2 className={`${Font.className} text-2xl font-semibold mb-2 text-[#ffcc00]`}>Our Vision</h2>
                <div className=" flex flex-col md:flex-row gap-10">
                  <p className="text-lg leading-relaxed text-textColor">
                    To become a leading beauty destination known for elegance, innovation, and client care.
                  </p>
                </div>
              </div>

              <div>
                <Image src={"/images/vision.jpg"} alt="story " width={500} height={500}></Image>
              </div>
            </div>
          </section>


          {/* Services Summary */}
          <section className="mt-10">
            <div className=" flex flex-col md:flex-row justify-center items-center md:justify-between gap-20">
              <div>
                <h2 className={`${Font.className} text-2xl font-semibold mb-2 text-[#ffcc00]`}>What We Offer</h2>
                <ul className="text-textColor list-disc ml-6 text-lg space-y-2">
                  <li>Haircuts & Styling</li>
                  <li>Manicure</li>
                  <li>Pedicure</li>
                  <li>Nail Extension</li>
                  <li>Hair Coloring & Treatments</li>
                  <li>Bridal & Event Packages</li>
                  <li>Skin Care & Facials</li>
                </ul>
              </div>

              <div>
                <Image src={"/images/service3.jpg"} alt="story " width={500} height={500}></Image>
              </div>

            </div>

          </section>

          {/* Why Choose Us */}
          <section className="mt-10">
            <div className=" flex flex-col md:flex-row gap-10 justify-center items-center">
              <div>
                <h2 className={`${Font.className} text-2xl font-semibold mb-2 text-[#ffcc00]`}>Why Choose Diamond Salon?</h2>
                <ul className="list-disc ml-6 text-lg space-y-2 text-textColor">
                  <li>Experienced and certified stylists</li>
                  <li>Modern, hygienic, and peaceful environment</li>
                  <li>Use of premium beauty products</li>
                  <li>Personalized attention and consultations</li>
                </ul>
              </div>
              <div>
                <Image src={"/images/why.jpg"} alt="story " width={500} height={500}></Image>
              </div>
            </div>
          </section>


          {/* Call to Action */}
          <div className="text-center mt-12">
            <a
              href="/bookingPage"
              className={`inline-block bg-iconColor hover:bg-hoverColor text-white px-6 py-3 rounded-full  transition no-underline  ${Font.className}`}
            >
              Book Your Appointment
            </a>
          </div>
        </div>
      </div>


    </div>
  )
}