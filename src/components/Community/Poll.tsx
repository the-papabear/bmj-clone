import { useState } from "react";
import { Twitter } from "@mui/icons-material";
import { PollProps } from "../../interfaces/CommunityInterface";

const Poll: React.FC = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const openResults = () => setOpen(!open);

  return (
    <div className="poll">
      <div>
        <h3 className="poll-title">What are your thoughts?</h3>
        <p className="poll-question">
          Is it my moral duty to cover shifts in the absence of staff?
        </p>
        <div className="answer-options">
          {open ? (
            <PollAnswerStatistics click={openResults} />
          ) : (
            <AnswerOptions click={openResults} />
          )}
        </div>
      </div>
      <div className="related-content">
        <p className="related-article">Read Related Article</p>
        <p className="past-polls">See all polls</p>
      </div>
    </div>
  );
};

const AnswerOptions: React.FC<PollProps> = ({ click }): JSX.Element => {
  return (
    <>
      <div className="poll-options">
        <div className="poll-option">
          <input type="radio" id="answer1" name="poll-option" value="Yes" />
          <label htmlFor="answer1">Yes</label>
        </div>
        <div className="poll-option">
          <input type="radio" id="answer2" name="poll-option" value="No" />
          <label htmlFor="answer2">No</label>
        </div>
      </div>
      <div className="vote-buttons">
        <button onClick={click}>Vote</button>
        <p onClick={click}>View Results</p>
      </div>
    </>
  );
};

const PollAnswerStatistics: React.FC<PollProps> = ({ click }): JSX.Element => {
  return (
    <div className="results">
      <p>
        No <i>71.89% (3,739 votes)</i>
      </p>
      <progress value="72" max="100"></progress>
      <p>
        Yes <i>28.11% (1,462 votes)</i>
      </p>
      <progress value="28" max="100"></progress>
      <p>Total Votes: 5.201</p>
      <div className="tweet-button">
        <Twitter className="twitter-icon" />
        <span className="tweet">Tweet</span>
      </div>
      <p className="return" onClick={click}>
        Return to Poll
      </p>
    </div>
  );
};

export default Poll;
