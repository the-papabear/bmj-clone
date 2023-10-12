import { OptionsProps } from "../../interfaces/FooterInterface";

const TermsAndConditions: React.FC<OptionsProps> = ({
  options,
}): JSX.Element => {
  return (
    <div className="terms-and-conditions">
      <div className="tnc-options">
        {options.map((option) => {
          return <p key={option}>{option}</p>;
        })}
      </div>
      <small>
        <span>Copyright © 2021 BMJ Publishing GroupLtd</span>
        <span>京ICP备15042040号-3</span>
      </small>
    </div>
  );
};

export default TermsAndConditions;
