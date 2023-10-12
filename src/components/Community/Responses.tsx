import { CommunityProps } from "../../interfaces/CommunityInterface";
import { community } from "../../data/sitedata.json";

const Responses: React.FC = (): JSX.Element => {
  return (
    <div className="responses">
      <h3>{community.category}</h3>
      <Response data={community.responses} />
      <div className="view-more">
        <p>View More</p>
      </div>
    </div>
  );
};

const Response: React.FC<CommunityProps> = ({ data }): JSX.Element => {
  return (
    <>
      {data.map((response: string) => {
        return (
          <div key={response} className="response">
            <p>{response}</p>
          </div>
        );
      })}
    </>
  );
};

export default Responses;
