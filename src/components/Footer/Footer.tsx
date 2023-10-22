import Socials from "./Socials";
import TermsAndConditions from "./TermsAndConditions";
import FooterNavigation from "./FooterNavigation";
import FooterWrapper from "../../styles/FooterStyles";
import data from "../../data/sitedata.json";

const Footer: React.FC = (): JSX.Element => {
  return (
    <FooterWrapper>
      <div className="wrapper">
        <h4>Follow us on</h4>
        <Socials />
        <FooterNavigation data={data.footer} />
      </div>
      <TermsAndConditions options={data.tnc} />
    </FooterWrapper>
  );
};

export default Footer;
