import styled from "styled-components";

import Input from "../../components/input";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 600px;

    margin: 10px 0;

    input {
      width: 100%;
      max-width: 600px;
      margin: 15px auto;
    }

    label {
      font-size: 25px;
      margin-left: 10px;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: 5% auto;
    height: unset;
  }
`;

export const TextArea = styled(Input)`
  min-height: 160px;
`;

export const Select = styled.select`
  height: 80px;
  width: 100%;
  max-width: 380px;
  border-radius: 20px;
  border: 1px solid;
  padding: 0 30px;
  font-size: 25px;
  margin: 15px auto;

  @media screen and (max-width: 768px) {
      height: 60px;
      padding: 0 22px;
      font-size: 20px;
      margin: 10px auto;
  }
`;
