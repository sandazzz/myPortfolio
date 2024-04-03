"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";

export const HeroContext = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start"
    >
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="flex flex-col gap-6 mt-6 text-5xl md:text-6xl font-bold text-white max-w-md w-auto h-auto"
      >
        <span>
          Hi, my name is
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            Sanda{" "}
          </span>
        </span>
      </motion.div>

      <motion.p
        variants={slideInFromLeft(0.8)}
        className="text-lg text-gray-400 my-5 max-w-[600px]"
      >
        I&apos;m a Full Stack Web Developper. <br />
        Check out my projects and skills.
      </motion.p>
      <motion.a
        variants={slideInFromLeft(1)}
        className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
      >
        Learn More!
      </motion.a>
    </motion.div>
  );
};