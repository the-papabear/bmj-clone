import React from "react";
import siteImages from "../../img";

interface StudyProps {
  data: any;
}

const Article: React.FC<StudyProps> = ({ data }) => {
  return (
    <>
      {data.headlines.map((headline: any) => {
        return (
          <div className="study-article" key={headline.title}>
            <h3>{headline.title}</h3>
            <div className="article-details">
              <div className="article-img">
                <img src={siteImages[headline.img]} alt="img" />
              </div>
              <div className="article-description">
                <p>{headline.description}</p>
              </div>
            </div>
            <div className="category-and-date">
              <span>
                <span className="category">{headline.category}</span> |{" "}
                {headline.publishDate}
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};

const ArticleWithNoImage: React.FC<StudyProps> = ({ data }) => {
  return (
    <>
      {data.aside.map((title: any) => {
        return (
          <div className="article" key={title.title}>
            <div className="title">
              <h4>{title.title}</h4>
            </div>
            <div className="category-and-date">
              <span>
                <span className="category">{title.category}</span>{" "}
                {title.publishDate}
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};

const Study: React.FC<StudyProps> = ({ data }): JSX.Element => {
  return (
    <div className="studies">
      <h2>{data.category}</h2>
      <div className="study">
        <div className="article-with-image">
          <Article key={data.title} data={data} />
        </div>
        <div className="aside-articles">
          <ArticleWithNoImage data={data} />
        </div>
      </div>
    </div>
  );
};

export default Study;
