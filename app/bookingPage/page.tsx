
import { Niconne } from "next/font/google";
import BookingForm from "@/components/BookingForm";


const Font2 = Niconne({
  subsets: ['latin'],
  weight: ["400"]
})


export default async function BookingPage() {


  return (
    <div>
      <div className="relative bg-[url('/images/booking.jpg')] bg-cover bg-no-repeat bg-center  h-[400px]  md:h-[500px]  lg:h-[80vh]  mx-auto p-20 sm:p-10 md:p-20 flex justify-center flex-col  gap-7 items-center ">
        <div className="absolute inset-0 bg-black/50  h-[400px] md:h-[500px] lg:h-[80vh] bg-opacity-60"></div>

        <div className={` ${Font2.className}  absolute text-white  font-extrabold  rounded-full flex flex-col gap-6  sm:gap-7 md:gap-8 lg:gap-10  justify-center items-center`}>
          <h1 className="text-4xl sm:text-6xl md:text-8xl  lg:text-8xl">Luxury Meets Comfort in Every Service</h1>
        </div>
      </div>

      {/* Booking Form  */}
      <div className="min-h-screen  flex items-center justify-center bg-pink-50 p-4">
        <div className="bg-white shadow-lg p-6 rounded w-full max-w-xl">
          <h1 className={`${Font2.className} text-4xl font-extrabold text-center mb-4 text-textColor`}>Book Your Appointment</h1>
          <BookingForm />
        </div>
      </div>
    </div>
  )

}


