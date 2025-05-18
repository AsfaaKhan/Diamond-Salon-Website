"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLogin = async (e: any) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (res?.ok) {
      router.push("/booking");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-full max-w-sm space-y-4">
        <h2 className="text-xl font-bold text-center">Login</h2>
        <input type="email" placeholder="Email" className="w-full border p-2 rounded" onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="w-full border p-2 rounded" onChange={e => setPassword(e.target.value)} required />
        <button className="bg-pink-600 text-white w-full py-2 rounded hover:bg-pink-700">Login</button>
      </form>
    </div>
  );
}
