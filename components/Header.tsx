"use client"
import { useState } from "react"
import Link from "next/link"
import { Inter } from "next/font/google"
import { BiMenuAltRight } from "react-icons/bi";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";



// FONT INTER
const inter = Inter({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})



const Header = () => {
    const [navbar, setNavbar] = useState(false)

    const handleNavbar = () => {
        setNavbar(!navbar);
    }
    return (
        <div className=" w-full z-10 top-6 fixed  bg-white ">
            <nav >
                <div className=" container h-[58px]  flex items-center text-center justify-between  ">
                    {/*             LOGO                    */}
                    <div>
                        <Image alt="logo" src="/images/5.png" width={50} height={100} className="text-sm sm:text-xl md:text-2xl font-bold text-iconColor hover:text-hoverColor " />
                    </div>

                    {/*             NAVBAR ITEMS                  */}
                    <div className="hidden lg:flex gap-[15px]    font-bold   justify-center items-center text-sm leading-6 text-gray text-center text-iconColor " style={{ "letterSpacing": "0.1px" }}>
                        <Link className="no-underline text-iconColor  hover:underline hover:text-hoverColor " href="/">Home</Link>
                        <Link className="no-underline text-iconColor  hover:underline hover:text-hoverColor " href={"/aboutPage"}>About</Link>
                        <Link className="no-underline text-iconColor  hover:underline hover:text-hoverColor  " href="/servicePage">Services</Link>
                        <Link className=" no-underline text-iconColor  hover:underline hover:text-hoverColor  " href="/bookingPage">Booking</Link>
                        <Link className=" no-underline text-iconColor  hover:underline hover:text-hoverColor   " href="/contactPage">Contact</Link>
                    </div>

                    {/*         Navbar Icons Anths        */}
                    <div className="flex  items-center  ">
                        {/* btn3 */}
                        <div className="flex gap-2">
                            <div>
                                <Link href="/bookingPage">
                                    <button className="relative border-1 p-2 rounded bg-yellowTextColor text-textColor hover:bg-textColor hover:text-hoverColor no-underline "> Book Now</button>
                                </Link>
                            </div>

                            <div className="relative border-1 py-1 px-2 rounded bg-yellowTextColor text-textColor hover:bg-textColor hover:text-hoverColor no-underline">
                                <SignedOut>
                                    <SignInButton />
                                </SignedOut>
                                <SignedIn>
                                    <UserButton />
                                </SignedIn>
                            </div>
                        </div>
                    </div>


                    {/* HAMBURGER FOR SMALL DEVICES / MOBILES  */}
                    <div className="lg:hidden  flex text-black cursor-pointer  " onClick={handleNavbar} >
                        <BiMenuAltRight className="text-4xl text-iconColor   hover:text-hoverColor w-8 h-8" />
                    </div>
                </div>

                {navbar && (
                    <div className={`lg:hidden bg-white p-4 border-[2px] text-center  ${inter.className}`}>
                        <Link href="/" className="block py-2 no-underline text-iconColor  hover:underline hover:text-hoverColor " onClick={handleNavbar}>Home</Link>
                        <Link href="/aboutPage" className="block  py-2  no-underline text-iconColor  hover:underline hover:text-hoverColor " onClick={handleNavbar}>About</Link>
                        <Link href="/servicePage" className="block  py-2  no-underline text-iconColor  hover:underline hover:text-hoverColor  " onClick={handleNavbar}>Services</Link>
                        <Link href="/bookingPage" className="block  py-2  no-underline text-iconColor  hover:underline hover:text-hoverColor  " onClick={handleNavbar}>Booking</Link>
                        <Link href="/contactPage" className="block  py-2  no-underline text-iconColor  hover:underline hover:text-hoverColor " onClick={handleNavbar}>Contact</Link>
                    </div>
                )}
            </nav>
            <div className="border-[0.5px]"></div>
        </div>
    )
}


export default Header
