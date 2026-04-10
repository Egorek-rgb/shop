import styles from "./BlackLine.module.css";
import versace from "../../assets/Group.svg";
import zara from "../../assets/zara-logo-1 1.svg";
import gucci from "../../assets/gucci-logo-1 1.svg";
import prada from "../../assets/Group (1).svg";
import calvinKlein from "../../assets/Group (2).svg";
const BlackLine = () => {
  return (
    <>
      <div className={styles.blackLineWrapper}>
        <div className={styles.blackLine}>
          <img src={versace} alt="" />
          <img src={zara} alt="" />
          <img src={gucci} alt="" />
          <img src={prada} alt="" />
          <img src={calvinKlein} alt="" />
        </div>
      </div>
    </>
  );
};

export default BlackLine;
