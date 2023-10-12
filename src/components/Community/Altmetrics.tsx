import siteImages from "../../img";
import { altmetrics } from "../../data/sitedata.json";
import { AltmetricsProps } from "../../interfaces/CommunityInterface";

const Altmetrics: React.FC = (): JSX.Element => {
  return (
    <div className="altmetrics">
      <div className="category-title">
        <h3>{altmetrics.category}</h3>
      </div>
      <Altmetric altdata={altmetrics.titles} />
    </div>
  );
};

const Altmetric: React.FC<AltmetricsProps> = ({ altdata }): JSX.Element => {
  return (
    <>
      {altdata.map((title) => {
        return (
          <div key={title.title} className="altmetric">
            <div className="alt-data-img">
              <img src={siteImages[title.img]} alt="metric" />
            </div>
            <div className="title-and-date">
              <p>{title.title}</p>
              <span>{title.date}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Altmetrics;
