import styled from "styled-components";

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.width ? props.width : 150)}px;
  height: ${(props) => (props.height ? props.height : 32)}px;
  padding: ${(props) => (props.padding ? props.padding : 8)}px;
  border: 1px solid ${(props) => (props.border ? props.border : "none")};
  margin: ${(props) => (props.margin ? props.margin : 0)}px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "none"};
  color: ${(props) => (props.color ? props.color : "black")};
  transition: 0.3s;
  text-transform: uppercase;
  border-radius: .5rem;

  &:hover {
    cursor: pointer;
    background-color: white;
    color: #fe2e2e;
  }
`;

export const Input = styled.input`
  width: ${(props) => (props.width ? props.width : 300)}px;
  height: ${(props) => (props.height ? props.height : 36)}px;
  padding: ${(props) => (props.padding ? props.padding : 8)}px;
  border: 1px solid ${(props) => (props.border ? props.border : "black")};
  margin: ${(props) => (props.margin ? props.margin : 0)}px;
  outline: none;
`;
