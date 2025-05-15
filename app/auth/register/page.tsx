'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Aclonica } from "next/font/google"; 
const Font = Aclonica({
  subsets: ['latin'],
  weight: ["400"]
})


export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleRegister = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" }
    });

    if (!res.ok) {
      const data = await res.json();
      alert(data.error || "Registration failed");
      return;
    }

    // Auto-login after register
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.ok) router.push("/auth/login");
    else alert("Login failed after register");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-50">
      <form onSubmit={handleRegister} className="bg-white p-8 rounde shadow-lg w-96 ">
        <h2 className={`${Font.className} text-3xl mb-4 font-bold text-yellowTextColor`}>Register Your Account</h2>
        <input type="text" className="border p-2 w-full  mb-4 rounded" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
        <input type="email" className="border p-2 w-full mb-4 rounded" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" className="border p-2 w-full rounded mb-4" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className={`${Font.className} bg-textColor hover:bg-hoverColor  text-white text-xl py-2 px-4 w-full rounded`}>Register</button>
      </form>
    </div>
  );
}

