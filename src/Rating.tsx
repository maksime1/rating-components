import { RatingContainer } from "./Styles";
import StarImg from "./images/icon-star.svg";

type Props = {
  score: number | null;
  setScore: (score: number) => void;
  submit: boolean;
  setSubmit: (submit: boolean) => void;
};

export default function Rating({ score, setScore, setSubmit }: Props) {
  const buttons = [1, 2, 3, 4, 5];
  console.log(score);
  const handleSubmit = () => {
    if (score !== null) {
      setSubmit(true);
    }
  };
  return (
    <div>
      <RatingContainer>
        <div className="img_div">
          <img src={StarImg} alt="star_img" />
        </div>

        <h2>How did we do?</h2>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="buttons_div">
          {buttons.map((button) => {
            return (
              <button
                style={{ backgroundColor: score === button ? "#fc7614" : "" }}
                onClick={() => setScore(button)}
                className="buttons"
                key={button}
              >
                {button}
              </button>
            );
          })}
        </div>
        <button onClick={handleSubmit} className="submit_button">
          SUBMIT
        </button>
      </RatingContainer>
    </div>
  );
}
