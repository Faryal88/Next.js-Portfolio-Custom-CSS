"use client";
import { TypeAnimation } from "react-type-animation";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header"; 
import Project from "./components/project";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header /> 
      <section className="bg-gradient-to-b from-[#571b52] to-[#0e051f] flex-col h-screen bg-cover bg-no-repeat">
        <div className="grid grid-cols-1 sm:grid-cols-12 pt-10 container mx-auto px-10 py-4 pb-4">
          <div className="col-span-8 md:p-8 place-content-center text-center sm:text-left">
            <div className="text-stone-50 mb-12 text-3xl lg:text-6xl font-Merienda font-extrabold"> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 font-black">
                Hello! I`m <br />
              </span>

              <TypeAnimation
                sequence={[
                  "Faryal Abbasi",
                  1000, 
                  "Frontend Developer",
                  1000,
                ]}
                wrapper="span"
                speed={60}
                repeat={Infinity}
              />
            </div>

            <p className="text-stone-50 sm:text-lg lg:text-lg font-sans mb-12"> 
            I develop dynamic and responsive web applications that provide exceptional {" "}
              <br />
            user experiences across all platforms and devices.
            </p>
            <div>
              <Link href="mailto:faryalabbasi88@gmail.com">
                <button className="px-6 py-3 rounded-full mr-4 bg-gradient-to-r from-pink-800 to-pink-700 hover:translate-y-1 transition-transform duration-200 text-white w-full sm:w-fit mb-8">
                  Hire Me
                </button>
              </Link>

              <button className="px-6 py-3 rounded-full mr-4 bg-gradient-to-r from-pink-800 to-pink-700 hover:translate-y-1 transition-transform duration-200 text-white w-full sm:w-fit mb-8">
                  Downlode CV
                </button>
            </div>
          </div>

          <div className="rounded-full border border-slate-400 shadow-lg shadow-pink-700 bg-[url('/me1.jpg')] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] bg-cover bg-center mx-auto sm:mx-0"></div>
        </div>
      </section>

      <About />
      <Project /> 
      <Contact />
      <Footer />
    </main>
  );
}
