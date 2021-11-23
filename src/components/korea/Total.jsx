import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../styles/Total/total.css";

const Total = () => {
  const [total, setTotal] = useState();
  const [death, setDeath] = useState();
  useEffect(() => {
    axios
      .get(
        "https://api.corona-19.kr/korea/?serviceKey=PZI6i94UJ1yOEtMerkQF2odYBD3mqVj7C"
      )
      .then((res) => {
        console.log(res.data);
        setTotal(res.data.TotalCase);
        setDeath(res.data.TotalDeath);
      });
  }, []);
  return (
    <div className="total__wrapper">
      <div className="total__info">
        확진자<span className="total__info-red">{total}</span>
      </div>
      <div className="total__info">
        사망자<span className="total__info-black">{death}</span>
      </div>
    </div>
  );
};

export default Total;
