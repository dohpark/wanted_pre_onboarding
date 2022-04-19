import styled from "styled-components";

const Tab = () => {
  return (
    <Container>
      <Input type="radio" id="radio1" name="tab" defaultChecked />
      <Label htmlFor="radio1">감자</Label>

      <Input type="radio" id="radio2" name="tab" />
      <Label htmlFor="radio2">고구마</Label>

      <Input type="radio" id="radio3" name="tab" />
      <Label htmlFor="radio3">카레라이스</Label>

      <Slider id="slider" />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 420px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;

  #radio1:checked ~ #slider {
    transform: translateX(0px);
  }

  #radio2:checked ~ #slider {
    transform: translateX(140px);
  }

  #radio3:checked ~ #slider {
    transform: translateX(280px);
  }
`;

const Label = styled.label`
  width: 140px;
  font-weight: bold;
  text-align: center;
  color: #b5b5b5;
  padding: 20px 0px;
  border-bottom: 3px solid #b5b5b5;
  cursor: pointer;
`;

const Input = styled.input`
  display: none;

  &:checked + label {
    color: black;
  }
`;

const Slider = styled.div`
  background-color: transparent;
  position: absolute;
  bottom: 0px;
  border-bottom: 3px solid #55a35c;
  transition: transform 0.5s;
  width: 140px;
`;

export default Tab;
