import { useState } from "react";
import Covid from "../components/Covid/Covid";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Provinces from "../components/Provinces/Provinces";

import data from "../components/utils/constants/provinces";

function Home() {
  const [provinceData, setProvinceData] = useState(data);
  
  return (
    <div>
      <Navbar />
      <Hero />
      <Covid />
      <Provinces data={provinceData}/>
      <Form provinceState={[provinceData, setProvinceData]} />
      <Footer />
    </div>
  );
}

export default Home;
