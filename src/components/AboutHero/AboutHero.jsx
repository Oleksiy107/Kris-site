import React, { useState } from "react";
import Navigate from "./Navigate";
import HeroOne from "../../static/HeroOne.jpeg";
import HeroTwo from "../../static/photoOne.jpeg";
import HeroThreeFirst from "../../static/HeroThreeFirst.jpeg";
import { HashLink } from "react-router-hash-link";

function GalleryPage() {
  return (
    <>
      <Navigate />

      <div className="HeroWrap">
        <section className="HeroWrap__titleWrap">
          <h2 className="HeroWrap__title">Наші герої</h2>
        </section>
        <div className="HeroWrap__wrapHero">
          <section className="HeroWrap__itemSection">
            <img src={HeroOne} alt="HeroImg" className="HeroWrap__img1" />
            <h2 className="HeroWrap__subText">
              Чміль Наталка Олександрівна
              <br />
              Хобі : піші і вело прогулянки на природі, читання історичних книг.
            </h2>
          </section>
          <section className="HeroWrap__itemSection">
            <img src={HeroTwo} alt="HeroImg" className="HeroWrap__img1" />
            <h2 className="HeroWrap__subText">
              Дробна Ірина
              <br /> Хобі: Джаз, відвідини концертів та музеїв, дослідження
              культурної спадщини України
            </h2>
          </section>
          <section className="HeroWrap__itemSection">
            <img
              src={HeroThreeFirst}
              alt="HeroImg"
              className="HeroWrap__img1"
            />
            <h2 className="HeroWrap__subText">
              Ярмоленко Аліна Олександрівна
              <br /> Хобі: займається манікюром, захоплюється гемологією та
              любить психологію
              {/*
    ( має власну колекцію
              мінералів) та          
  */}
            </h2>
          </section>
        </div>
      </div>
    </>
  );
}

export default GalleryPage;
