import { useState } from "react";
import styled, { keyframes } from "styled-components";
import "./botin.css";

export const Botin = ({
  size = "medium",
  text = "Botin",
  color = "whitesmoke",
  background = "#030407",
}) => {
  const [loading, setloading] = useState(false);
  var fontSize;

  size === "small"
    ? (fontSize = "0.7rem")
    : size === "medium"
    ? (fontSize = "0.9rem")
    : size === "large"
    ? (fontSize = "1.2rem")
    : (fontSize = "1rem");

  const BotinContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: 3rem;
    width: 15rem;
  `;

  const loadProgress = keyframes`
  0% {
    height: 0;
    width: 0;
  }
  15% {
        height: calc(2.5 * ${fontSize} - 6px);
    width: calc(2.5 * ${fontSize} - 6px);
  }
  30% {
    width: calc(4.5 * ${fontSize});
  }
  60% {
    width: calc(10 * ${fontSize});
  }
  90% {
    width: calc(16 * ${fontSize});
  }
  100% {
        width: calc(20 * ${fontSize} - 6px);
;
  }
`;

  const StyledBotin = styled.button`
    position: absolute;
    left: 50%;
    top: 50%;
    width: calc(12 * ${fontSize});
    height: calc(3.5 * ${fontSize});
    font-size: ${fontSize};

    cursor: pointer;
    transform: translate(-50%, -50%);
    border-radius: 10rem;
    border: none;

    p {
      position: absolute;
      left: 50%;
      width: max-content;
      top: 50%;

      transform: translate(-50%, -50%);
    }
  `;

  const Loader = styled.div`
    position: absolute;
    left: 3px;
    top: 3px;
    height: calc(2.5 * ${fontSize} - 6px);
    width: calc(20 * ${fontSize} - 6px);
    border-radius: 2rem;
    background-color: ${color};
    animation: ${loadProgress} 7s both;
    color: ${background};
    overflow: hidden;
    z-index: 100;

    p {
      position: absolute;
      font-size: calc(0.9 * ${fontSize});
      left: calc(6.5 * ${fontSize});
      width: max-content;
      top: 50%;
      transform: translateY(-50%);
    }
  `;

  return (
    <BotinContainer>
      <StyledBotin
        onClick={() => setloading(true)}
        style={{ color: color, background: background }}
        className={`${
          loading
            ? size === "small"
              ? "loading_sm"
              : size === "medium"
              ? "loading_md"
              : size === "large"
              ? "loading_lg"
              : "loading_md"
            : ""
        }`}
      >
        {loading ? (
          <Loader>
            <p>{text}</p>
          </Loader>
        ) : (
          <></>
        )}

        <p>{text}</p>
      </StyledBotin>
    </BotinContainer>
  );
};
