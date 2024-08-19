"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My journey in software engineering began with a deep curiosity about how technology shapes our world.
        Over the years, I’ve honed my skills in various programming languages and frameworks, and I’m eager
        to continue learning and contributing to innovative projects. I started from simple text based rpg's for fun
        as a kid in python and continously built my skills to build more impressive projects.
      </p>

      <p className="mb-3">
        Today, I have turned that fun interest into my career. I've earned a bachelors in{" "}
        <span className="font-medium">Computer Information systems </span>, to elevate my skills
        in engineering. I love the satisfaction that is rewarded to solving a complex problem. Its 
        an addictive loop where I am only satisfied by improving my self and my skills and watching myself
        flourish.
      </p>

      <p className="mb-3">
        I'm constantly seeking to expand my knowledge and stay at the forefront
        of technology. I enjoy making personal projects which are affiliated with my interests.
        I have a Chess opening move search engine, and have made a few games in unity for both 
        mobile and PC just for fun. 
      </p>

      <p>
        Outside of coding, I enjoy playing strategy games, playing badminton, and other spots. 
        I believe that variety is the spice of life, and love to change up my hobbies and approaches.
        My current goal is to work at a company where I can grow and make lifetime bonds with my teammates.
        I believe that a strong team can accomplish anything and sharing knowledge is the best way to 
        accelerate learning. 
      </p>

      <p>
      Feel free to explore my projects, check out the resources I’ve compiled, and connect with me if you have any opportunities 
      or collaboration ideas. Let’s connect and see how we can work together!
      </p>
    </motion.section>
  );
}
