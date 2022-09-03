import { useEffect, useState } from "react";
import { urlFor, client } from "../lib/client";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Loader from "../assets/loader.png";
import "../App.css";
import { motion } from "framer-motion";

function Marketplace() {
  const [data, setData] = useState();
  const [load, setLoad] = useState(true);

  const price = 100;

  const fetchData = async () => {
    const query = `*[_type == "byproduct"]`;

    const products = await client.fetch(query);
    setData(products);
    setLoad(false);
    console.log(products)
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 1.15}}
    className="App">
      {load ? (
        <img src={Loader} className="loading" />
      ) : (
        <h1>
          {data.map((item) => (
            <div>
              <h1>{item.name}</h1>
              <img src={urlFor(item.image)} alt="item" />
            </div>
          ))}
        </h1>
      )}
    </motion.div>
  );
}

export default Marketplace;
