import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";


import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { ig, linkedin, jobit } from "../assets/index";

const Contact = () => {

  const [loading, setLoading] = useState(false);

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <div>
          <p className={styles.sectionSubText}>Contact</p>
          <h2 className={styles.sectionHeadText}>Get in Touch!</h2>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='relative'>
            <img
              src={jobit}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl'
            />

            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <img
                src={ig}
                alt='source code'
                className='w-10 h-10 object-contain'
              />
            </div>
          </div>
          <div className='relative'>
            <img
              src={jobit}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl'
            />

            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                <img
                  src={linkedin}
                  alt='source code'
                  className='w-10 h-10 object-contain'
                />
              </div>
            </div>
          </div>
        </div>
        
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");