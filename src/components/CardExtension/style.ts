import styled from "styled-components";

interface CardExtenProp {
  theme?: "dark" | "light";
}

export const Container = styled.div<CardExtenProp>`
  background: ${({ theme }) =>
    theme === "dark" ? "var( --Neutral-800)" : "var( --Neutral-0)"};
  width: 25rem;
  height: 12rem;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  @media (max-width: 480px) {
    width: 21rem;
    height: 10rem;
  }
`;

export const HeaderText = styled.div`
  display: flex;

  div {
    margin-top: 1.3rem;
  }
`;

export const Logo = styled.img`
  width: 3em;
  height: 4em;
  margin: 0.8rem;
`;

export const Title = styled.h3<CardExtenProp>`
  color: ${({ theme }) =>
    theme === "dark" ? "var(--Neutral-0)" : "var( --Neutral-800)"};
`;

export const Text = styled.p<CardExtenProp>`
  margin-top: 0.3rem;
  color: ${({ theme }) =>
    theme === "dark" ? "var(--Neutral-0)" : "var( --Neutral-700)"};
  max-width: 20rem;
  width: auto;

  word-break: break-word;
  @media (max-width: 480px) {
    margin: 0;
  }
`;

export const ButtonRemove = styled.button<CardExtenProp>`
  border: 1px solid
    ${({ theme }) =>
      theme === "dark" ? "var(--Neutral-0)" : "var(--Neutral-800)"};
  outline: none;
  border-radius: 1rem;
  margin-left: 0.9rem;
  font-size: 0.9rem;
  background-color: transparent;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) =>
    theme === "dark" ? "var(--Neutral-0)" : "var( --Neutral-800)"};

  &:hover {
    border: 1px solid var(--red-500);
    cursor: pointer;
    background-color: var(--red-500);
    color: ${({ theme }) =>
      theme === "dark" ? "var( --Neutral-800)" : "var(--Neutral-0)"};
  }

  @media (max-width: 480px) {
    margin-left: 1rem;
  }
`;

export const ControlButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 2.5rem;
  @media (max-width: 480px) {
    margin-top: 1.5rem;
  }
`;
