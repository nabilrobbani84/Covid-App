import styles from "./Provinces.module.css";

import data from "../utils/constants/provinces";

export default function Provinces({data}) {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Provinsi</h2>
      <p className={styles.p}>data Covid berdasarkan provinsi</p>
      <div className={styles.table__wrapper}>
        <table
          border={2}
          style={{ borderCollapse: "collapse" }}
          className={styles.table}
        >
          <thead className={styles.thead}>
            <tr>
              <th>No</th>
              <th>Province</th>
              <th>Positif</th>
              <th>Sembuh</th>
              <th>Dirawat</th>
              <th>Meninggal</th>
            </tr>
          </thead>
          <tbody>
            {data.provinces.map((e, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{e.kota}</td>
                  <th>{e.kasus}</th>
                  <th>{e.sembuh}</th>
                  <th>{e.dirawat}</th>
                  <th>{e.meninggal}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
