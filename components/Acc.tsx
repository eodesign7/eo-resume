import { BiCalendarAlt } from "react-icons/bi";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  MdWorkOutline,
  MdOutlineSchool,
  MdOutlineSettingsSuggest,
  MdComputer,
} from "react-icons/md";
import { BiMap } from "react-icons/bi";

function Acc() {
  return (
    <Accordion type="multiple" className="py-24">
      {/* Education */}
      <AccordionItem value="education">
        <AccordionTrigger className="text-zinc-400">
          <div className="flex space-x-4 items-center">
            <MdOutlineSchool className="" size={24} />
            <p>Education</p>
          </div>
        </AccordionTrigger>
        <AccordionContent className="text-white py-10">
          {/* High School */}
          <div>
            <div className="flex space-x-2 text-zinc-400 items-center">
              <BiCalendarAlt />
              <p>2010 - 2014</p>
            </div>
            <h1 className="text-xl mt-8">Graphic Design</h1>
            <p>Private High School of Design</p>
            <div className="flex space-x-2 items-center text-zinc-400 mt-2 text-xs tracking-wider">
              <BiMap size={16} />
              <p>Nitra, Slovakia</p>
            </div>
            <hr className="my-8 opacity-20" />
          </div>

          {/* University 1 */}
          <div className="py-4">
            <div className="flex space-x-2 text-zinc-400 items-center">
              <BiCalendarAlt />
              <p>2015 - 2016</p>
            </div>
            <h1 className="text-xl mt-8">Architecture</h1>
            <p>AFAD - Academy of Fine Arts and Design</p>
            <div className="flex space-x-2 items-center text-zinc-400 mt-2 text-xs tracking-wider">
              <BiMap size={16} />
              <p>Bratislava, Slovakia</p>
            </div>
            <hr className="my-8 opacity-20" />
          </div>

          {/* University 2 */}
          <div className="py-4">
            <div className="flex space-x-2 text-zinc-400 items-center">
              <BiCalendarAlt />
              <p>2016 - 2018</p>
            </div>
            <h1 className="text-xl mt-8">
              Architecture Technologies & Construction Management
            </h1>
            <p>UCN - University of Nordyjjuland</p>
            <div className="flex space-x-2 items-center text-zinc-400 mt-2 text-xs tracking-wider">
              <BiMap size={16} />
              <p>Aalborg, Denmark</p>
            </div>
            <hr className="my-8 opacity-20" />
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Experiences */}
      <AccordionItem value="experiences">
        <AccordionTrigger className="text-zinc-400">
          <div className="flex space-x-4 items-center">
            <MdWorkOutline className="" size={24} />
            <p>Work Experiences</p>
          </div>
        </AccordionTrigger>

        {/* Work Experiences */}
        <AccordionContent className="text-white py-10">
          {/* AKA - Andrea Klimko Architecture */}
          <div>
            <div className="flex space-x-2 text-zinc-400 items-center">
              <BiCalendarAlt />
              <p>2015 - 2016</p>
            </div>
            <h1 className="text-xl mt-8">Graphic Designer</h1>
            <p>AKA - Andrea Klimko Architecture</p>

            <div className="py-8 w-full flex flex-col-2 text-[12px] font-[300] text-zinc-400 tracking-wide">
              <p className="w-1/2 pr-8">
                This job introduced me into working in architecture studio
                during my study at AFAD University. Work with well know
                architect and colleagues gave me lot of experiences much needed
                after college.
              </p>
              <ul className="flex-1">
                <li>- DTP Graphics</li>
                <li>- Digital Graphics</li>
                <li>- 3D Rendering</li>
              </ul>
            </div>

            <div className="flex space-x-2 items-center text-zinc-400 mt-2 text-xs tracking-wider">
              <BiMap size={16} />
              <p>Bratislava, Slovakia</p>
            </div>

            <div className="flex space-x-2 items-center text-zinc-400 mt-2 text-xs tracking-wider pt-2">
              <MdComputer size={16} />
              <p className="text-xs">3Ds Max, V-ray, Photoshop, inDesign</p>
            </div>
            <hr className="my-8 opacity-20" />
          </div>

          {/* Azzura Group */}
          <div className="py-4">
            <div className="flex space-x-2 text-zinc-400 items-center">
              <BiCalendarAlt />
              <p>2017 - 2018</p>
            </div>
            <h1 className="text-xl mt-8">Graphic Designer</h1>
            <p>Azzura Group</p>

            <div className="py-8 w-full flex flex-col-2 text-[12px] font-[300] text-zinc-400 tracking-wide">
              <p className="w-1/2 pr-8">
                Azzura group is a chain of restaurants and bistros in Aalborg,
                norden of Denmark. My job was to taking care of printed and
                digital propagation such as Menu Booklet, city light panels,
                restaurant graphics launching new products, upcoming restaurant
                design rendering, managing websites a social media.
              </p>
              <ul className="flex-1">
                <li>- DTP Graphics</li>
                <li>- Propagation materials</li>
                <li>- 3D Rendering</li>
                <li>- web design</li>
                <li>- Social media</li>
              </ul>
            </div>

            <div className="flex w-full justify-between items-center pb-2">
              <div className="flex space-x-2 items-center text-zinc-400 mt-2 text-xs tracking-wider">
                <BiMap size={16} />
                <p>Aalborg, Denmark</p>
              </div>
            </div>
            <div className="flex space-x-2 items-center text-zinc-400 mt-2 text-xs tracking-wider">
              <MdComputer size={16} />
              <p>Photoshop, Illustrator, Adobe XD</p>
            </div>
            <hr className="my-8 opacity-20" />
          </div>

          {/* Grandpano */}
          <div className="py-4">
            <div className="flex space-x-2 text-zinc-400 items-center">
              <BiCalendarAlt />
              <p>2018 - 2020</p>
            </div>
            <h1 className="text-xl mt-8">Interior & 3D Graphic Designer</h1>
            <p>Grandpano</p>

            <div className="py-8 w-full flex flex-col-2 text-[12px] font-[300] text-zinc-400 tracking-wide">
              <p className="w-1/2 pr-8">
                As a 3D graphic and interior designer, I was creating interiors
                for upcoming developments. Both public and residential. Through
                the cooperation with main architect and developer, we created
                stunning interiors and public spaces from small two bedroom
                apartments to luxurious penthouses.
              </p>
              <ul>
                <li>- Level Design</li>
                <li>- 3D Modeling</li>
                <li>- Assets Optimizing</li>
                <li>- Mapping and Shading</li>
                <li>- Lightning and Rendering</li>
                <li>- VR Development</li>
              </ul>
            </div>

            <div className="flex w-full justify-between items-center pb-2">
              <div className="flex space-x-2 items-center text-zinc-400 mt-2 text-xs tracking-wider">
                <BiMap size={16} />
                <p>Bratislava, Slovakia</p>
              </div>
            </div>

            <div className="flex space-x-2 items-center text-zinc-400 mt-2 text-xs tracking-wider">
              <MdComputer size={16} />
              <p className="text-xs">
                3Ds Max, V-ray, Unreal Engine, Photoshop
              </p>
            </div>
            <hr className="my-8 opacity-20" />
          </div>

          {/* Akular */}
          <div className="py-4">
            <div className="flex space-x-2 text-zinc-400 items-center">
              <BiCalendarAlt />
              <p>2020 - 2021</p>
            </div>
            <h1 className="text-xl mt-8">Senior 3D Graphic Designer</h1>
            <p>Akular</p>

            <div className="py-8 w-full flex flex-col-2 text-[12px] font-[300] text-zinc-400 tracking-wide">
              <p className="w-1/2 pr-8">
                This position was great experience and invited me into coding
                and development. Using new technologies and new workflow gave me
                huge step forward. Coming from architectural and design field,
                seeing project on blank site, before they are build using
                Augmented reality. Being part of development the team, which has
                created great mobile application for overseas market, gave
                construction workers ability to explore hidden features of
                buildings such as plumbing electricity etc, therefore avoid any
                damage to infrastructure.
              </p>

              <ul>
                <li>- 3D Modeling and GEO Optimizing</li>
                <li>- Mapping, shading, lightning</li>
                <li>- Creating efficient workflow</li>
                <li>- Model Diagnostics</li>
                <li>- Testing and Debugging</li>
              </ul>
            </div>

            <div className="flex space-x-2 items-center text-zinc-400 mt-2 text-xs tracking-wider">
              <BiMap size={16} />
              <p>
                Bratislava, Slovakia & Remote
                <span className="text-zinc-500">(During Covid-19)</span>
              </p>
            </div>
            <div className="flex space-x-2 items-center text-zinc-400 mt-2 text-xs tracking-wider pt-2">
              <MdComputer size={16} />
              <p>3Ds Max, Autocad, Unity, Akular App, Pixyz Studio</p>
            </div>
            <hr className="my-8 opacity-20" />
          </div>

          {/* IC - Hauswart */}
          <div className="py-4">
            <div className="flex space-x-2 text-zinc-400 items-center">
              <BiCalendarAlt />
              <p>2021 - 2022</p>
            </div>
            <h1 className="text-xl mt-8">UI UX Designer</h1>
            <p>IC Hauswart</p>

            <div className="py-8 w-full flex flex-col-2 text-[12px] font-[300] text-zinc-400 tracking-wide">
              <p className="w-1/2 pr-8">
                Creating a Employee Management system for cleaning, housekeeping
                and maintaining company with 50+ employees in Zurich kanton,
                which tracks workers on working site along with physical
                activities, motion using gyro, step counter and gps to enhance
                time management and efficiency for each task. geolocation and
                geoFence technologies were used to to avoid employees being out
                of the worksite during scheduled time. these technologies will
                be used to keep track of maintaining tools and expensive
                housekeeping equipment later on as well.
              </p>

              <ul>
                <li>- UI UX App / Web Design</li>
                <li>- Wireframes a Diagrams</li>
                <li>- Prototyping</li>
                <li>- Branding Identity</li>
                <li>- Documentation for Development</li>
              </ul>
            </div>

            <div className="flex space-x-2 items-center text-zinc-400 mt-2 text-xs tracking-wider">
              <BiMap size={16} />
              <p>Zurich, Switzerland</p>
            </div>
            <div className="flex space-x-2 items-center text-zinc-400 mt-2 text-xs tracking-wider pt-2">
              <MdComputer size={16} />
              <p>3Ds Max, Autocad, Unity, Akular App, Pixyz Studio</p>
            </div>
            <hr className="my-8 opacity-20" />
          </div>

          {/* Freelancing */}
          <div className="py-4">
            <div className="flex space-x-2 text-zinc-400 items-center">
              <BiCalendarAlt />
              <p>2018 - 2022</p>
            </div>
            <h1 className="text-xl mt-8">
              UI/UX Design & Development · 3D Graphics
            </h1>
            <p>eoDesign</p>

            <div className="py-8 w-full flex flex-col-2 text-[12px] font-[300] text-zinc-400 tracking-wide">
              <p className="w-1/2 pr-8">
                As I came back from studies in denmark I immediately started
                self-employment license under my personal eoDesign brand. The
                range of my services spreads from simple graphic design task
                such as logo design and branding towards more complicated tasks
                in 3D graphics and app development, both web and mobile.
                Nowadays I am focusing more on ui/ux design, front-end
                development rather than architecture or 3D graphics. Taking
                courses almost permanently finishing one and jump to another,
                keeps my learning, knowledge and skills set growing, leading
                toward full stack developer. I have 3 ongoing projects, “Probe
                Tag” based in Switzerland, “Scenarius” and “Lister”, you will
                see in the portfolio. My goal is to become a independent
                fullstack developer, not being attached to one place or
                location, with my own dev studio and dev team to bring all or my
                ideas into real world products. I am working toward my goals
                every single day and I am convinced that next job will push me
                even further and mutual exchange of experience and skills will
                help achieve the goal of mine.
              </p>
            </div>
            <div className="flex space-x-2 items-center text-zinc-400 mt-2 text-xs tracking-wider">
              <BiMap size={16} />
              <p>Slovakia</p>
            </div>
            <hr className="my-8 opacity-20" />
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Skills */}
      <AccordionItem value="skills">
        <AccordionTrigger className="text-zinc-400">
          <div className="flex space-x-4 items-center">
            <MdOutlineSettingsSuggest className="" size={24} />
            <p>Skills</p>
          </div>
        </AccordionTrigger>

        <AccordionContent className="text-white py-10">
          <h1 className="pb-4">Software Skills</h1>

          {/* UI UX Design */}
          <div className="w-full">
            <div className="pt-4 text-zinc-400">
              <h2 className="text-zinc-100 pb-2">UI / UX Design</h2>
              <p>Adobe XD</p>
              <p>Adobe Photoshop</p>
              <p>Adobe Illustrator</p>
            </div>
            {/* Development */}
            <div className="pt-4 text-zinc-400">
              <h2 className="text-zinc-100 pb-2">Development</h2>
              <p>ReactJS, NextJS, ReactNative, Expo</p>
              <p>TailwindCSS, Shadcn/ui, Framer Motion</p>
              <p>HTML, CSS, JavaScript</p>
              <p>Prisma</p>
            </div>
            {/* 3D Graphics */}
            <div className="flex-col pt-4 text-zinc-400">
              <h2 className="text-zinc-100 pb-2">3D Graphics</h2>
              <p>Adobe XD</p>
              <p>Adobe Photoshop</p>
              <p>Adobe Illustrator</p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default Acc;
