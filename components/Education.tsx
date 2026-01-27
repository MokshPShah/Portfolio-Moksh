"use client";
import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";

export function Education() {
  return (
    <div className="py-20 w-full relative">
       <h2 className="text-4xl font-bold text-center mb-16 text-white">
          My Journey
       </h2>

      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          
          {/* Item 1: B.Sc. IT */}
          <div className="mb-14">
            <span className="bg-emerald-500 text-black rounded-full text-sm w-fit px-4 py-1 font-bold mb-4 block">
              2024 - 2027 (Expected)
            </span>
            <h3 className="text-2xl font-bold text-white mb-2">
              B.Sc. IT (Bachelor of Science in Information Technology)
            </h3>
            <p className="text-neutral-400">
               Vidhyadeep University
            </p>
            <div className="text-sm mt-4 prose prose-sm dark:prose-invert text-neutral-300">
              <p>
                Currently pursuing my graduation. Building a strong theoretical foundation in Computer Science, Database Management, and Software Engineering.
              </p>
            </div>
          </div>

          {/* Item 2: Full Stack Course */}
          <div className="mb-14">
            <span className="bg-blue-500 text-white rounded-full text-sm w-fit px-4 py-1 font-bold mb-4 block">
              2024 - Present
            </span>
            <h3 className="text-2xl font-bold text-white mb-2">
              Full Stack Development Course
            </h3>
            <p className="text-neutral-400">
               Red & White Institute
            </p>
            <div className="text-sm mt-4 prose prose-sm dark:prose-invert text-neutral-300">
              <ul className="list-disc pl-5 space-y-2">
                 <li>Specialized skill development focusing on the MERN stack (MongoDB, Express, React, Node.js).</li>
                 <li>Hands-on practical project building and learning industry standards.</li>
              </ul>
            </div>
          </div>

          {/* Item 3: H.S.C */}
          <div className="mb-14">
            <span className="bg-purple-500 text-white rounded-full text-sm w-fit px-4 py-1 font-bold mb-4 block">
              2024
            </span>
            <h3 className="text-2xl font-bold text-white mb-2">
              Higher Secondary (H.S.C)
            </h3>
            <p className="text-neutral-400">
               12th Grade
            </p>
            <div className="text-sm mt-4 prose prose-sm dark:prose-invert text-neutral-300">
              <p>
                Completed with distinction. This period marked my full pivot into technology, where I started learning C Language and Basic Python.
              </p>
            </div>
          </div>

           {/* Item 4: S.S.C */}
           <div className="mb-14">
            <span className="bg-orange-500 text-white rounded-full text-sm w-fit px-4 py-1 font-bold mb-4 block">
              2022
            </span>
            <h3 className="text-2xl font-bold text-white mb-2">
              Secondary School (S.S.C)
            </h3>
            <p className="text-neutral-400">
               10th Grade
            </p>
            <div className="text-sm mt-4 prose prose-sm dark:prose-invert text-neutral-300">
              <p>
                Wrote my first line of HTML code during this time, sparking the curiosity that drives my career today.
              </p>
            </div>
          </div>

        </div>
      </TracingBeam>
    </div>
  );
}