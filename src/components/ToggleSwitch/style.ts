import styled from "styled-components";
interface WrapperProps {
  $checked: boolean;
}
export const ToggleSwitchWrapper = styled.label<WrapperProps>`
  background: ${({ $checked }) =>
    $checked ? "var( --red-500)" : "var(--Neutral-300)"};
  width: 2.5rem;
  height: 1.3rem;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  position: relative;
  transition: 0.3s;
  margin-right: 1rem;

  input:checked + span {
    left: 50%;
  }
`;
export const Input = styled.input`
  height: 100%;
  width: 100%;
  opacity: 0;
`;
export const Span = styled.span`
  position: absolute;
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;
  background-color: #fff;
  left: 0.2rem;
  box-shadow: 2px 2px 4px gray;
  cursor: pointer;
  transition: all 0.3s ease;
`;
