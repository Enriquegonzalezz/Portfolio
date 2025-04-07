import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import AnimatedBeamDemo from "@/components/sintesiscomp/animated-beam";

function Projects() {
  return (
    <>
      <nav className="h-[150px] z-20">
        <NavBar />
      </nav>
      <main className="flex flex-col gap-16 max-w-[1200px] mx-10">
        <section className="md:flex hidden items-center">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-2">
              <h1 className="acorn-bold title text-8xl">My Projects </h1>
              <h1 className="acorn-bold text-6xl">Works and personal</h1>
              <h1 className="acorn-bold text-6xl">projects.</h1>
            </div>
            <p className="acorn-regular text-lg max-w-[600px]">
              I always enjoy working on personal projects, and these are some of
              the ones I have done over time.
            </p>
          </div>
          <Image
            src="/macsoulbeat.png"
            width={500}
            height={500}
            alt="Browser image"
            className="translate-x-[300px] hover:translate-x-[250px] transition-all"
          />
        </section>
        <section className="md:flex hidden flex-col items-center gap-10">
          <h2 className="acorn-bold text-6xl max-w-[600px] text-center">
            Finished
          </h2>
          <div className="flex justify-between w-full">
            <div
              style={{
                background: "linear-gradient(100deg, #FAAC12, #E07262)",
              }}
              className="w-[35%] relative h-[500px] rounded-[40px] overflow-hidden"
            >
              <h1 className=" py-5 z-10 px-10 right-0 absolute acorn-bold text-4xl">
                Ecommerce clone

              </h1>
              <a href={"https://github.com/Enriquegonzalezz/Mercli"} target="_blank">
                <div
                  style={{
                    width: "500px",
                    height: "400px",
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                  }}
                >
                  <Image
                    className="object-contain h-auto absolute translate-x-[200px] bottom-0 rounded-[40px] hover:translate-x-[120px] transition-all"
                    src="/merrcli.png"
                    layout="fill"
                    alt="story teller image"
                  />
                </div>
              </a>
            </div>
            <div
              style={{
                background: "linear-gradient(100deg, #7EBAFF, #2400FF)",
              }}
              className="w-[60%] relative h-[500px] rounded-[40px] overflow-hidden"
            >
              <h1 className=" py-5 z-10 px-10 right-0 absolute acorn-bold text-4xl">
                Music and social media world
              </h1>
              <a
                href={"https://soulbeat-main-aycgth.laravel.cloud/"}
                target="_blank"
              >
                <div
                  style={{
                    width: "500px",
                    height: "400px",
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                  }}
                >
                  <Image
                    className="object-cover h-auto absolute translate-x-[50px] bottom-0 rounded-[40px] hover:translate-x-[20px] transition-all"
                    src="/soul.png"
                    layout="fill"
                    alt="story teller image"
                  />
                </div>                
              </a>
            </div>
          </div>
        </section>
        <section id= "habilidades"className="md:flex hidden flex-col items-center justify-center">
        <h1 className="acorn-bold title text-6xl text-center mb-4">      
            My Skills
          </h1>
          
          
            <div className="flex min-h-[350px] w-full items-center justify-center p-10">
              <AnimatedBeamDemo />
            </div>
            <Footer />

        </section>
        <section className="flex md:hidden">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-5 items-center">
              <h1 className="acorn-bold title text-6xl text-center">
                My Projects
              </h1>
              <h1 className="acorn-bold text-4xl text-center">
                Works and personal projects.
              </h1>
            </div>
            <p className="acorn-regular text-lg max-w-[600px] text-center">
              I always enjoy working on personal projects, and these are some of
              the ones I have done over time.
            </p>
          </div>
        </section>
        <section className="flex md:hidden flex-col items-center gap-10">

          <h2 className="acorn-bold text-6xl max-w-[600px] text-center">
            Finished
          </h2>
          <div className="flex flex-col justify-between w-full gap-16">
            <div
              style={{
                background: "linear-gradient(100deg, #FAAC12, #E07262)",
              }}
              className="w-[100%] relative h-[500px] rounded-[40px] overflow-hidden"
            >
              <h1 className=" py-5 z-10 px-10 right-0 text-center acorn-bold text-4xl">
                Ecommerce clone
              </h1>
              <a href={"https://github.com/Enriquegonzalezz/Mercli"} target="_blank">
                <div
                  style={{
                    width: "60%",
                    height: "80%",
                    position: "absolute",
                    bottom: 0,
                    right:0,
                  }}
                >
                  <Image
                    className="object-cover h-full absolute  bottom-0 rounded-[40px]  transition-all"
                    src="/merrcli.png"
                    layout="fill"
                    alt="story teller image"
                  />
                </div>
              </a>
            </div>
            <div
              style={{
                background: "linear-gradient(100deg, #7EBAFF, #2400FF)",
              }}
              className="w-[100%] relative h-[500px] rounded-[40px] overflow-hidden"
            >
              <h1 className=" py-5 z-10 px-10 right-0 text-center acorn-bold text-4xl">
                Music and social media world
              </h1>
              <a
                href={"https://soulbeat-main-aycgth.laravel.cloud/login"}
                target="_blank"
              >
                <div
                  style={{
                    width: "500px",
                    height: "400px",
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                  }}
                >
                  <Image
                    className="object-cover h-auto absolute translate-x-[230px] bottom-0 rounded-[40px] transition-all"
                    src="/soul.png"
                    layout="fill"
                    alt="story teller image"
                  />
                </div>

                
              </a>
            </div>
          </div>
        </section>
        <section id= "habilidades"className="md:hidden flex flex-col items-center justify-center">
        <h1 className="acorn-bold title text-6xl text-center mb-4">      
            My Skills
          </h1>
          
          
          <div className="grid grid-cols-3 gap-6 w-full my-4 mb-10">
  {/* Fila 1 */}
  <div className="flex justify-center col-span-1 col-start-1 border-2 border-purple-700 rounded-lg bg-slate-700">
    <Image src="./Figma.png" alt="Figma" className="w-32 scale-125 rounded-full aspect-square h-auto" />
  </div>
  <div className="flex justify-center col-span-1 col-start-2 border-2 border-purple-700 rounded-lg bg-slate-700">
    <Image src="./Pythonlogo.png" alt="Python" className="w-28 rounded-full aspect-square h-auto scale-75 object-cover" />
  </div>

  {/* Fila 2 */}
  <div className="flex justify-center col-span-1 col-start-3 border-2 border-purple-700 rounded-lg bg-slate-700">
    <Image src="./Ts.png" alt="TypeScript" className="w-28 rounded-3xl aspect-square scale-90 h-auto" />
  </div>
  <div className="flex justify-center col-span-1 col-start-1 border-2 border-purple-700 rounded-lg bg-slate-700">
    <Image src="./fotoreact.png" alt="React" className="w-28 rounded-full aspect-square h-auto scale-125" />
  </div>

  {/* Fila 3 - Centrada */}
  <div className="flex justify-center col-span-1 col-start-2 border-2 border-purple-700 rounded-lg bg-slate-700">
    <Image src="./fotonext.png" alt="Next.js" className="scale-90 rounded-full aspect-square h-auto" />
  </div>
  <div className="flex justify-center col-span-1 col-start-3 border-2 border-purple-700 rounded-lg bg-slate-700 ">
    <Image src="./download.png" alt="CSS" className=" object-cover h-auto 
    " />
  </div>
</div>
            <Footer />

        </section>

          
        
      </main>
    </>
  );
}

export default Projects;
