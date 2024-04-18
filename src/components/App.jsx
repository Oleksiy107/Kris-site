import React from "react";
import MainPage from "./pages/MainPage.jsx";
import PeopleVienna from "./pages/PeopleVienna";
import Three from "./pages/AboutUs";
import AboutHero from "./pages/AboutHero";
import BasketPage from "./pages/Two";
import InterviewFirst from "./PeopleVienna/InterviewFirst";
import InterviewSecond from "./PeopleVienna/InterviewSecond";
import InterviewThree from "./PeopleVienna/InterviewTh";
import OtherPage from "./pages/Other.jsx";
// import НашіГерої1 from "./AboutHero/InterviewTh";
// import НашіГерої2 from "./AboutHero/InterviewTh";
// import НашіГерої3 from "./AboutHero/InterviewTh";

// import SmoothieCreate from "./Smothie/SmoothieCreate.jsx";
import { Route, Routes } from "react-router-dom";
import FirstHero from "./AboutHero/FirstHero.jsx";
import SecondHero from "./AboutHero/SecondHero.jsx";
import ThreeHero from "./AboutHero/ThreeHero.jsx";
import ItemPage from "./pages/Other";
import FourHero from "./AboutHero/FourHero.jsx";
import InterviewFour from "./PeopleVienna/InterviewFour.jsx";

export default () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/УкраїнціУВідні" element={<PeopleVienna />} />
      <Route path="/УкраїнськаМалеча" element={<BasketPage />} />
      <Route path="/НашіГерої" element={<AboutHero />} />
      <Route path="/ПроНас" element={<Three />} />
      <Route path="/interviewFirst" element={<InterviewFirst />} />
      <Route path="/interviewSecond" element={<InterviewSecond />} />
      <Route path="/interviewThree" element={<InterviewThree />} />
      <Route path="/interviewFour" element={<InterviewFour />} />
      
       <Route path="/геройПерший" element={<FirstHero />} />
      <Route path="/геройДругий" element={<SecondHero />} />
      <Route path="/геройТретій" element={<ThreeHero />} />
      <Route path="/геройЧетвертий" element={<FourHero />} />
      <Route path="/інше" element={<ItemPage />} />
    </Routes>
  );
};
