import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/SHOP.CO.png";
import shop from "../../assets/Frame (5).png";
import profile from "../../assets/Frame (9).png";
import burger from "../../assets/Vector (2).svg";
import search from "../../assets/Frame.svg";
import delet from "../../assets/Vector (3).svg";
import tShirt from "../../assets/Frame 33.png";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const [isOpenShop, setIsOpenShop] = useState(false);
  const toggleShop = () => {
    setIsOpenShop(!isOpenShop);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfile = () => {
    setIsOpenProfile(!isOpenProfile);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const closeProfile = () => {
    setIsOpenProfile(false);
  };

  // Блокировка скролла при открытом меню
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Закрытие профиля при клике вне области
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpenProfile && !event.target.closest(`.${styles.profileWrapper}`)) {
        setIsOpenProfile(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpenProfile]);
  return (
    <>
      <header className={styles.header}>
        {/* Бургер-иконка (только для мобильных) */}
        <div className={styles.burger} onClick={toggleMenu}>
          <img src={burger} alt="menu" />
        </div>

        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>

        {/* Единая навигация */}
        <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
          <ul className={styles.list}>
            <li className={styles.item} onClick={closeMenu}>
              Shop
            </li>
            <li className={styles.item} onClick={closeMenu}>
              On Sale
            </li>
            <li className={styles.item} onClick={closeMenu}>
              New Arrivals
            </li>
            <li className={styles.item} onClick={closeMenu}>
              Brands
            </li>
          </ul>
        </nav>

        <form action="">
          <div className={styles.searchWrapper}>
            <input
              type="search"
              className={styles.search}
              placeholder="Search for products..."
            />
          </div>
        </form>

        <div className={styles.icons}>
          <img src={search} alt="search" className={styles.lupa} />
          {/* Обертка для корзины */}
          <div className={styles.shopWrapper}>
            <img
              src={shop}
              alt="cart"
              className={styles.shop}
              onClick={toggleShop}
            />
            {isOpenShop && (
              <div className={styles.shopMenu}>
                <h2 className={styles.shopMenu__head}>Your Lorem</h2>
                <div className={styles.products}>
                  <div className={styles.product}>
                    <div className={styles.leftInfo}>
                      <img src={tShirt} alt="" />
                      <div className={styles.mainInfoOfProduct}>
                        <div className={styles.nameOfProduct}>
                          Gradient Graphic T-shirt
                        </div>
                        <div className={styles.sizeOfProduct}>Size: Large</div>
                        <div className={styles.colorOfProduct}>
                          Color: White
                        </div>
                        <div className={styles.costOfProduct}>$145</div>
                      </div>
                    </div>
                    <div className={styles.deleteAndCount}>
                      <div className={styles.delete}>
                        <img src={delet} alt="" />
                      </div>
                      <div className={styles.count}>
                        <div className={styles.minus}>-</div>
                        <div className={styles.countNum}>1</div>
                        <div className={styles.plus}>+</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.product}>
                    <div className={styles.leftInfo}>
                      <img src={tShirt} alt="" />
                      <div className={styles.mainInfoOfProduct}>
                        <div className={styles.nameOfProduct}>
                          Gradient Graphic T-shirt
                        </div>
                        <div className={styles.sizeOfProduct}>Size: Large</div>
                        <div className={styles.colorOfProduct}>
                          Color: White
                        </div>
                        <div className={styles.costOfProduct}>$145</div>
                      </div>
                    </div>
                    <div className={styles.deleteAndCount}>
                      <div className={styles.delete}>
                        <img src={delet} alt="" />
                      </div>
                      <div className={styles.count}>
                        <div className={styles.minus}>-</div>
                        <div className={styles.countNum}>1</div>
                        <div className={styles.plus}>+</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.product}>
                    <div className={styles.leftInfo}>
                      <img src={tShirt} alt="" />
                      <div className={styles.mainInfoOfProduct}>
                        <div className={styles.nameOfProduct}>
                          Gradient Graphic T-shirt
                        </div>
                        <div className={styles.sizeOfProduct}>Size: Large</div>
                        <div className={styles.colorOfProduct}>
                          Color: White
                        </div>
                        <div className={styles.costOfProduct}>$145</div>
                      </div>
                    </div>
                    <div className={styles.deleteAndCount}>
                      <div className={styles.delete}>
                        <img src={delet} alt="" />
                      </div>
                      <div className={styles.count}>
                        <div className={styles.minus}>-</div>
                        <div className={styles.countNum}>1</div>
                        <div className={styles.plus}>+</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Обертка для профиля */}
          <div className={styles.profileWrapper}>
            <img
              src={profile}
              alt="profile"
              className={styles.profile}
              onClick={toggleProfile}
            />

            {/* Выпадающее меню профиля */}
            {isOpenProfile && (
              <div className={styles.profileMenu}>
                <div className={styles.registration} onClick={closeProfile}>
                  Регистрация
                </div>
                <div className={styles.authorisation} onClick={closeProfile}>
                  Авторизация
                </div>
              </div>
            )}
            {/* Выпадающее меню корзины */}
          </div>
        </div>
      </header>

      {/* Оверлей для мобильного меню */}
      {isOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
    </>
  );
};

export default Header;
