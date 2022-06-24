import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "./theme";
export const GlobalInput = styled.input`
  height: 1.5rem;
  padding: 0.3rem;
  margin: 0.4rem;
  border-radius: 0.2rem;
  border: 0.5px solid gray;
  &:focus {
    border: 1px solid red;
  }
`;

export const GlobalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  text-align: center;
`;

export const GlobalButton = styled.button`
  height: 2.5rem;
  padding: 0.3rem;
  margin: 0.3rem;
  border-radius: 0.2rem;
  border: none;
`;

export const Button = styled.button`
  border: none;
  border-radius: 15rem;
  background-color: ${props => props.theme.colors.main};
  color: ${props => props.theme.colors.text};

  @media ${theme.device.mobile} {
    touch-action: auto;
    padding: 0.6rem 1rem;
    margin: 0 0.5rem;
    font-size: 0.9rem;
  }

  @media ${theme.device.desktop} {
    padding: 0.77rem 3.2rem;
    margin: 0 1.4rem;
    cursor: pointer;
  }
`;

export const StyledLink = styled(Link)`
  border-radius: 15rem;
  border: none;
  touch-action: auto;
  /* background-color: rgb(253, 245, 232); */
  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.text};

  text-decoration: none;
  text-align: center;

  @media ${theme.device.mobile} {
    width: 70%;
    margin: 0.4rem auto;
  }
  @media ${theme.device.desktop} {
    padding: 0.7rem 3.2rem;
    margin: 0 1.4rem;
    cursor: pointer;
  }
`;
