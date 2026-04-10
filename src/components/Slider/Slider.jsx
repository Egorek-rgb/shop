import styles from "./Slideer.module.css";
import star from "../../assets/Star 1.svg";
import { useRef } from "react";

const Slider = () => {
  const sliderRef = useRef(null);

  const slides = [
    {
      id: 1,
      rating: 5,
      title: "Анна С.",
      text: "Отличный сервис! Всё быстро и качественно.",
    },
    {
      id: 2,
      rating: 4,
      title: "Михаил К.",
      text: "Хорошая работа, но есть над чем работать.",
    },
    {
      id: 3,
      rating: 5,
      title: "Елена В.",
      text: "Лучшие в своём деле! Рекомендую всем.",
    },
    {
      id: 4,
      rating: 5,
      title: "Дмитрий П.",
      text: "Профессионально и с душой. Спасибо!",
    },
    {
      id: 5,
      rating: 4,
      title: "Ольга Н.",
      text: "Всё отлично, буду обращаться ещё.",
    },
    {
      id: 6,
      rating: 5,
      title: "Игорь С.",
      text: "Быстро и надёжно. Очень доволен!",
    },
    {
      id: 7,
      rating: 4,
      title: "Мария Д.",
      text: "Хорошее качество, рекомендую.",
    },
  ];

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <img
          key={index}
          src={star}
          alt="star"
          style={{ opacity: index < rating ? 1 : 0.3 }}
        />
      ));
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      const slideWidth = document.querySelector(
        `.${styles.sliderItem}`,
      ).offsetWidth;
      const gap = 20;
      sliderRef.current.scrollBy({
        left: -(slideWidth + gap),
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const slideWidth = document.querySelector(
        `.${styles.sliderItem}`,
      ).offsetWidth;
      const gap = 20;
      sliderRef.current.scrollBy({
        left: slideWidth + gap,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className={styles.sliderContainer}>
        <div className={styles.arrowsHead}>
          <div
            className={styles.head}
            style={{ fontSize: 48, fontWeight: "bold" }}
          >
            OUR HAPPY CUSTOMERS
          </div>
          <div className={styles.arrows}>
            <button className={styles.arrowLeft} onClick={scrollLeft}>
              ←
            </button>

            <button className={styles.arrowRight} onClick={scrollRight}>
              →
            </button>
          </div>
        </div>
        <div className={styles.sliderWrapper}>
          <div className={styles.slider} ref={sliderRef}>
            {slides.map((slide) => (
              <div key={slide.id} className={styles.sliderItem}>
                <div className={styles.stars}>{renderStars(slide.rating)}</div>
                <h3 style={{ marginBottom: "12px", fontSize: "18px" }}>
                  {slide.title}
                </h3>
                <p
                  style={{ fontSize: "14px", color: "#666", lineHeight: "1.4" }}
                >
                  {slide.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
