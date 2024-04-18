import React from "react";
import { useState } from "react";
import { OtherData } from "../../JSON/OtherData"; // Assuming OtherData.js is located in the same directory
import { Link } from "react-router-dom";

const Other = () => {
  const [itemData, setItem] = useState(OtherData);
  return (
    <div className="otherPage">
      {itemData.map((item) => (
        <section className="otherPage__textBlock">
          <h2 className="otherPage__title">{item.name}</h2>
          <p className="otherPage__section">
            {" "}
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; {item.section1}
          </p>
          <p className="otherPage__section">
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 21 {item.section2}
            <a
              className="otherPage__link"
              href="https://www.facebook.com/cerkvaVarvary"
              target="_black"
            >
              Як повідомляє офіційна сторінка у Facebook
            </a>
            {item.section3}{" "}
            <a
              className="otherPage__link"
              href="https://www.instagram.com/zoryanakushpler?igsh=MWs1bHJvamFrazdvcg==            "
              target="_black"
            >
              Зоряна Кушплер
            </a>
            та диригентка{" "}
            <a
              className="otherPage__link"
              href="https://www.instagram.com/olenanechay?igsh=Z3JzZDZpdTJsZ21k"
              target="_black"
            >
              Олена Нечай-Носаль
            </a>
            {item.section4}{" "}
            <a
              className="otherPage__link"
              href="https://www.instagram.com/barbareum_chor?igsh=MmV4a2hqZHJuYjIy
"
              target="_black"
            >
              "Барбареум" з трьома композиціями.
            </a>{" "}
            {item.section5}{" "}
            <a
              className="otherPage__link"
              href="https://austria.mfa.gov.ua            "
              target="_black"
            >
              України в республіці Австрія Василь Химинець.
            </a>
            <br />
            <br />
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; {item.section6}{" "}
            <a
              className="otherPage__link"
              href="https://st-barbara-austria.org/ua/pozhertvy"
              target="_black"
            >
              «Допомога Україні», де кожен не байдужий може задонатити.
            </a>
          </p>

          <figure className="otherPage__boxImg">
            <section>
              <img src={item.img1} alt="Image 1" className="otherPage__img" />
              <figcaption className="otherPage__subText">
                {item.imgSubText}
              </figcaption>
            </section>
            <section>
              <img src={item.img2} alt="Image 2" className="otherPage__img" />
              <figcaption className="otherPage__subText">
                {item.imgSubText}
              </figcaption>
            </section>
            <section>
              <img src={item.img3} alt="Image 3" className="otherPage__img" />
              <figcaption className="otherPage__subText">
                {item.imgSubText}
              </figcaption>
            </section>
          </figure>
          <section className="otherPage__textBlock">
            <h2 className="otherPage__section">{item.title1}</h2>
            <p className="otherPage__section">{item.text1}</p>
            <p className="otherPage__section">{item.text2}</p>
            <p className="otherPage__section">{item.text3}</p>
            <p className="otherPage__section">{item.text4}</p>
            <p className="otherPage__section">{item.text5}</p>
            <p className="otherPage__section">{item.text6}</p>
            <p className="otherPage__section">{item.text7}</p>
            <p className="otherPage__section">{item.text8}</p>
            <p className="otherPage__section">{item.text9}</p>
            <p className="otherPage__section">{item.text10}</p>
            <p className="otherPage__section">{item.text11}</p>
            <p className="otherPage__section">{item.text12}</p>
            <p>
              P.S.1 А для вас читачі є також невеличкий тест. Оберіть, що є
              брехнею.
              <nav>
                <li className="otherPage__section">
                  1. Петро Франко, той що син Івана Франка був одним із
                  засновників організації.
                </li>
                <li className="otherPage__section">
                  {" "}
                  2. Степан Бандера був пластуном.
                </li>
                <li className="otherPage__section">
                  {" "}
                  3. Андрій Шептицький неабияку роль відіграв у історії розвитку
                  організації.
                </li>
              </nav>
              <br />
              <p className="otherPage__section">
                P.S.2 Усі варіанти є правильними.
              </p>
            </p>
          </section>
          <figure className="otherPage__boxImg">
            <section>
              <img
                src={item.other1Img}
                alt="Image 1"
                className="otherPage__img"
              />
              <figcaption className="otherPage__subText">
                {item.otherSubText}
              </figcaption>
            </section>
            <section>
              <img
                src={item.other2Img}
                alt="Image 2"
                className="otherPage__img"
              />
              <figcaption className="otherPage__subText">
                {item.otherSubText}
              </figcaption>
            </section>
            <section>
              <img
                src={item.other3Img}
                alt="Image 2"
                className="otherPage__img"
              />
              <figcaption className="otherPage__subText">
                {item.otherSubText}
              </figcaption>
            </section>
            <section>
              <img
                src={item.other4Img}
                alt="Image 3"
                className="otherPage__img"
              />
              <figcaption className="otherPage__subText">
                {item.otherSubText}
              </figcaption>
            </section>
          </figure>
        </section>
      ))}
    </div>
  );
};

export default Other;
