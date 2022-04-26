import { useRef, useState } from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../images/search.svg";
import { ReactComponent as DropdownIcon } from "../images/dropdown.svg";

const Dropdown = () => {
  const array = [
    "a",
    "b",
    "c",
    "d",
    "ac",
    "ae",
    "bc",
    "ce",
    "ed",
    "ee",
    "sz",
    "es",
  ];

  const [data, setData] = useState(array);
  const [open, setOpen] = useState(true);
  const [currentValue, setCurrentValue] = useState("All Symbols");

  const content = useRef();
  const dropdownInput = useRef();

  const onKeyUpHandler = (e) => {
    const key = e.target.value;
    setData(array.filter((v) => v.includes(key)));
  };

  const onClickHandler = (e) => {
    setCurrentValue(e.target.innerHTML);
    dropdownInput.current.value = "";
    setData(array);
    content.current.style.display = "none";
    setOpen(true);
  };

  const onClickContentHandler = (e) => {
    setOpen(!open);

    if (open) {
      content.current.style.display = "block";
    } else {
      content.current.style.display = "none";
    }
  };

  return (
    <Container>
      <DropdownDisplay>
        <CurrentValue onClick={onClickContentHandler}>
          {currentValue}
        </CurrentValue>
        <DropdownIcon className="dropdownIcon" />
      </DropdownDisplay>
      <DropdownContent ref={content}>
        <InputWrapper>
          <input
            type="text"
            placeholder="Search Symbol"
            onKeyUp={onKeyUpHandler}
            ref={dropdownInput}
          />
          <SearchIcon className="searchIcon" />
        </InputWrapper>
        <ContentList>
          <li onClick={onClickHandler}>All Symbols</li>
          {data.map((value, index) => {
            return (
              <li key={`${value}${index}`} onClick={onClickHandler}>
                {value}
              </li>
            );
          })}
        </ContentList>
      </DropdownContent>
    </Container>
  );
};

const Container = styled.div``;

const DropdownDisplay = styled.div`
  position: relative;

  .dropdownIcon {
    position: absolute;
    top: 11px;
    width: 10px;
    left: 190px;
  }
`;

const CurrentValue = styled.div`
  width: 200px;
  padding: 10px;
  border: 2px solid gray;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
  margin-bottom: 5px;
`;

const DropdownContent = styled.div`
  display: none;
`;

const InputWrapper = styled.div`
  position: relative;

  .searchIcon {
    position: absolute;
    left: 18px;
    top: 9px;
    width: 14px;
    fill: #b5b5b5;
  }

  input {
    width: 180px;
    font-size: 15px;
    padding: 10px 0 10px 40px;
    border: 2px solid gray;

    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    &:focus {
      outline: none;
    }
  }
`;

const ContentList = styled.ul`
  margin: 0;
  margin-top: -2px;
  padding: 0;
  width: 220px;
  max-height: 200px;
  overflow-y: scroll;

  border: 2px solid gray;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  li {
    list-style: none;
    padding: 5px;
    padding-left: 25px;
    font-size: 15px;
    cursor: pointer;

    &:hover {
      background-color: #f5f5f5;
    }
  }
`;

export default Dropdown;
