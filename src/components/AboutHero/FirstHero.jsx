import React from "react";

import HeroOne_one from "../../static/HeroOne_one.jpeg";
import HeroOne_two from "../../static/HeroOne_two.jpeg";
import HeroOne_three from "../../static/HeroOne_three.jpeg";
import HeroOne_four from "../../static/HeroOne_four.jpeg";
import HeroOne_five from "../../static/HeroOne_five.jpeg";
import Header from "../header/HeaderBlack";
import Burger from "../header/BurgerHeader";
import Footer from "../Foother/Foother";
import Navigate from "./Navigate";
export default function FirstHero() {
  return (
    <>
      <Burger />
      <Header />
      <Navigate />
      <div className="wrapAboutHero" id={"/геройПерший"}>
        <section className="wrapAboutHero__sectionImg">
          <img src={HeroOne_one} alt="HeroImg" className="wrapAboutHero__img" />
          <p className="wrapAboutHero__subText">
            Чміль Наталка Олександрівна, 44 роки. Хобі : піші і вело прогулянки
            на природі , читання історичних книг.
          </p>
        </section>
        <section className="wrapAboutHero__sectionImg">
          <img src={HeroOne_two} alt="HeroImg" className="wrapAboutHero__img" />
          <p className="wrapAboutHero__subText">
            Сімейна пара волонтерів, які співпрацюють з Карітас. Дружина Наталя
            з України і Норберт.
          </p>
        </section>
        <section className="wrapAboutHero__sectionImg">
          <img
            src={HeroOne_three}
            alt="HeroImg"
            className="wrapAboutHero__img"
          />
          <p className="wrapAboutHero__subText">
            Сімʼя дітей з Маріуполя. Діти носили на шиях свистки, щоб їх можна
            було знайти під завалами сховища. З окупованої території вони
            вибиралась більше 14 днів пішки. І таким сімʼям приходилось надавати
            психологічну допомогу
          </p>
        </section>
        <section className="wrapAboutHero__sectionImg">
          <img
            src={HeroOne_four}
            alt="HeroImg"
            className="wrapAboutHero__img"
          />
          <p className="wrapAboutHero__subText">
            Гуманітарна допомога (м. Львів )
          </p>
        </section>
        <section className="wrapAboutHero__sectionImg">
          <img
            src={HeroOne_five}
            alt="HeroImg"
            className="wrapAboutHero__img"
          />
          <p className="wrapAboutHero__subText">
            Віденьська клініка, де працює колега Наталії з клініки. Саме там
            Наталія зрозуміла, що хоче продовжити працювати в медицині в Австрії
            З того моменту Наталія почала процес інтеграції і визнання диплому
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}
