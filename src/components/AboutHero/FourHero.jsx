import React, { useState } from "react";
import { InterviewFour } from "../../JSON/InterviewFour";
import Navigate from "./Navigate";
import Header from "../header/HeaderBlack";
import Burger from "../header/BurgerHeader";
import Footer from "../Foother/Foother"; // Corrected "Foother" to "Footer"

export default function FourHero() {
  const [itemData, setItemData] = useState(InterviewFour);
  return (
    <>
      <Header />
      <Burger />
      <Navigate />
      <main>
        {itemData.map((item) => (
          <div key={item} className="wrapAboutHero">
            <figcaption className="wrapAboutHero__sectionImg">
              <img src={item.img1} alt="img" className="wrapAboutHero__img" />
              <p className="wrapAboutHero__subText">Наталія Іванова з дітьми</p>
            </figcaption>

            <figcaption className="wrapAboutHero__sectionImg">
              <img src={item.img2} alt="img" className="wrapAboutHero__img" />
              <p className="wrapAboutHero__subText">{item.imgText2}</p>
            </figcaption>

            <figcaption className="wrapAboutHero__sectionImg">
              <img src={item.img3} alt="img" className="wrapAboutHero__img" />
              <p className="wrapAboutHero__subText">{item.imgText3}</p>
            </figcaption>
            <figcaption className="wrapAboutHero__sectionImg">
              <img src={item.img4} alt="img" className="wrapAboutHero__img" />
              <p className="wrapAboutHero__subText">{item.imgText4}</p>
            </figcaption>
            <figcaption className="wrapAboutHero__sectionImg">
              <img src={item.img5} alt="img" className="wrapAboutHero__img" />
              <p className="wrapAboutHero__subText">{item.ImgText5}</p>
            </figcaption>
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
}
