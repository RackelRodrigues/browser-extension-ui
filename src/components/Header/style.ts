import styled from "styled-components";

interface HeaderProps {
  theme?: "dark" | "light";
}

export const Container = styled.div<HeaderProps>`
  background: ${({ theme }) =>
    theme === "dark" ? "var(--Neutral-800)" : "var( --Neutral-0)"};
  width: 100%;
  max-width: 77rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  margin: 0 auto;
  @media (max-width: 770px) {
    max-width: 46rem;
    width: 100%;
    height: 3rem;
    border-radius: 0.5rem;
  }

  @media (max-width: 480px) {
    max-width: 21rem;
    width: 100%;
    height: 2.5rem;
    border-radius: 0.5rem;
  }
`;

export const Logo = styled.img<HeaderProps>`
  width: 100px;
  height: 100px;
  margin-left: 0.5rem;
`;

export const ButtonTheme = styled.button<HeaderProps>`
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) =>
    theme === "dark" ? "var( --Neutral-0)" : "var( --Neutral-800)"};
  background: ${({ theme }) =>
    theme === "dark" ? "var(--Neutral-600)" : "var( --Neutral-0)"};

  @media (max-width: 480px) {
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 0.3rem;

    > svg {
      width: 13px;
    }
  }
`;
