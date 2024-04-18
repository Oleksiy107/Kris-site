import React, { useState } from "react";
import { InterviewFour } from "../../JSON/InterviewFour";
import Header from "../header/HeaderBlack";
import Burger from "../header/BurgerHeader";
function InterviewFourPage() {
  const [itemData, setItemData] = useState(InterviewFour);
  return (
    <>
      <Header />
      <Burger />
      {itemData.map((item) => (
        <div key={item} className="PeopleViennaBox" id={"/section4"}>
          <h2 className="PeopleViennaBox__text">{item.text1}</h2>
          <h2 className="PeopleViennaBox__text">{item.text2}</h2>
          <h2 className="PeopleViennaBox__text">{item.text3}</h2>
          <h2 className="PeopleViennaBox__text">{item.text4}</h2>
          <h2 className="PeopleViennaBox__text">{item.text5}</h2>
          <h2 className="PeopleViennaBox__text">{item.text6}</h2>
          <h2 className="PeopleViennaBox__text">{item.text7}</h2>
          <h2 className="PeopleViennaBox__text">{item.text8}</h2>
          <h2 className="PeopleViennaBox__text">{item.text9}</h2>
          <h2 className="PeopleViennaBox__text">{item.text10}</h2>
          <h2 className="PeopleViennaBox__text">{item.text11}</h2>
          <h2 className="PeopleViennaBox__text">{item.text12}</h2>
          <h2 className="PeopleViennaBox__text">{item.text13}</h2>
          <h2 className="PeopleViennaBox__text">{item.text14}</h2>
          <h2 className="PeopleViennaBox__text">{item.text15}</h2>
          <h2 className="PeopleViennaBox__text">{item.text16}</h2>
          <h2 className="PeopleViennaBox__text">{item.text17}</h2>
          <h2 className="PeopleViennaBox__text">{item.text18}</h2>
          <h2 className="PeopleViennaBox__text">{item.text19}</h2>
          <h2 className="PeopleViennaBox__text">{item.text20}</h2>
          <h2 className="PeopleViennaBox__text">{item.text21}</h2>
          <h2 className="PeopleViennaBox__text">{item.text22}</h2>
          <h2 className="PeopleViennaBox__text">{item.text23}</h2>
          <h2 className="PeopleViennaBox__text">{item.text24}</h2>
          <h2 className="PeopleViennaBox__text">{item.text25}</h2>
          <h2 className="PeopleViennaBox__text">{item.text26}</h2>
          <h2 className="PeopleViennaBox__text">{item.text27}</h2>
          <h2 className="PeopleViennaBox__text">{item.text28}</h2>
        </div>
      ))}
    </>
  );
}
export default InterviewFourPage;
