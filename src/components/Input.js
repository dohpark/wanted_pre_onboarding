import { useRef, useState } from "react";
import styled from "styled-components";
import { ReactComponent as CheckMark } from "../images/checkMark.svg";
import { ReactComponent as EyeClosed } from "../images/eyeClosed.svg";
import { ReactComponent as EyeOpen } from "../images/eyeOpen.svg";

const Input = () => {
  const [emailValid, setEmailValid] = useState(false);
  const [passwordType, setPasswordType] = useState(false);

  const inValid = useRef();
  const checkMark = useRef();

  const onKeyUpEmailHandler = (e) => {
    const email = e.target.value;
    const emailCheckRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (!email) {
      inValid.current.style.display = "none";
    } else if (emailCheckRegex.test(email)) {
      setEmailValid(true);
      inValid.current.style.display = "none";
      checkMark.current.style.fill = "#00b846";
    } else {
      setEmailValid(false);
      checkMark.current.style.fill = "#c9c9c9";
    }
  };

  const onBlurHandler = (e) => {
    const email = e.target.value;

    if (!email || emailValid) {
      inValid.current.style.display = "none";
    } else {
      inValid.current.style.display = "block";
    }
  };

  const onClickHandler = (e) => {
    setPasswordType(!passwordType);
  };

  return (
    <Container>
      <InputWrapper>
        <InputType>E-mail</InputType>
        <InputBlock>
          <input
            type="text"
            onKeyUp={onKeyUpEmailHandler}
            onBlur={onBlurHandler}
            placeholder="이메일을 입력해주세요"
          />
          <CheckMark className="checkMark" ref={checkMark} />
        </InputBlock>
        <EmailInvalid ref={inValid}>Invalid e-mail address</EmailInvalid>
      </InputWrapper>
      <InputWrapper>
        <InputType>Password</InputType>
        <InputBlock>
          <input
            placeholder="비밀번호를 입력해주세요"
            type={passwordType ? "text" : "password"}
          />
          {passwordType ? (
            <EyeOpen className="eyeMark" onClick={onClickHandler} />
          ) : (
            <EyeClosed className="eyeMark" onClick={onClickHandler} />
          )}
        </InputBlock>
      </InputWrapper>
    </Container>
  );
};

const Container = styled.div`
  margin: 20px 0;
`;

const InputWrapper = styled.div`
  margin-bottom: 15px;
`;

const InputType = styled.div`
  margin-bottom: 5px;
  font-size: 15px;
`;

const EmailInvalid = styled.div`
  display: none;
  color: red;
  margin-bottom: 10px;
  font-size: 13px;
`;

const InputBlock = styled.div`
  position: relative;

  input {
    width: 300px;
    padding: 10px 15px;
    border: 2px solid gray;
    border-radius: 5px;
    background-color: #f5f5f5;
    font-size: 15px;

    &:focus {
      outline: none;
    }
  }

  .checkMark {
    position: relative;
    fill: #c9c9c9;
    width: 20px;
    height: 20px;
    right: 40px;
    top: 5px;
  }

  .eyeMark {
    position: relative;
    fill: #8a8a8a;
    width: 20px;
    height: 20px;
    right: 40px;
    top: 5px;
    cursor: pointer;
  }
`;

export default Input;
