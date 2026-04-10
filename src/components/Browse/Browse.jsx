import style from "./Browse.module.css";
import casual from "../../assets/image 11.png";
import formal from "../../assets/image 13.png";
import party from "../../assets/image 12.png";
import gym from "../../assets/image 14.png";
const Browse = () => {
  return (
    <>
      <div className={style.browse} style={{ borderRadius: 20, marginTop: 80 }}>
        <div
          className={style.headText}
          style={{
            textTransform: "uppercase",
            textAlign: "center",
            marginBottom: 64,
          }}
        >
          BROWSE BY dress STYLE
        </div>
        <div className={style.galary}>
          <div className={style.galary__topLine}>
            <img
              src={casual}
              className={style.casual}
              style={{ borderRadius: 20 }}
              alt=""
            />
            <img
              src={formal}
              className={style.formal}
              alt=""
              style={{ borderRadius: 20 }}
            />
          </div>
          <div className={style.galary__bottomLine}>
            <img
              src={party}
              className={style.partyImage}
              alt=""
              style={{ borderRadius: 20 }}
            />
            <img
              src={gym}
              className={style.gymImage}
              alt=""
              style={{ borderRadius: 20 }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Browse;
