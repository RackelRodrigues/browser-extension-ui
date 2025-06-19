import styled from "styled-components";

interface BackgroundProps {
  theme: "dark" | "light";
}

export const Background = styled.div<BackgroundProps>`
  width: 100%;
  min-height: 100vh;
  padding: 2rem 0;
  background: ${({ theme }) =>
    theme === "dark" ? "var(--dark-gradient)" : "var(--light-gradient)"};

  @media (max-width: 609px) {
    width: 100%;
    padding: 2rem 0;
  }
`;

export const Main = styled.div`
  width: 100%;
  max-width: 78rem;
  display: grid;
  place-content: center;
  justify-self: center;

  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media screen and (min-width: 610px) and (max-width: 1023px) {
    padding: 0 1rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 609px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`;

export const TitlePage = styled.h2<BackgroundProps>`
  font-family: "Noto Sans", sans-serif;
  color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
  @media (max-width: 480px) {
    font-size: 2rem;
    margin: 1rem;
  }
`;

export const TagButtons = styled.button<BackgroundProps>`
  width: auto;
  padding: 0.5rem 1rem;
  height: auto;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  border-radius: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  background-color: ${({ theme }) =>
    theme === "dark" ? "var(--Neutral-800)" : "var(--Neutral-0)"};
  cursor: pointer;
  color: ${({ theme }) =>
    theme === "dark" ? "var(  --Neutral-0)" : "var(--Neutral-800)"};

  &:hover {
    background-color: var(--red-500);
  }

  &:active {
    background-color: var(--red-600);
  }
  @media (max-width: 480px) {
    border-radius: 1rem;
    font-size: 0.875rem;
    margin: 0 0.2rem;
  }
`;

export const FilterControl = styled.div<BackgroundProps>`
  display: flex;
  justify-content: space-between;
  padding: 3rem 0;
  width: 100%;
  max-width: 77rem;
  margin: 0 auto;
  > div {
    display: flex;
    gap: 0.5rem;
  }

  @media screen and (min-width: 610px) and (max-width: 1023px) {
    padding: 2rem 2.6rem;
  }

  @media (max-width: 609px) {
    display: block;
    margin: 0 auto;
    padding: 0;
    text-align: center;

    > div {
      gap: 0;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
