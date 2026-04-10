import styles from "./NewArrivals.module.css";
import tShirt from "../../assets/Frame 32.png";
import star from "../../assets/Star 1.svg";
import partStar from "../../assets/Star 5.svg";
const NewArrivals = () => {
  const arrayOfItems = [
    {
      id: 1,
      img: tShirt,
      name: "T-SHIRT WITH TAPE DETAILS",
      star: star,
      cost: 120,
      numOfStars: 5,
    },
    {
      id: 2,
      img: tShirt,
      name: "T-SHIRT WITH TAPE DETAILS",
      star: star,
      cost: 120,
      numOfStars: 2.5,
    },
    {
      id: 3,
      img: tShirt,
      name: "T-SHIRT WITH TAPE DETAILS",
      star: star,
      cost: 120,
      numOfStars: 3.5,
    },
    {
      id: 4,
      img: tShirt,
      name: "T-SHIRT WITH TAPE DETAILS",
      star: star,
      cost: 120,
      numOfStars: 4,
    },
  ];
  return (
    <>
      <div className={styles.head}>NEW ARRIVALS</div>
      <div className={styles.items}>
        {arrayOfItems.map((item) => (
          <div className={styles.item} key={item.id}>
            <div className={styles.itemImg}>
              <img className={styles.img} src={item.img} alt="" />
            </div>
            <div className={styles.mainContent}>
              <div className={styles.itemName}>{item.name}</div>
              <div className={styles.stars}>
                {[...Array(Math.ceil(item.numOfStars))].map((_, index) => {
                  const isLastStar = index === Math.ceil(item.numOfStars) - 1;
                  const hasHalfStar = item.numOfStars % 1 !== 0;
                  return isLastStar && hasHalfStar ? (
                    <img src={partStar} alt="" key={index} />
                  ) : (
                    <img src={star} alt="" key={index} />
                  );
                })}
                <div className={styles.raiting}>{item.numOfStars}/5</div>
              </div>
              <div className={styles.cost}>${item.cost}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewArrivals;
