import React from "react";
import Navigate from "./Navigate";
import HeroTwo from "../../static/photoOne.jpeg"; //photoOne
import HeroTwo_first from "../../static/InterViewFirstImg.jpeg02.jpeg";
import HeroTwo_second from "../../static/InterViewFirstImg.jpeg";
import Header from "../header/HeaderBlack";
import Burger from "../header/BurgerHeader";
import Footer from "../Foother/Foother"; // Corrected "Foother" to "Footer"

export default function SecondHero() {
  return (
    <>
      <Header />
      <Burger />
      <Navigate />
      <div className="SecondWrap">
        <div className="SecondWrap__WrapToImg">
          <section className="SecondWrap__sectionImg">
            <img src={HeroTwo} alt="HeroImg" className="SecondWrap__img" />{" "}
            {/* Removed extra space */}
            <p className="SecondWrap__subText">
              Дробна Ірина, 23 роки Хобі: Джаз, відвідини концертів та музеїв,
              дослідження культурної спадщини України
            </p>
          </section>
          <section className="SecondWrap__sectionImg">
            <img
              src={HeroTwo_first}
              alt="HeroImg"
              className="SecondWrap__img"
            />{" "}
            {/* Removed extra space */}
            <p className="SecondWrap__subText">
              Фото з Мовного кафе (SprachenCaPHé), який проводився в нашому
              педагогічному коледжі (Pädagogische Hochschule Wien) і на якому ми
              презентували українську мову
            </p>
          </section>
        </div>

        <section className="SecondWrap__sectionImg">
          <img
            src={HeroTwo_second}
            alt="HeroImg"
            className="SecondWrap__imgs"
          />{" "}
          {/* Removed extra space */}
          <p className="SecondWrap__subText">
            Літня школа від Лернополіса у Байройті
          </p>
        </section>
      </div>
      <Footer /> {/* Corrected typo in import */}
    </>
  );
}
