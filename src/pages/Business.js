import React from 'react'
import "../styles/pages/Business.css"
import { motion } from "framer-motion";

const Business = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="businessBody"
    >
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.25, duration: 0.5}}
        className='businessBG'>
      </motion.div>
      <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.75, duration: 0.5}}
        className='businessText'
      >
        <h1>Benefit from India’s fastest Supply Chain for Fresh Produce</h1>
        <p>
          Fasal Setu sources directly from farmers and moves fresh produce to
          businesses every day, in just 12 hours using analytics and technology
        </p>
        <button>
          Know More
        </button>
      </motion.div>
    </motion.div>
  );
}

export default Business