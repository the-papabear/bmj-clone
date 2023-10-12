import Menu from "@mui/icons-material/MenuOutlined";
import NavbarWrapper from "../../styles/NavbarStyles";
import SearchIcon from "@mui/icons-material/Search";
import thebmjlogo from "../../img/thebmjlogo.png";
import Navigation from "./Navigation";
import { NavigationWrapper } from "../../styles/NavigationStyles";
import { navbarprops } from "../../interfaces/NavbarInterface";

const Navbar: React.FC<navbarprops> = ({ handleClick }): JSX.Element => {
  return (
    <NavbarWrapper>
      <div className="wrapper">
        <button onClick={handleClick}>
          <Menu className="menu" />
        </button>
        <img alt="the BMJ logo" src={thebmjlogo} className="logo" />
        <NavigationWrapper>
          <Navigation />
        </NavigationWrapper>
        <Search />
      </div>
    </NavbarWrapper>
  );
};

function Search() {
  return (
    <div className="search">
      <SearchIcon />
      <span>Search</span>
    </div>
  );
}

export default Navbar;
