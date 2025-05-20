import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Aclonica } from "next/font/google";
const Font = Aclonica({
    subsets: ['latin'],
    weight: ["400"]
})



export default function Footer() {
    return (
        <div className="bg-white w-full h-auto border-1 border lg:h-[440px] justify-center items-center  gap-[87px] text-black ">
            {/* 1st Row  */}
            <div className="container  bg-dullWhite">
                <div className=" flex justify-center items-center flex-col gap-3  sm:flex-row sm:justify-between md:flex-row md:justify-between pt-10 pb-10 2xl:m-4 ">
                    <div className={`${Font.className} font-bold text-2xl text-iconColor `}>
                        <h3>Diamond Salon</h3>
                    </div>
                    <div className="flex gap-[20px] text-skyblue">
                        <FaFacebook size={24} />
                        <FaInstagram size={24} />
                        <FaTwitter size={24} />
                    </div>

                </div>
            </div>

            {/* 2nd Row */}
            <div className="container grid sm:grid-cols-2  md:grid-cols-2 xl:grid-cols-4 justify-center items-center gap-10 pt-[50px] pb-[50px] ">

                {/* 1st column */}

                <div className=" flex flex-col gap-5 font-bold">
                    <h1 className="text-base text-iconColor font-extrabold">Company Info</h1>
                    <Link href={"/"} className="  text-sm leading-[24px] text-yellowTextColor no-underline ">Carrier</Link>
                    <Link href={"/"} className="  text-sm leading-[24px] text-yellowTextColor no-underline ">About us</Link>
                    <Link href={"/"} className=" text-sm leading-[24px] text-yellowTextColor ">We are hiring</Link>
                    <Link href={"/"} className="  text-sm leading-[24px] text-yellowTextColor ">Blog</Link>

                </div>

                {/* 2nd column */}
                <div className=" flex flex-col gap-5 font-bold">
                    <h1 className="text-base text-iconColor font-extrabold">Legal</h1>
                    <Link href={"/aboutPage"} className=" text-sm leading-[24px] text-gray">About Us</Link>
                    <Link href={"/"} className=" text-sm leading-[24px] text-yellowTextColor ">Carrier</Link>
                    <Link href={"/"} className="  text-sm leading-[24px] text-yellowTextColor ">We are hiring</Link>
                    <Link href={"/"} className="  text-sm leading-[24px] text-yellowTextColor ">Blog</Link>

                </div>

                {/* 3rd column */}
                <div className=" flex flex-col gap-5 font-bold">
                    <h1 className="text-base text-iconColor font-extrabold">Features</h1>
                    <Link href={"/"} className=" text-sm leading-[24px] text-yellowTextColor ">Business Marketing</Link>
                    <Link href={"/"} className="  text-sm leading-[24px] text-yellowTextColor ">User Analytic</Link>
                    <Link href={"/"} className="  text-sm leading-[24px] text-yellowTextColor ">Live Chat</Link>
                    <Link href={"/"} className=" text-sm leading-[24px] text-yellowTextColor ">Unlimited Support</Link>
                </div>

                {/* 4th column */}
                <div className=" flex flex-col gap-5 font-bold">
                    <h1 className="text-base text-iconColor font-extrabold">Resources</h1>
                    <Link href={"/"} className=" text-sm leading-[24px] text-yellowTextColor  ">IOS & Android</Link>
                    <Link href={"/"} className="  text-sm leading-[24px] text-yellowTextColor ">Watch a Demo</Link>
                    <Link href={"/"} className="  text-sm leading-[24px] text-yellowTextColor ">Customers</Link>
                    <Link href={"/"} className=" text-sm leading-[24px] text-yellowTextColor ">API</Link>

                </div>
            </div>
        </div>
    )
}
