import { useState } from "react";
import HeaderComponent from "./Header/Header.component";
import SecondSectionComponent from "./SecondSection/SecondSection.component";
import AboutUSSectionComponent from "./AboutUs/AboutUs.component";
import CategoriesSectionComponent from "./Categories/Categories.component";
import ShouldKnowSectionComponent from "./ShouldKnow/ShouldKnow.component";
import ContactComponent from "./Contact/Contact.component";
import FooterComponent from "./Footer/Footer.component";

function MainPageComponent() {
  return (
    <div>
      <HeaderComponent />
      <SecondSectionComponent />
      <AboutUSSectionComponent />
      <CategoriesSectionComponent />
      <ShouldKnowSectionComponent />
      <ContactComponent />
      <FooterComponent />
    </div>
  );
}

export default MainPageComponent;
