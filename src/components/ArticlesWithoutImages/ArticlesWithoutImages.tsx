import ArticleWithoutImages from "../../styles/ArticlesWithoutImagesStyles";
import {
  ArticlesWithoutImagesProps,
  ArticleProps,
} from "../../interfaces/ArticleWithoutImagesInterface";

const ArticlesWithoutImages: React.FC<ArticlesWithoutImagesProps> = ({
  data,
}): JSX.Element => {
  return (
    <ArticleWithoutImages>
      {data.aside.map((article: any) => {
        return (
          <Article
            key={article.title}
            title={article.title}
            category={article.category}
            publishDate={article.publishDate}
          />
        );
      })}
    </ArticleWithoutImages>
  );
};

const Article: React.FC<ArticleProps> = ({
  title,
  category,
  publishDate,
}): JSX.Element => {
  return (
    <div className="article">
      <div className="title">
        <h4>{title}</h4>
      </div>
      <div className="category-and-date">
        <span>
          <span className="category">{category}</span> {publishDate}
        </span>
      </div>
    </div>
  );
};

export default ArticlesWithoutImages;
