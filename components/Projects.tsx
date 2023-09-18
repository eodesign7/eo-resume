import Image from "next/image";
import Link from "next/link";

import { MdOutlineCalendarToday, MdOutlineIosShare } from "react-icons/md";
import Img from "@/public/placeholder-img.jpg";
import projects from "@/projects";
import projectProps from "@/typing";

export default function Projects({
  id,
  title,
  date,
  description,
  tech,
  href,
}: projectProps) {
  return (
    <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project) => (
        <Link key={project.id} href={project.link}>
          <div className="bg-zinc-800 my-4 py-4 px-4 rounded-lg shadow-lg hover:scale-[1.025] transition-all ease-in-out duration-200">
            {/* Hero Image */}
            <div className="flex">
              <Image
                src={Img}
                alt="image"
                width={160}
                height={160}
                className="rounded-lg"
              />
              <div className="flex flex-col py-2 ml-4 justify-between">
                <div className="flex flex-col text-zinc-400 text-sm">
                  <h2 className="text-white text-xl">{project.title}</h2>
                  <div className="flex pt-2 space-x-2 items-center">
                    <MdOutlineCalendarToday />
                    <p className="text-sm">{project.date}</p>
                  </div>
                  <p className="text-xs pt-4">{project.description}</p>
                  <div className="pt-2 text-xs">{project.tech}</div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
