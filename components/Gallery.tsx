import { Aclonica } from "next/font/google";
import { Niconne } from "next/font/google"
import { Button } from "./ui/button";
import Link from "next/link";

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
                <h3 className={`${Font2.className} font-bold text-6xl text-textColor`} style={{ "letterSpacing": "0.1px" }}>Our Services</h3>

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

            <div className="container flex justify-center items-center mt-10 ">

                <Button variant={"categoryButton"} className="text-white bg-iconColor hover:bg-yellowTextColor rounded shadow-md border-1 ">
                    <Link href={"/servicePage"} className="no-underline text-white">
                        See More
                    </Link>
                </Button>

            </div>

        </div>
    )
}

