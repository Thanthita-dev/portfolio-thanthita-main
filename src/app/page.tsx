import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Stack from "@/components/Stack/Stack";
import Project from "@/components/Project/Project";
import Expericence from "@/components/Expericence/Expericence";
import Contact from "@/components/Contact/Contact";
import Education from "@/components/Education/Education";
import Skill from "@/components/Skill/Skill";
import Work2 from "@/components/Work2/Work2"
import Interractive from "@/components/Interractive/Interractive"

export default function Home() {
  return (
    <>
    <div className="overflow-x-hidden text-stone-300 antialiased">

      <div className="fixed inset-0 -z-10">

        <div className="relative h-full w-full bg-black">

          <div className="absolute bottom-0 left-0 right-0 top-0
          bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),
          linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
          bg-[size:14px_24px]"/>

        <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"/>


        </div>

      </div>

      {/* container here */}
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Education/>
        <Skill/>
        <Stack/>
        <Project/>
        <Expericence/>
        <Work2/>
        <Interractive/>
        <Contact/>
      </div>
    </div>
    </>
  );
}
