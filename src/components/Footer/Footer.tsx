import Socials from "./Socials";
import TermsAndConditions from "./TermsAndConditions";
import FooterNavigation from "./FooterNavigation";
import FooterWrapper from "../../styles/FooterStyles";
import { footer, tnc } from "../../data/sitedata.json";

const Footer: React.FC = (): JSX.Element => {
  return (
    <FooterWrapper>
      <div className="wrapper">
        <h4>Follow us on</h4>
        <Socials />
        <FooterNavigation data={footer} />
      </div>
      <TermsAndConditions options={tnc} />
    </FooterWrapper>
  );
};

export default Footer;
