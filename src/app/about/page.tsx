"use client"

import React from "react";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import Footer from "@/components/Footer";
import AnimatedBeamDemo from "@/components/sintesiscomp/animated-beam";
import Link from "next/link";
import { useRouter } from "next/navigation";




function About() {

  const router = useRouter();

  return (
    <>
      <nav className="md:h-[150px] h-[100px] z-[20]">
        <NavBar />
      </nav>
      <main className="flex flex-col gap-16 max-w-[80%] mx-10 items-center">
        {/* ==================== VERSIÓN DESKTOP (GRID 6x5) ==================== */}
        <div className="hidden md:grid grid-cols-6 grid-rows-5 gap-8 w-full min-h-[800px]">
          {/* Div2 - Imagen (2x5, col1) */}
          <div className="col-span-2 row-span-5 col-start-1 row-start-1 relative rounded-lg overflow-hidden hover transition duration-300 hover:scale-105">
            <Image
              src="/viendotel.JPG"
              fill
              alt="Profile image"
              className="object-cover"
              priority
            />
          </div>

          {/* Div1 - Nombre y título (2x2, col3) */}
          <div className="col-span-2 row-span-2 col-start-3 row-start-1 bg-gray-200 p-6 rounded-lg flex flex-col justify-center hover:bg-gray-50 transition duration-300 hover:scale-105">
            <div className="flex flex-col gap-4">
              <h1 className="acorn-bold title text-5xl">Hi! I am Enrique Gonzalez</h1>
              <h1 className="acorn-bold text-3xl text-neutral-800">Computer Engineering (WP)</h1>
            </div>
          </div>

          {/* Div4 - Experiencia (2x3, col5, fila1) */}
          <div className=" col-span-2 row-span-2 col-start-5 row-start-4 bg-green-100 p-6 rounded-lg hover:bg-green-200 transition duration-300 hover:scale-105">
            <h2 className="acorn-bold text-3xl mb-8 text-neutral-800">Experiencie</h2>
            <div className="flex flex-col gap-4 w-full h-full ">
              <p className="montserrat text-neutral-800 text-center text-lg">
              3+ years building web & mobile apps
              Specializing in React, TypeScript, and React Native, I collaborate with teams using agile methodologies to deliver solutions for diverse clients
              </p>
            </div>
          </div>

          {/* Div3 - Frontend developer (2x3, col3, fila3) */}
          <div className="col-span-2 row-span-3 col-start-3 row-start-3 bg-blue-100 p-6 rounded-lg flex flex-col hover:bg-blue-200 transition duration-300 hover:scale-105 text-neutral-800 h-[500px] overflow-hidden">
  <div className="flex justify-between items-center gap-4 mb-4">
  <h1 className="acorn-bold text-4xl mb-4">& Frontend <br />developer</h1>
 
  </div>

  <div className="flex-1 overflow-hidden border rounded-lg box-border-gray-300">
    <img 
      src="./presentacionsoulbeat.png" 
      alt="" 
      loading="lazy"
      className="object-cover w-full h-full transition-transform duration-300 transform hover:rotate-3 hover:scale-105"
    />
  </div>
</div>

          {/* Div5 - Habilidades (2x2, col5, fila4) */}
          <div className="relative col-span-2 row-span-3 col-start-5 row-start-1 bg-purple-100 p-6 rounded-lg hover:bg-purple-200 transition duration-300 hover:scale-105 overflow-hidden z-0">
            <h2 className="acorn-bold text-3xl mb-4 text-neutral-800">Skills</h2>
           <div className="justify-center items-center flex flex-col gap-4"> 
           <button
  onClick={() => router.push('/projects#habilidades')}
  className="relative px-8 py-3 bg-black text-white font-semibold rounded-lg border-2 border-purple-500 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_20px_10px_rgba(168,85,247,0.6)] active:scale-95 active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] group"
>
  <span className="flex items-center space-x-2">
    <span>See my Skills</span>
  </span>
  <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/20 to-indigo-500/20"></span>
</button>
<div className="relative w-full h-64 -mb-32 z-0">
      <img 
        src="./soulbeat1-portrait.png" 
        alt=""
        className="absolute top-0 left-0 w-full h-[200%] object-cover object-top z-0 hover:scale-105 transition-transform duration-300 transform " 
      />
    </div>
           </div>
          </div>
        </div>
        <h1 className="acorn-bold title text-5xl hidden md:flex">My Projects</h1>
        <div className=" hidden md:grid grid-cols-3 grid-rows-2 gap-8 w-full min-h-[800px] "> 
        <div className="relative group overflow-hidden rounded-xl w-full max-w-xs mx-auto border-2 border-transparent hover:border-purple-500 transition-all duration-300">
          <div className="relative">
            <img 
              src="/soulshowp.png" 
              alt="Descripción"
              className="w-full h-auto object-contain"
            />
            
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-bold text-white mb-1">Soulbeat</h3>
                <p className="text-gray-300 text-sm line-clamp-2">
                  Is a social media with ecommerce features, where you can share your music and buy it. 
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
        </div>
        <div className="relative group overflow-hidden rounded-xl w-full max-w-xs mx-auto border-2 border-transparent hover:border-purple-500 transition-all duration-300">
          <div className="relative">
            <img 
              src="/merclishowp.png" 
              alt="Descripción"
              className="w-full h-auto object-contain"
            />
            
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-bold text-white mb-1">Mercli</h3>
                <p className="text-gray-300 text-sm line-clamp-2">
                  Is a ecommerce platform where you can buy and sell your products.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
        </div>
        <div className="relative group overflow-hidden rounded-xl w-full max-w-xs mx-auto border-2 border-transparent hover:border-purple-500 transition-all duration-300">
          <div className="relative">
            <img 
              src="/givershowp.png" 
              alt="Descripción"
              className="w-full h-auto object-contain"
            />
            
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-bold text-white mb-1">Giver</h3>
                <p className="text-gray-300 text-sm line-clamp-2">
                  Is a app mobile where you can see the sizes of your friends and they brands favorites.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
        </div>
        <div className="relative group overflow-hidden rounded-xl w-full max-w-xs mx-auto bg-gray-800/50 border border-gray-700">
    {/* Contenedor de imagen con overlay */}
    <div className="relative h-64 w-full overflow-hidden">
      {/* Efecto shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-shimmer bg-[length:200%_100%]"></div>
      
      {/* Overlay con texto */}
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <span className="text-white/80 text-xl font-bold tracking-wider uppercase rotate-[-10deg] transform">
          Coming Soon
        </span>
      </div>
    </div>
    
    {/* Placeholder del contenido */}
    <div className="p-4 space-y-3">
      <div className="h-6 w-3/4 bg-gray-700 rounded-full animate-pulse mx-auto"></div>
      <div className="space-y-2 mt-2">
        <div className="h-3 w-full bg-gray-700 rounded-full animate-pulse"></div>
        <div className="h-3 w-5/6 bg-gray-700 rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>
  <div className="relative group overflow-hidden rounded-xl w-full max-w-xs mx-auto bg-gray-800/50 border border-gray-700">
    {/* Contenedor de imagen con overlay */}
    <div className="relative h-64 w-full overflow-hidden">
      {/* Efecto shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-shimmer bg-[length:200%_100%]"></div>
      
      {/* Overlay con texto */}
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <span className="text-white/80 text-xl font-bold tracking-wider uppercase rotate-[-10deg] transform">
          Coming Soon
        </span>
      </div>
    </div>
    
    {/* Placeholder del contenido */}
    <div className="p-4 space-y-3">
      <div className="h-6 w-3/4 bg-gray-700 rounded-full animate-pulse mx-auto"></div>
      <div className="space-y-2 mt-2">
        <div className="h-3 w-full bg-gray-700 rounded-full animate-pulse"></div>
        <div className="h-3 w-5/6 bg-gray-700 rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>
  <div className="relative group overflow-hidden rounded-xl w-full max-w-xs mx-auto bg-gray-800/50 border border-gray-700">
    {/* Contenedor de imagen con overlay */}
    <div className="relative h-64 w-full overflow-hidden">
      {/* Efecto shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-shimmer bg-[length:200%_100%]"></div>
      
      {/* Overlay con texto */}
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <span className="text-white/80 text-xl font-bold tracking-wider uppercase rotate-[-10deg] transform">
          Coming Soon
        </span>
      </div>
    </div>
    
    {/* Placeholder del contenido */}
    <div className="p-4 space-y-3">
      <div className="h-6 w-3/4 bg-gray-700 rounded-full animate-pulse mx-auto"></div>
      <div className="space-y-2 mt-2">
        <div className="h-3 w-full bg-gray-700 rounded-full animate-pulse"></div>
        <div className="h-3 w-5/6 bg-gray-700 rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>
        </div>



     {/* ==================== VERSIÓN MOBILE ==================== */}
     <div className="md:hidden w-full min-h-screen p-4 space-y-5 overflow-y-auto">
  {/* Sección 1: Nombre */}
  <section className="w-full p-6 rounded-lg bg-gray-200 shadow-md">
    <div className="flex flex-col gap-5 text-center">
      <h1 className="acorn-bold title text-4xl">
        Hi! I am Enrique Gonzalez
      </h1>
      <h1 className="acorn-bold text-2xl text-neutral-900">
      Computer Engineering (WP)
      </h1>
    </div>
  </section>

  {/* Sección 2: Frontend Developer */}
  <section className="w-full p-6 rounded-lg bg-blue-100 shadow-md flex flex-col items-center gap-6">
    <h1 className="acorn-bold text-4xl text-center text-neutral-800">
      & Frontend developer
    </h1>
    <div className="w-full h-64 overflow-hidden border-2 border-gray-300 rounded-lg">
      <img 
        src="./presentacionsoulbeat.png" 
        alt="Frontend Development" 
        loading="lazy"
        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
      />
    </div>
  </section>

  {/* Sección 3: Imagen */}
  <section className="w-full rounded-lg overflow-hidden shadow-md aspect-square relative">
    <Image
      src="/viendotel.JPG"
      fill
      alt="Profile image"
      className="object-cover"
      priority
    />
  </section>

  {/* Sección 4: Experiencia */}
  <section className="w-full p-6 rounded-lg bg-green-100 shadow-md">
    <div className="max-w-[400px] mx-auto">
      <h2 className="acorn-bold text-3xl mb-4 text-center text-neutral-800">Experiencie</h2>
      <p className="montserrat text-lg text-center text-neutral-800">
      3+ years building web & mobile apps
              Specializing in React, TypeScript, and React Native, I collaborate with teams using agile methodologies to deliver solutions for diverse clients
      </p>
    </div>
  </section>

  {/* Sección 5: Habilidades */}
  <div className="relative col-span-2 row-span-3 col-start-5 row-start-1 bg-purple-100 p-6 rounded-lg hover:bg-purple-200 transition duration-300 hover:scale-105 overflow-hidden z-0">
            <h2 className="acorn-bold text-3xl mb-4 text-neutral-800 flex justify-center">Skills</h2>
           <div className="justify-center items-center flex flex-col gap-4"> 
           <button
  onClick={() => router.push('/projects#habilidades')}
  className="relative px-8 py-3 bg-black text-white font-semibold rounded-lg border-2 border-purple-500 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_20px_10px_rgba(168,85,247,0.6)] active:scale-95 active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] group"
>
  <span className="flex items-center space-x-2">
    <span>See my Skills</span>
  </span>
  <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-1+3 00 transition-opacity duration-300 bg-gradient-to-r from-purple-500/20 to-indigo-500/20"></span>
</button>
<div className="relative w-full h-64 -mb-32 z-0">
      <img 
        src="./soulbeat1-portrait.png" 
        alt=""
        className="absolute top-0 left-0 w-full h-[200%] object-cover object-top z-0 hover:scale-105 transition-transform duration-300 transform " 
      />
    </div>


    </div>
  </div>

  <h1 className="acorn-bold title text-5xl md:hidden flex justify-center my-6">My Projects</h1>
<div className="md:hidden flex flex-col gap-8 w-full px-4">
  {/* Proyecto 1 - Soulbeat */}
  <div className="relative group overflow-hidden rounded-xl w-full mx-auto border-2 border-transparent hover:border-purple-500 transition-all duration-300">
    <div className="relative">
      <img 
        src="/soulshowp.png" 
        alt="Soulbeat Project"
        className="w-full h-auto object-contain"
      />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-xl font-bold text-white mb-1">Soulbeat</h3>
          <p className="text-gray-300 text-sm line-clamp-2">
            Is a social media with ecommerce features, where you can share your music and buy it.
          </p>
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
  </div>

  {/* Proyecto 2 - Mercli */}
  <div className="relative group overflow-hidden rounded-xl w-full mx-auto border-2 border-transparent hover:border-purple-500 transition-all duration-300">
    <div className="relative">
      <img 
        src="/merclishowp.png" 
        alt="Mercli Project"
        className="w-full h-auto object-contain"
      />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-xl font-bold text-white mb-1">Mercli</h3>
          <p className="text-gray-300 text-sm line-clamp-2">
            Is a ecommerce platform where you can buy and sell your products.
          </p>
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
  </div>

  {/* Proyecto 3 - Giver */}
  <div className="relative group overflow-hidden rounded-xl w-full mx-auto border-2 border-transparent hover:border-purple-500 transition-all duration-300">
    <div className="relative">
      <img 
        src="/givershowp.png" 
        alt="Giver Project"
        className="w-full h-auto object-contain"
      />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-xl font-bold text-white mb-1">Giver</h3>
          <p className="text-gray-300 text-sm line-clamp-2">
            Is a app mobile where you can see the sizes of your friends and they brands favorites.
          </p>
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
  </div>

  {/* Placeholders para móvil */}
  {[1, 2, 3].map((item) => (
    <div key={item} className="relative group overflow-hidden rounded-xl w-full mx-auto bg-gray-800/50 border border-gray-700">
      <div className="relative h-64 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-shimmer bg-[length:200%_100%]"></div>
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <span className="text-white/80 text-xl font-bold tracking-wider uppercase rotate-[-10deg] transform">
            Coming Soon
          </span>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div className="h-6 w-3/4 bg-gray-700 rounded-full animate-pulse mx-auto"></div>
        <div className="space-y-2 mt-2">
          <div className="h-3 w-full bg-gray-700 rounded-full animate-pulse"></div>
          <div className="h-3 w-5/6 bg-gray-700 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  ))}
</div>


</div>

        <Footer />
      </main>
    </>
  );
}

export default About;