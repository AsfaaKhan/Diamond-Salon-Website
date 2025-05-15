/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { Aclonica } from "next/font/google";
import { Niconne } from "next/font/google"

const Font = Aclonica({
  subsets: ['latin'],
  weight: ["400"]
})
const Font2 = Niconne({
  subsets: ['latin'],
  weight: ["400"]
})


export default function BookingForm() {
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    note: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Save booking logic here (API, DB, etc.)
    alert("Booking Confirmed!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className={`${Font.className} block mb-1 font-semibold`}>Select Service</label>
        <select
          name="service"
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        >
          <option value="">-- Choose a service --</option>
          <option value="Haircut">Haircutting</option>
          <option value="Hair Coloring">Hair Coloring</option>
          <option value="Hair Treament">Hair Treament</option>
          <option value="Skin Treament">Skin Treament</option>
          <option value="Skin Facial">Skin Facial</option>
          <option value="Manicure">Manicure</option>
          <option value="Padicure">Padicure</option>
          <option value="Nail Extention">Nail Extention</option>
          <option value="Party Makeup">Party Makeup</option>
          <option value="Bridal Makeup">Bridal Makeup</option>
        </select>
      </div>

      <div>
        <label className={`${Font.className} block mb-1 font-semibold`}>Date</label>
        <input
          type="date"
          name="date"
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>

      <div>
        <label className={`${Font.className} block mb-1 font-semibold`} >Time</label>
        <input
          type="time"
          name="time"
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>

      <div>
        <label className={`${Font.className} block mb-1 font-semibold`}>Notes</label>
        <textarea
          name="note"
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          placeholder="Any specific preferences?"
        />
      </div>

      <button
        type="submit"
        className={`${Font2.className} w-full bg-textColor hover:bg-yellowTextColor text-white text-xl font-extrabold py-2 rounded`}
      >
        Confirm Booking
      </button>

      <div>
        <Link href="/">
          <button onClick={() => signOut()} type="submit" className={`${Font2.className} w-full bg-red-500 hover:bg-red-600 text-white text-xl font-extrabold py-2 rounded`}>
            Sign Out
          </button></Link>

      </div>
    </form>
  );
}
