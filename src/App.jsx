import { useState } from "react";
import Nav from "./Nav/Nav";
import SubMenu from "./SubMenu/SubMenu";
import Hgroup from "./Hgroup/Hgroup";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import LANDING_PAGE_DATA from "../landing_data.json";
import "./App.css";

function App() {
  return (
    <>
      <Header>
        <Hgroup series={LANDING_PAGE_DATA.series} title={LANDING_PAGE_DATA.title} />
        <nav>
          <Nav items={LANDING_PAGE_DATA.navMain} />
        </nav>
        <SubMenu items={LANDING_PAGE_DATA.navSecondary} />
      </Header>
      <Main>
        <img src={LANDING_PAGE_DATA.image} alt={LANDING_PAGE_DATA.title} />
      </Main>
      <Footer>
        <blockquote>{LANDING_PAGE_DATA.footer}</blockquote>
      </Footer>
    </>
  );
}

export default App;
