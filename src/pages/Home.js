import React from 'react';
import Footer from '../components/Footer';
import "../styles/pages/Home.css";
import { motion } from "framer-motion";
import homeTop from "../assets/homeTop.png";
import homeMid from "../assets/homeMid.png";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="homeBody"
    >
      {/* top section */}
      <div className="homeTop">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.5 }}
        >
          An <span>AgroTech Platform</span> that bridges the gap between the{" "}
          <span>farmers</span> and the urbanites.
        </motion.h1>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          src={homeTop}
          alt="home top"
        />
      </div>

      {/* middle section */}
      <div className="homeMid">
        <img src={homeMid} alt="home top"/>
        <p>
          <span>Fasal Setu</span> is a one-stop platform for all the things
          related to farming. We are a B2B focused company, selling high quality
          fruits and vegetables straight from the farms to the businesses. Fasal
          Setu also provides expert's advice for growing crops in the coming
          year by analysing climate changes, UV radiations, etc.
        </p>
      </div>

      <Footer />
    </motion.div>
  );
}

export default Home