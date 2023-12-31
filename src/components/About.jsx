import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { BallCanvas } from "./canvas";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm an aspiring computer scientist actively pursuing my studies at UofT.
        Proficient in Python, TypeScript, and Java, I possess specialized skills in 
        frameworks such as React and Three.js. My passion lies in the dynamic 
        realm of fintech, where I find joy engaging in projects as well as competing 
        in hackathons and business case competitions. I thrive in crafting innovative 
        and efficient solutions for real-world challenges.
      </motion.p>
      <div className="pt-8">
        <Tech />
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");