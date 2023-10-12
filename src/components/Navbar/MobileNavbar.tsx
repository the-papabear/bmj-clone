import Navigation from "./Navigation";
import Header from "../Header/Header";
import MobileNavbarWrapper from "../../styles/MobileNavbarStyles";
import { MobileNavigation } from "../../styles/NavigationStyles";
import { MobileHeaderWrapper } from "../../styles/HeaderStyles";

interface mobilenavbarprops {
  clicked: boolean;
}

const MobileNavbar: React.FC<mobilenavbarprops> = ({
  clicked,
}): JSX.Element => {
  return (
    <MobileNavbarWrapper clicked={clicked}>
      <MobileNavigation>
        <Navigation />
      </MobileNavigation>
      <MobileHeaderWrapper>
        <Header />
      </MobileHeaderWrapper>
    </MobileNavbarWrapper>
  );
};

export default MobileNavbar;
