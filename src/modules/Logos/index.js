import { useState, useEffect } from 'react';
import { json } from "../../Data/data";
import LogoList from "./components/LogoList";

const Logos = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const sortedData = json.sort(
      (a, b) => b.source_items.audience_size - a.source_items.audience_size
    );
    setData(sortedData);
  }, []);

  return <LogoList data={data} />;
};

export default Logos;
