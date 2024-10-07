import styled from "styled-components";

export const RatingContainer = styled.div`
  width: 327px;
  padding: 24px 22px 32px 24px;
  border-radius: 15px;
  border: none;
  background-image: radial-gradient(circle at 50% 0, #232a34, #181e27 90%);
  & > img {
    width: 14px;
    height: 13.3px;
    background-color: #262e38;
  }
  .img_div {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background-color: #262e38;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & > h2 {
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    margin-top: 16px;
  }
  & > p {
    color: #969fad;
    font-size: 14px;
    line-height: 1.57;
    margin-top: 10px;
    margin-bottom: 24px;
  }
  .buttons_div {
    display: flex;
    gap: 18px;
  }
  .buttons {
    width: 42px;
    height: 42px;
    text-align: center;
    background-color: #262e38;
    border-radius: 50%;
    border: none;
    color: #7c8798;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.71;
    letter-spacing: 0.18px;
    cursor: pointer;
    @media (min-width: 1440px) {
      &:hover {
        background-color: #7c8798;
        color: #fff;
      }
    }
  }
  .submit_button {
    background-color: #fc7614;
    width: 279px;
    height: 45px;
    padding: 12px 109px 12px 108px;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1.87px;
    border-radius: 22.5px;
    border: none;
    margin-top: 24px;
    cursor: pointer;
  }
`;
export const ResultContainer = styled.div`
  background-image: radial-gradient(circle at 50% 0, #232a34, #181e27 90%);
  width: 327px;
  border-radius: 15px;
  border: none;
  padding: 34px 24px 37px;
  display: flex;
  align-items: center;
  flex-direction: column;
  & > img {
    width: 150px;
    height: 100px;
  }
  .score_container {
    background-color: #262e38;
    width: 168px;
    padding: 5px 12px;
    border-radius: 22.5px;
    border: none;
    color: #fc7614;
    font-size: 14px;
    line-height: 1.57;
    text-align: center;
    margin-top: 29px;
  }
  & > h2 {
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    margin-top: 24px;
  }
  & > p {
    color: #969fad;
    font-size: 14px;
    line-height: 1.57;
    text-align: center;
    margin-top: 10px;
  }
`;
