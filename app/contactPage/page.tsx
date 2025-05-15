"use client"
import { Niconne } from "next/font/google";
import { useState } from "react";
import { Aclonica } from "next/font/google";

const Font = Aclonica({
  subsets: ['latin'],
  weight: ["400"]
})
const Font2 = Niconne({
  subsets: ['latin'],
  weight: ["400"]
})

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message Sent!");
    setForm({ name: "", email: "", message: "" });
  };


  return (
    <div>
      {/* Background Image */}
      <div className="relative bg-[url('/images/contact.jpg')] bg-cover bg-no-repeat bg-center  h-[400px]  md:h-[500px]  lg:h-[80vh]  mx-auto p-20 sm:p-10 md:p-20 flex justify-center items-center ">
        <div className="absolute inset-0 bg-black/30  h-[400px] md:h-[500px] lg:h-[80vh] bg-opacity-60"></div>
        <div className={` ${Font.className}  absolute text-white  font-extrabold text-9xl   flex flex-col  justify-end`}>
          <h1 className="text-6xl sm:text-7xl md:text-9xl">{`"Contact Us"`}</h1>
        </div>
      </div>



      {/* Contact Page */}

      <div className="min-h-screen py-12 px-4 bg-gray-50 flex justify-center items-start">
        <div className="max-w-4xl w-full bg-white shadow-xl rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Contact Info */}
          <div>
            <h2 className={`${Font.className} text-3xl font-bold mb-4 text-textColor`}>Get in Touch</h2>
            <p className="text-gray-600 mb-4">
              {`We'd love to hear from you! Whether you're curious about services, scheduling, or anything else—our team is ready to answer all your questions.`}
            </p>
            <div className="mb-4">
              <h3 className={`${Font2.className} font-semibold text-yellowTextColor`}>📍 Address</h3>
              <p>123 Glamour Street, Beauty City, PK Karachi</p>
            </div>
            <div className="mb-4">
              <h3 className={`${Font2.className} font-semibold text-yellowTextColor`}>📞 Phone</h3>
              <p>(123) 456-7890</p>
            </div>
            <div className="mb-4">
              <h3 className={`${Font2.className} font-semibold text-yellowTextColor`}>⏰ Business Hours</h3>
              <p>Mon - Sat: 09:00 AM - 10:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium text-textColor">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                required
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-textColor"
              />
            </div>
            <div>
              <label className="block font-medium text-textColor">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                required
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-textColor"
              />
            </div>
            <div>
              <label className="block font-medium text-textColor">Message</label>
              <textarea
                name="message"
                value={form.message}
                rows={4}
                required
                className="w-full border px-4 py-2 rounded focus:outline-none  focus:ring-2 focus:ring-textColor"
              />
            </div>
            <button
              type="submit"
              className="bg-textColor hover:bg-yellowTextColor text-white py-2 px-6 rounded  font-bold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>



    </div>
  )
}