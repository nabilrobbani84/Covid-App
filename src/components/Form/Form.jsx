import Styles from "./Form.module.css";
import data from "../utils/constants/provinces";

export default function Form({provinceState:[provinceData, setProvinceData ]}) {
  function submitHandler() {
    event.preventDefault();
    const input_jumlah = parseInt(document.getElementById('jumlah').value);
    const input_provinsi = document.getElementById('provinsi').value;
    const input_status = document.getElementById('status').value;
   
    const newprovinceData = {...provinceData};
    newprovinceData.provinces[input_provinsi][input_status] += input_jumlah;

    setProvinceData(newprovinceData);

    document.getElementById('form').reset();
  }

  return (
    <section className={Styles.container}>
      <div className={Styles.form__left}>
        <img
          className={Styles.form__image}
          src="/images/covid.png"
          alt="placeholder"
        />
      </div>
      <div className={Styles.form__right}>
        <h2 className={Styles.title}>Form Covid</h2>
        <form className={Styles.form} onSubmit={submitHandler} id="form">
          <label className={Styles.form__label}>Provinsi :</label>
          <select
            className={Styles.form__input}
            type="text"
            name="provinsi"
            id="provinsi"
            required
          >
            <option value="">Pilih Provinsi</option>
            {provinceData.provinces.map((province, index) => {
              return <option key={index} value={index}>{province.kota}</option>;
            })}
          </select>

          <label className={Styles.form__label}>Status :</label>
          <select
            className={Styles.form__input}
            type="text"
            name="status"
            id="status"
            required
          >
            <option value="">Pilih Status</option>
            <option value="kasus">Kasus</option>
            <option value="sembuh">Sembuh</option>
            <option value="meninggal">Meninggal</option>
            <option value="dirawat">Dirawat</option>
          </select>

          <label className={Styles.form__label}>Jumlah :</label>
          <input
            className={Styles.form__input}
            type="number"
            name="jumlah"
            id="jumlah"
            required
          />
          <button className={Styles.form__submit} type="submit">
            Submit
          </button>
        </form>{" "}
      </div>
    </section>
  );
}
