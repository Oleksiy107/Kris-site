import React from "react";
import HeroThreeFirst from "../../static/HeroThreeFirst.jpeg";
import volonteerSecond from "../../static/volonteerSecond.jpeg";
import photoOne from "../../static/photoOne.jpeg";
import fourImg from "../../static/interviewFour1-1.jpeg";
import { HashLink } from "react-router-hash-link";
import Header from "../header/HeaderBlack";

export default () => {
  return (
    <>
      <section className="team-section">
        {/* <h2 className="team-section__title">Наші герої</h2> */}
        <div className="team-member">
          <section className="team-member__info">
            <HashLink to={"../interviewFirst/#section1"}>
              <img
                src={photoOne}
                alt="Photo"
                className="team-member__photo team-member__photo--firstImg"
              />
              <p className="team-member__text">
                Дробна Ірина
                <br />
              </p>
            </HashLink>
          </section>
          <section className="team-member__info">
            <HashLink to={"../interviewSecond/#section2"}>
              <img
                src={volonteerSecond}
                alt="Photo"
                className="team-member__photo team-member__photo--imgTwo"
              />
              <p className="team-member__text">
                Наталія Чміль
                <br />
              </p>
            </HashLink>
          </section>

          <section className="team-member__info">
            <HashLink to={"../interviewThree/#section3"}>
              <img
                src={HeroThreeFirst}
                alt="Photo"
                className="team-member__photo team-member__photo--imgTwo"
              />
              <p className="team-member__text">
                Аліна Ярмоленко
                <br />
              </p>
            </HashLink>
          </section>
          <section className="team-member__info">
            <HashLink to={"../interviewFour/#section4"}>
              <img
                src={fourImg}
                alt="Photo"
                className="team-member__photo team-member__photo--imgTwo"
              />
              <p className="team-member__text">
                Аліна Ярмоленко
                <br />
              </p>
            </HashLink>
          </section>

          {/* Add similar structure for other team members */}
        </div>
      </section>
    </>
  );
};
