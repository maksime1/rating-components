import { ResultContainer } from "./Styles";
import ThankImg from "./images/illustration-thank-you.svg";
type Props = {
  score: number | null;
};
export default function ({ score }: Props) {
  return (
    <ResultContainer>
      <img src={ThankImg} alt="thank_img" />
      <div className="score_container">You selected {score} out of 5</div>
      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </ResultContainer>
  );
}
