import CurrentIssueWrapper from "../../styles/CurrentIssueStyles";
import data from "../../data/sitedata.json";
import siteImages from "../../img";

interface articleProps {
  data: any;
}

const ArticleTitles: React.FC<articleProps> = ({ data }) => {
  return (
    <div className="articles">
      {data.articles.map((article: any) => {
        return (
          <div className="article" key={article.title}>
            <div className="title">
              <h4>{article.title}</h4>
            </div>
            <div className="category-and-date">
              <span>
                <span className="category">{article.category}</span> |{" "}
                {article.publishDate}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const CurrentIssue: React.FC = (): JSX.Element => {
  return (
    <CurrentIssueWrapper>
      <div className="current-issue-content">
        <div className="title">
          <h3>{data.magazine.title}</h3>
        </div>
        <div className="page-and-articles">
          <div className="issue-img-btn">
            <img src={siteImages[data.magazine.img]} alt="lastet issue" />
            <div className="issue-buttons">
              <span>All Issues</span>
              <span>Past Issues</span>
            </div>
          </div>
          <ArticleTitles data={data.magazine} />
        </div>
      </div>
      <div className="advertisment">
        <img src={siteImages["./prefooter-ad.png"]} alt="advertisment" />
      </div>
    </CurrentIssueWrapper>
  );
};

export default CurrentIssue;
