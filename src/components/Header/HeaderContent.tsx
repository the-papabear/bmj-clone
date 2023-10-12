import { HeaderWrapper } from "../../styles/HeaderStyles";
import { HeaderProps } from "../../interfaces/HeaderInterface";
import Header from "./Header";
import siteImages from "../../img";

const HeaderContent: React.FC<HeaderProps> = ({
  closeMobileMenu,
}): JSX.Element => {
  return (
    <>
      <img
        src={siteImages["./header-ad.png"]}
        alt="mock header ad"
        className="advertisment"
        onClick={closeMobileMenu}
      />
      <p>Intended for healthcare professionals</p>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
    </>
  );
};

export default HeaderContent;
