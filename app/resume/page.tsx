import {
  BiCalendarAlt,
  BiEnvelope,
  BiLogoFacebookSquare,
  BiLogoGithub,
  BiLogoInstagramAlt,
  BiMapPin,
  BiPhone,
  BiUser,
} from "react-icons/bi";
import Image from "next/image";

// Components
import About from "@/components/About";
import Acc from "@/components/Acc";
// import Projects from "@/components/Projects";

// Images
import Profile from "@/public/profile.png";
import Link from "next/link";

export default function Resume() {
  return (
    <div className="bg-zinc-900 flex flex-col min-h-screen justify-between px-24 py-4">
      <section>
        <div className="flex justify-between text-white space-y-8 pt-12 pb-24">
          <div>
            {/* Name */}
            <div className="flex items-center mb-8 text-2xl gap-4">
              <BiUser className="text-zinc-400" size={24} />
              <h3>Erik Ondrus</h3>
            </div>
            {/* Bio */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center text-sm font-light gap-4">
                <BiCalendarAlt className="text-zinc-400" size={24} />
                <p className="text-zinc-400">28 years old</p>
              </div>
              <div className="flex items-center text-sm font-light gap-4">
                <BiMapPin className="text-zinc-400" size={24} />
                <p className="text-zinc-400">Slovakia</p>
              </div>
            </div>
          </div>

          {/* PhotoSection */}
          <div>
            <Image
              src={Profile}
              alt="profile"
              width={160}
              height={160}
              className="rounded-lg grayscale"
            />
          </div>
        </div>
      </section>
      <section>
        <div></div>
      </section>

      {/* Content */}
      {/* About */}
      <About />
      <section>
        <Acc />
      </section>

      {/* Projects */}
      <section className="text-white space-y-8 pt-12 pb-24">
        <h1>Projects</h1>
        <p className="text-4xl text-zinc-400">
          Project section is under development...
        </p>

        <Link href={'/'} className="text-sm flex gap-2 text-zinc-400">
          Visit my GitHub Repo
        <BiLogoGithub size={20} />
        </Link>


        {/* <Projects
          id={""}
          title={""}
          date={""}
          description={""}
          tech={""}
          href={""}
        /> */}
      </section>

      {/* Conclusion */}
      <section className="text-white space-y-8 pt-12 pb-24">
        <h1>Conclusion & Motivation</h1>
        <p className="text-sm text-zinc-400 font-light tracking-wide">
          In summary, my journey from a background in 3D design and architecture
          to becoming a seasoned front-end developer and UI/UX designer has
          equipped me with a unique blend of skills and experiences. I have
          honed my craft over 12+ years, embracing technologies such as Next.js,
          TailwindCSS, and OpenAI, and have consistently delivered clean,
          user-friendly design solutions. My education in graphic design and
          architecture from esteemed institutions in Slovakia and Denmark laid a
          strong foundation, while my work experiences in diverse roles,
          including 3D graphic design and coding, have enriched my skill set.
          These experiences have culminated in my current status as a passionate
          UI/UX designer, where I have had the opportunity to create innovative
          solutions, such as an Employee Management system for a Zurich-based
          company, leveraging the latest technologies. My goal is to continue
          pushing the boundaries of my skills, transitioning toward becoming an
          independent full-stack developer, and building a dev studio with a
          dynamic team. Each day is a step closer to achieving this goal, and I
          am eager to contribute my expertise to the next challenge that comes
          my way.
        </p>
      </section>

      <footer className="text-zinc-400 flex justify-between">
        <div className="flex flex-col">
          <p className="text-xs">Follow Me</p>
          <div className="flex gap-2 mt-2">
            <BiLogoFacebookSquare size={28} />
            <BiLogoInstagramAlt size={28} />
            <BiLogoGithub size={28} />
          </div>
        </div>

        <div className="flex flex-col items-end">
          <p className="text-xs">Get in Touch</p>
          <div className="flex gap-2 items-center mt-2">
            <BiPhone size={24} />
            <p className="text-sm">+421 903 743 214</p>
          </div>
          <div className="flex gap-2 items-center">
            <BiEnvelope size={24} />
            <p className="text-sm">ondrus@eodesign.me</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
