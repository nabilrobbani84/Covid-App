import Styles from "./Covid.module.css";
import data from "../../components/utils/constants/indonesia.js";

export default function Covid() {
  return (
    <div className={Styles.class}>
      <div className={Styles.container}>
        <h2 className={Styles.title}>Indonesia</h2>
        <p className={Styles.subtitle}>Data Covid Berdasarkan Indonesia</p>
        <div>
          <div className={Styles.covid__card_container}>
            <CovidCard record={data.indonesia[0]}/> 
            <CovidCard record={data.indonesia[1]}/> 
            <CovidCard record={data.indonesia[2]}/> 
          </div>
        </div>
      </div>
    </div>
  );
}

function CovidCard({record}) {
  return (
   <div className={Styles.covid__card}>
   <i>{/* <img src="images/class2.png" alt="#" /> */}</i>
   <span className={Styles.covid__number}>
     {record.total}
   </span>
   <span className={Styles.covid__status}>
      {record.status}
   </span>
 </div>
  )
}