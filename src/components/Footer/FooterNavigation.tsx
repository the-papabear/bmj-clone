import {
  FooterNavigationProps,
  OptionsProps,
} from "../../interfaces/FooterInterface";

const FooterNavigation: React.FC<FooterNavigationProps> = ({
  data,
}): JSX.Element => {
  return (
    <div className="footer-navigation">
      {data.map((category) => {
        return (
          <div key={category.category}>
            <div className="category-title">
              <h3>{category.category}</h3>
              <CategoryOptions options={category.options} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const CategoryOptions: React.FC<OptionsProps> = ({ options }): JSX.Element => {
  return (
    <div className="category-options">
      {options.map((option) => {
        return <p key={option}> {option}</p>;
      })}
    </div>
  );
};

export default FooterNavigation;
