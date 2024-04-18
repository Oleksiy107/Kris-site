import React from "react";
import HeroThreeFirst from "../../static/HeroThreeFirst.jpeg";
import HeroThreeTwo from "../../static/HeroThreeSecond.jpeg";
import HeroThreeTh from "../../static/HeroThreeTh.jpeg";
import HeroThreeFour from "../../static/HeroThreeFour.jpeg";
import HeroThreeNoteOne from "../../static/HeroThreeNoteOne.jpeg";
import HeroThreeNoteTwo from "../../static/HeroThreeNoteTwo.jpeg";
import Header from "../header/HeaderBlack";
import Burger from "../header/BurgerHeader";
import Navigate from "./Navigate";
import Footer from "../Foother/Foother";
export default function ThreeHero() {
  return (
    <>
      <Burger />
      <Header />
      <Navigate />
      <div className="wrapAboutHero">
        <section className="wrapAboutHero__sectionImg">
          <img
            src={HeroThreeFirst}
            alt="HeroImg"
            className="wrapAboutHero__img"
          />
          <p className="wrapAboutHero__subText">
            Ярмоленко Аліна Олександрівна, 19 років. Хобі: займається манікюром,
            захоплюється гемологією ( має власну колекцію мінералів) та любить
            психологію
          </p>
        </section>

        <section className="wrapAboutHero__sectionImg">
          <img src={HeroThreeTh} alt="HeroImg" className="wrapAboutHero__img" />
          <p className="wrapAboutHero__subText">Бомбосховище в Києві</p>
        </section>
        <section className="wrapAboutHero__sectionImg">
          <img
            src={HeroThreeFour}
            alt="HeroImg"
            className="wrapAboutHero__img"
          />
          <p className="wrapAboutHero__subText">Бомбосховище в Києві</p>
        </section>
        <section className="wrapAboutHero__sectionImg">
          <img
            src={HeroThreeTwo}
            alt="HeroImg"
            className="wrapAboutHero__img"
          />
          <p className="wrapAboutHero__subText">Вибухи м. Київ</p>
        </section>
        <section className="wrapAboutHero__sectionImg">
          <img
            src={HeroThreeNoteOne}
            alt="HeroImg"
            className="wrapAboutHero__img"
          />
          <p className="wrapAboutHero__subText">
            Особистий щоденник Аліни, написаний у бомбосховищі, 2022
            рік.(частина 1)
          </p>
        </section>
        <section className="wrapAboutHero__sectionImg">
          <img
            src={HeroThreeNoteTwo}
            alt="HeroImg"
            className="wrapAboutHero__img"
          />
          <p className="wrapAboutHero__subText">
            Особистий щоденник Аліни, написаний у бомбосховищі, 2022 рік.
            (Частина 2)
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}
