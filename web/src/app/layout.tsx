import type { Metadata } from "next";
import { Roboto_Flex as Roboto, Bai_Jamjuree as Baijamjuree } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { EmptyMemories } from "@/components/EmptyMemories";
import { Hero } from "@/components/Hero";
import { Profile } from "@/components/Profile";
import { Signin } from "@/components/Signin";
import { Copyright } from "@/components/Copyright";
import { cookies } from "next/headers";

const roboto = Roboto({ subsets: ["latin"], variable: '--font-roboto' });
const baijamjuree = Baijamjuree({ subsets: ["latin"], weight: '700', variable: '--font-bai-jamjuree' });

export const metadata: Metadata = {
  title: "NLW Space Time",
  description: "Uma Capsula do tempo desenvolvida com React, Node JS, TailwindCSS e TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {

  const isAuthenticad = cookies().has('token')

  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baijamjuree.variable} font-sans text-gray-100 bg-gray-900`}>
        
        <main className="grid grid-cols-2 min-h-screen">
          {/* left */}
          <div className="relative flex flex-col items-start justify-between px-28 py-16 overflow-hidden border-r border-white/10  bg-[url(../assets/bg-stars.svg)] bg-cover">
            {/* Blur */}
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 bg-purple-700 opacity-50 rounded-full blur-full"/>
            {/* Stripes */}
            <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes "/>

            {/* Sign in */}
            { isAuthenticad ? <Profile /> : <Signin />}

            {/* Hero */}
            <Hero />
            
            {/* Copyright */}
            <Copyright />
          </div>

          {/* right */}
          <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover overflow-y-scroll max-h-screen">
            {children}    
          </div>
        </main>
      </body>
    </html>
  );
}
