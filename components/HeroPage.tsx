
import { Niconne } from "next/font/google"

const Font2 = Niconne({
    subsets: ['latin'],
    weight: ["400"]
})


export default function HeroPage() {
    return (
        <div>
            <div className="mt-10">
                <div className="relative bg-[url('/images/3.jpg')] bg-cover bg-no-repeat bg-center  h-[400px]  md:h-[500px]  lg:h-[80vh]  mx-auto p-20 sm:p-10 md:p-20 flex justify-center flex-col  gap-7 items-center ">
                    <div className="absolute inset-0 bg-black/50  h-[400px] md:h-[500px] lg:h-[80vh] bg-opacity-60"></div>

                    <div className={` ${Font2.className}  absolute text-white  font-extrabold  rounded-full flex flex-col gap-6  sm:gap-7 md:gap-8 lg:gap-10  justify-center items-center`}>
                        <h1 className="text-4xl sm:text-6xl md:text-9xl  lg:text-9xl">Beauty  Starts Here __ <br /> Treat Yourself Today</h1>
                    </div>
                </div>
            </div>



        </div>
    )
}
