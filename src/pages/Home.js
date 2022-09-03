import React from 'react';
import Footer from '../components/Footer';
import "../styles/pages/Home.css";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{opacity: 0}}
      transition={{ duration: 1.15 }}
    >
      <div>Home</div>
      <Footer />
    </motion.div>
  );
}

export default Home