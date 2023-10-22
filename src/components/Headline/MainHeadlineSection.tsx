import React from "react";
import data from "../../data/sitedata.json";
import siteImages from "../../img";
import SecondaryHeadlines from "./SecondaryHeadlines";

const MainHeadlineSection: React.FC = (): JSX.Element => {
  const mainHeadlineData = data.headline.main;

  return (
    <div className="headline-wrapper">
      <div className="main-headline-article">
        <h2>{mainHeadlineData.title}</h2>
        <div className="main-headline">
          <img
            //@ts-ignore
            src={siteImages[mainHeadlineData.img]}
            alt="baby bottle"
            className="headline-image"
          />
          <div className="headline-bio">
            <h2>{mainHeadlineData.title}</h2>
            <p>{mainHeadlineData.bio}</p>
          </div>
        </div>
      </div>
      <SecondaryHeadlines />
    </div>
  );
};

export default MainHeadlineSection;
