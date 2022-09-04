import { useEffect, useState } from "react";
import { urlFor, client } from "../lib/client";
import Loader from "../assets/loader.png";
import "../App.css";
import "../styles/pages/Marketplace.css";
import { motion } from "framer-motion";
import { AiFillStar } from "react-icons/ai";

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
          <p>
            Homegrown, the delicious-yet-healthy Village food you've been
            craving. We provide real food that tastes like your grandma made it,
            but with the convenience of door step delivery.
          </p>
          <div className="marketItemBody">
            {data.map((item) => {
              var arr = [];
              for (let i = 0; i < item.rating; i++) arr.push("a");
              return (
                <div className="marketItem">
                  <img src={urlFor(item.image)} alt="item" />
                  <h1>{item.name}</h1>
                  <p>₹ {item.price}</p>
                  <div className="rating">
                    {arr.map((star) => (
                      <AiFillStar className="star" />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default Marketplace;
