import CommunityWrapper from "../../styles/CommunityStyles";
import Responses from "./Responses";
import Poll from "./Poll";
import Altmetrics from "./Altmetrics";

const Community: React.FC = (): JSX.Element => {
  return (
    <CommunityWrapper>
      <div className="wrapper">
        <div className="section-title">
          <h2>Community</h2>
        </div>
        <div className="content">
          <div className="responses-and-poll">
            <Responses />
            <Poll />
          </div>
          <Altmetrics />
        </div>
      </div>
    </CommunityWrapper>
  );
};

export default Community;
