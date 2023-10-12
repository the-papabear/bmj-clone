import LatestArticlesWrapper from "../../styles/LatestArticlesStyles";
import { latest } from "../../data/sitedata.json";
import siteImages from "../../img";
import React from "react";

interface SectionProps {
  category: string;
  img: string;
  divClass: any;
  titles: string[];
}

const LatestArticles: React.FC = (): JSX.Element => {
  const sections = latest.titles;
  return (
    <>
      <h2>{latest.category}</h2>
      <LatestArticlesWrapper>
        {sections.map((section) => {
          return (
            <Section
              key={section.category}
              divClass={section.class}
              category={section.category}
              img={siteImages[section.img]}
              titles={section.titles}
            />
          );
        })}
      </LatestArticlesWrapper>
    </>
  );
};

const Section: React.FC<SectionProps> = ({
  category,
  img,
  titles,
  divClass,
}): JSX.Element => {
  return (
    <div className={`${divClass} latest-articles-category`}>
      <h3>{category}</h3>
      <img src={img} alt="mock" />
      {titles.map((title) => {
        return (
          <div key={title} className="title">
            <p>{title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default LatestArticles;
