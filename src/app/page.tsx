"use client";
import Image from "next/image";
import React, { useState, ChangeEvent } from "react";
import TextArea from "@/components/inputs/TextArea";
export default function Home() {
  const [sourceText, setSourceText] = useState<string>("");
  return (
    <div className="min-h-screen">
      <div className="relative flex min-h-screen w-full items-center justify-center bg-white dark:bg-black">
        <div
          className="fixed inset-0 [background-size:20px_20px] [background-image:radial-gradient(#d4d4d4_1px,transparent_1px)] dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none fixed inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        <div className="relative overflow-hidden h-screen">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 py-10 sm:py-24"> 
            <div className="text-center mt-50">
              <h1
                className="text-4xl sm:text-6xl font-bold text-nuetral-200">Son<span className="text-[#bf06e0]">der</span>
                </h1>
                <p className="mt-3 text-nuetral-400">
                  Bridging Voices, Connecting Worlds
                </p>
                <div className="mt-7 sm:mt-12 mx-auto max-w-3xl relative">
                  <div className ="gridgap-4 md:grid-cols-4 grid-cols-1">
                    <div className="relative z-10 flex flex-col space-x-3 border rounded-lg shadow-lg bg-nuetral-900 border-nuetral-700 shadow-gray-900/20">
                      <TextArea
                        id='source-language'
                        value={sourceText}
                        onChange={(e:ChangeEvent<HTMLTextAreaElement>)=>{
                          setSourceText(e.target.value);
                        }}
                        placeHolder="Source Language"
                      />
                      <div className="flex flex-row justify-between w-full">
                        <span className = "cursor-pointer flex space-x-2 flex-row">

                        </span>

                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
