import React from "react";
import HeadlinesWrapper from "../../styles/HeadlinesStyles";
import MainHeadlineSection from "./MainHeadlineSection";
import ArticlesWithoutImages from "../ArticlesWithoutImages/ArticlesWithoutImages";
import { headline } from "../../data/sitedata.json";

const Headlines: React.FC = (): JSX.Element => {
  return (
    <HeadlinesWrapper>
      <MainHeadlineSection />
      <ArticlesWithoutImages data={headline} />
    </HeadlinesWrapper>
  );
};

export default Headlines;
