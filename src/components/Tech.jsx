import React from "react";
import { styles } from "../style";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";

const Tech = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="flex justify-center items-center"
      >
        <h2 className={styles.sectionHeadText}>Competencies</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas id = {technology.name} icon={technology.icon}/>
            <div className="flex justify-center items-center">
              <p
                className="text-secondary text-[16px] font-semibold"
                style={{ margin: 0 }}
              >
                {technology.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "Tech");
