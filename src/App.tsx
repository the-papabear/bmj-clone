import { useState } from "react";
import GlobalStyle from "./styles/globalStyles";
import MainContainer from "./styles/MainContainer";
import AppWrapper from "./styles/AppStyles";
import HeaderContent from "./components/Header/HeaderContent";
import MobileNavbar from "./components/Navbar/MobileNavbar";
import Navbar from "./components/Navbar/Navbar";
import Headlines from "./components/Headline/Headlines";
import LatestArticles from "./components/LatestArticles/LatestArticles";
import Studies from "./components/Studies/Studies";
import CurrentIssue from "./components/CurrentIssue/CurrentIssue";
import MostRead from "./components/MostRead/MostRead";
import Community from "./components/Community/Community";
import Footer from "./components/Footer/Footer";

function App() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <MainContainer clicked={click}>
      <GlobalStyle />
      <HeaderContent closeMobileMenu={closeMobileMenu} />
      <div className="mobile">
        <MobileNavbar clicked={click} />
        <div>
          <Navbar handleClick={handleClick} />
          <AppWrapper onClick={closeMobileMenu}>
            <Headlines />
            <LatestArticles />
            <Studies />
            <CurrentIssue />
            <MostRead />
          </AppWrapper>
          <Community />
          <Footer />
        </div>
      </div>
    </MainContainer>
  );
}

export default App;
