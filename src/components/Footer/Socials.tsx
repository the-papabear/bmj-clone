import {
  Twitter,
  Facebook,
  YouTube,
  Pinterest,
  RssFeed,
} from "@mui/icons-material";

const Socials: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="socials-wrapper">
        <h4>Follow us on</h4>
        <div className="social">
          <Twitter />
          <p> Twitter</p>
        </div>
        <div className="social">
          <Facebook />
          <p>Facebook</p>
        </div>
        <div className="social">
          <YouTube />
          <p>Youtube</p>
        </div>
        <div className="social">
          <Pinterest />
          <p>Pinterest</p>
        </div>
        <div className="social">
          <RssFeed />
          <p>RSS</p>
        </div>
      </div>
    </>
  );
};

export default Socials;
