import styled from "styled-components";

const Toggle = () => {
  return (
    <Container>
      <Input className="toggle" type="checkbox" />
      <Slider className="slider" />
      <Item className="default">기본</Item>
      <Item className="specific">상세</Item>
    </Container>
  );
};

const Container = styled.label`
  width: 300px;
  margin: 10px 0;
  display: flex;
  position: relative;
  justify-content: space-between;
  border-radius: 15px;
  background-color: #e6e6e6;
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;

  &:checked ~ .slider {
    transform: translateX(150px);
  }

  &:not(:checked) ~ .default {
    color: black;
  }
  &:checked ~ .default {
    color: #666666;
  }

  &:not(:checked) ~ .specific {
    color: #666666;
  }
  &:checked ~ .specific {
    color: black;
  }
`;

const Item = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px;
  margin: 3px;
  font-weight: 800;
  font-size: 16px;
  color: #666666;
  cursor: pointer;
  z-index: 1;
`;

const Slider = styled.div`
  width: calc((100% / 2) - 26px);
  position: absolute;
  padding: 10px;
  height: 20px;
  margin: 3px;
  background-color: white;
  border-radius: 15px;
  transition: 400ms linear;
  z-index: 0;
`;

export default Toggle;
