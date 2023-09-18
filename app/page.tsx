"use client";

import Link from "next/link";

import { TypeAnimation } from "react-type-animation";

import {
  BiUser,
  BiCalendarAlt,
  BiMapPin,
  BiLogoFacebookSquare,
  BiLogoInstagramAlt,
  BiLogoGithub,
  BiPhone,
  BiEnvelope,
} from "react-icons/bi";
import { GrDocumentUser } from "react-icons/gr";

export default function Home() {
  return (
    <>
      <main className="bg-zinc-900 flex flex-col min-h-screen items-start justify-center px-24 py-4">
        <div className="text-zinc-400 text-4xl mb-8">
          <p className="mb-8 text-[2em]">I&apos;m</p>
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              500,
              "Designer,", // initially rendered starting point
              1000,
              "Developer",
              1000,
              "Creative",
              1000,
            ]}
            speed={50}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
        </div>
        <div className="text-3xl text-zinc-100 font-[600]">
          <h3>eoDesign.</h3>
          <p className="text-sm font-[200] pt-4">
            Design &<br /> Development
          </p>
        </div>

        <div className="pt-12">
          <Link
            href="/resume"
            className="flex items-center space-x-2 bg-zinc-600 py-2 px-4 rounded-lg hover:bg-zinc-500 animate translate-all duration-200 ease-in-out"
          >
            <h1 className="text-zinc-100 tracking-wider">Resume</h1>
          </Link>
        </div>
        <div className="mt-16 text-4xl text-zinc-400 font-[200]">
          Main website is under Development
        </div>
      </main>
      <footer className="w-full absolute bottom-4 flex justify-center text-sm text-zinc-700">
        ©2023 eoDesign | All Rights Reserved.
      </footer>
    </>
  );
}
