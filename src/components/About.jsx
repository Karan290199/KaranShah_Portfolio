import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import {SectionWrapper} from "../hoc";

const ServiceCard = ({index, title, icon}) => {
  return <Tilt className="xs:w-[250px] w-full">
    <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <div options={{
        max: 45,
        scale: 1,
        speed: 450
      }}className="bg-tertiary rounded-[20px] py-5 px-12 min-h[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt = {title} className="w-60 h-60 object-contain"/>
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>INTRODUCTION</p>
        <h2 className={styles.sectionHeadText}>OVERVIEW</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am passionate about software development and I am looking forward to
        work on new projects in the near future. I would like to be a valuable
        asset to the company where i could provide my time and efforts in the
        most optimal manner. In my spare time, I enjoy reading books, listening to music.
        Feel free to send me a message if you would like to know more about me. 
        I am always eager to hear from others and expand my network on<a href="https://www.linkedin.com/in/karanshah575633157/" className="font-bold"> LinkedIn</a>
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {
          services.map((service, index) => {
            return <ServiceCard key = {service.title} index = {index} {...service}/>
          })
        }
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
