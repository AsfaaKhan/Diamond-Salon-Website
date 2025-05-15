
'use client';
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Aclonica } from "next/font/google"; 
const Font = Aclonica({
  subsets: ['latin'],
  weight: ["400"]
})
export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLogin = async (e: any) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (res?.ok) router.push("/bookingPage");
    else alert("Invalid credentials");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-50">
      <form onSubmit={handleLogin} className={`bg-white p-8 rounded shadow-xl w-96  `}>
        <h2 className={`${Font.className} text-2xl mb-4 font-bold`}>Login</h2>
        <input type="email" className="border-1 border-textColor p-2 w-full mb-4 rounded" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input type="password" className="border-1 border-textColor rounded p-2 w-full mb-4" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <button type="submit" className={` text-white py-2 px-4 w-full rounded bg-textColor hover:bg-hoverColor ${Font.className}`}>Login</button>
        <p className="text-sm mt-4 text-center text-textColor">
          {`Don't have an account?`} <a href="/auth/register" className="text-yellowTextColor  underline">Register</a>
        </p>
      </form>
    </div>
  );
}
