import styles from "./MainContent.module.css";
import star from "../../assets/Vector (1).svg";

const MainContent = () => {
  return (
    <div className={styles.mainContentWrapper}>
      <div className={styles.mainContent}>
        <img src={star} alt="" className={styles.star1} />
        <img src={star} alt="" className={styles.star2} />
        <div className={styles.mainText}>
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </div>
        <div className={styles.subText}>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </div>
        <button className={styles.btn}>Shop Now</button>
        <div className={styles.statistic}>
          <div className={styles.brand}>
            <div className={styles.brand__head}>200+</div>
            <div className={styles.brand__description}>
              International Brands
            </div>
          </div>
          <div className={styles.verticalLine}></div>
          <div className={styles.products}>
            <div className={styles.products__head}>2,000+</div>
            <div className={styles.products__description}>
              High-Quality Products
            </div>
          </div>
          <div className={styles.verticalLine}></div>
          <div className={styles.customers}>
            <div className={styles.customers__head}>30,000+</div>
            <div className={styles.customers__description}>Happy Customers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
