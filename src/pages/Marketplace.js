import { useEffect, useState } from "react";
import { urlFor, client } from "../lib/client";
import Loader from "../assets/loader.png";
import "../App.css";
import "../styles/pages/Marketplace.css";
import { motion } from "framer-motion";

function Marketplace() {
  const [data, setData] = useState();
  const [load, setLoad] = useState(true);

  const fetchData = async () => {
    const query = `*[_type == "byproduct"]`;

    const products = await client.fetch(query);
    setData(products);
    setLoad(false);
    console.log(products)
  };

  const len = 5;

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.15 }}
      className="marketBody"
    >
      {load ? (
        <img src={Loader} className="loading" alt="loading" />
      ) : (
        <div className="marketSubBody">
          <h1>Marketplace</h1>
          <p>Where you can buy farmer's own made food!</p>
          <div className="marketItemBody">
            {data.map((item) => {
              var arr = []
              for(let i=0; i<5; i++)
                arr.push('a')
              return (
                <div className="marketItem">
                  <img src={urlFor(item.image)} alt="item" />
                  <h1>{item.name}</h1>
                  <p>₹ {item.price}</p>
                  {arr.map(star => (<h1>*</h1>))}
                </div>
              )})}
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default Marketplace;
