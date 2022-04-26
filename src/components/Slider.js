import React, { useRef, useState } from "react";
import styled from "styled-components";

const Slider = () => {
  const input = useRef();
  const label = useRef();
  const progressBar = useRef();

  const [percentageValue, setPercentageValue] = useState(0);

  const onInputHandler = (e) => {
    const value = e.target.value;
    setPercentageValue(value);

    const index = parseInt(+value / 25);
    Array.from(label.current.children).forEach((child, i) => {
      child.classList.remove("target");
      if (i <= index) {
        child.classList.add("target");
      }
    });

    progressBar.current.style.width = `${(320 * value) / 100}px`;
  };

  const onClickHandler = (e) => {
    const value = e.target.innerHTML;

    input.current.value = value;
    setPercentageValue(value);

    const index = parseInt(+value / 25);

    Array.from(label.current.children).forEach((child, i) => {
      child.classList.remove("target");
      if (i <= index) {
        child.classList.add("target");
      }
    });
    progressBar.current.style.width = `${(320 * value) / 100}px`;
  };

  return (
    <Container>
      <PercentageWrapper>
        <span id="percentage">{percentageValue}</span>
      </PercentageWrapper>
      <RangeWrapper>
        <RangeInput
          type="range"
          min="0"
          max="100"
          defaultValue={percentageValue}
          onInput={onInputHandler}
          ref={input}
        />
        <ProgressBar ref={progressBar} />
      </RangeWrapper>

      <RangeLables ref={label}>
        <li className="target" onClick={onClickHandler}>
          0
        </li>
        <li onClick={onClickHandler}>25</li>
        <li onClick={onClickHandler}>50</li>
        <li onClick={onClickHandler}>75</li>
        <li onClick={onClickHandler}>100</li>
      </RangeLables>
    </Container>
  );
};

const Container = styled.div`
  margin: 40px 0;
  position: relative;
`;

const PercentageWrapper = styled.div`
  position: relative;
  width: 320px;
  height: 50px;
  background-color: #f5f5f5;
  border: 2px solid #b5b5b5;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-bottom: 10px;

  #percentage {
    position: relative;
    right: 50px;

    &::after {
      position: relative;
      content: "%";
      color: #b5b5b5;
      font-size: 16px;
      left: 25px;
    }
  }
`;

const RangeWrapper = styled.div`
  position: relative;
  width: 565px;
  height: 5px;
`;

const RangeInput = styled.input`
  appearance: none;
  width: 320px;
  position: absolute;
  top: 2px;

  &::-webkit-slider-runnable-track {
    position: absolute;
    width: 100%;
    height: 7px;
    top: 4px;
    background-color: #e6e6e6;
    cursor: pointer;
    border-radius: 3px;
  }

  &::-webkit-slider-thumb {
    appearance: none;
    position: relative;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    border: 5px solid white;
    box-shadow: 0px 0px 1px 1px #c9c9c9;
    background-color: #0073ff;
    cursor: pointer;
    z-index: 1;
    top: -9px;
  }
`;

const ProgressBar = styled.div`
  position: absolute;
  width: 0px;
  height: 7px;
  background-color: #0073ff;
  top: 8px;
  left: 2px;
  pointer-events: none;
`;

const RangeLables = styled.ul`
  margin: 24px 0px 0;
  width: 323px;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;

  li {
    width: 45px;
    margin: 0px -13px 0;
    padding: 3px 0;
    position: relative;
    background-color: #e6e6e6;
    border-radius: 8px;
    text-align: center;
    color: #666666;
    font-size: 11px;
    cursor: pointer;

    &:hover {
      background-color: #0073ff;
      color: #fff;
    }

    &::before {
      position: absolute;
      top: -25px;
      right: 0;
      left: 0;
      content: "";
      margin: 0 auto;
      width: 15px;
      height: 15px;
      background: #e6e6e6;
      border-radius: 50%;
      z-index: 0;
    }
    &.target::before {
      background-color: #0073ff;
    }
    &::after {
      content: "%";
    }
  }
`;

export default Slider;
