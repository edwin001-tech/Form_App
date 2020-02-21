import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
`;

export const Logo = styled.img`
  width: 300px;
`;

export const Code = styled.pre`
  width: 100%;
  background: #eee;
  font-size: 12px;
  padding: 5px;
  white-space: pre-wrap;
`;

export const Field = styled.article`
  margin-bottom: 15px;

  select {
    width: 100%;
    height: 25px;
  }

  input[type="radio"] {
    width: auto;
    margin: 5px 10px 5px 0;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    outline: none;
    border: 1px solid #ddd;

    &.formcat-error {
      border-color: red;
    }
  }

  textarea {
    display: block;
  }
`;

export const Buttons = styled.div`
  margin: 10px 0;

  button {
    padding: 10px 20px;
    border-radius: 5px;
    outline: none;
    margin-right: 15px;
  }
`;

export const Populate = styled.button`
  background-color: green;
  color: #fff;
`;
