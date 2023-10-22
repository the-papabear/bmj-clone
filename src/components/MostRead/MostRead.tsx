import MostReadWrapper from "../../styles/MostReadStyles";
import data from "../../data/sitedata.json";

const MostRead: React.FC = (): JSX.Element => {
  return (
    <MostReadWrapper>
      <div className="section-title">
        <h2>{data.mostRead.category}</h2>
      </div>
      <div className="most-read-list">
        {data.mostRead.titles.map((title) => {
          return (
            <div key={title.id} className="list-item">
              <span>{title.id}.</span>
              <p>{title.title}</p>
            </div>
          );
        })}
      </div>
    </MostReadWrapper>
  );
};

export default MostRead;
