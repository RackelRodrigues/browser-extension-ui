import React from "react";
import {
  Container,
  Title,
  Text,
  Logo,
  ButtonRemove,
  HeaderText,
  ControlButtons,
} from "./style";
import ToggleSwitch from "../ToggleSwitch";

interface Props {
  title?: string;
  description?: string;
  link?: string;
  theme?: string;
  onClick?: () => void;
}

const CardExtension: React.FC<Props> = ({
  title,
  description,
  link,
  theme,
  onClick,
}) => {
  return (
    <>
      <Container theme={theme}>
        <HeaderText>
          <Logo theme={theme} src={link} alt="logo" />
          <div>
            <Title theme={theme}>{title}</Title>
            <Text theme={theme}>{description}</Text>
          </div>
        </HeaderText>
        <ControlButtons>
          <ButtonRemove theme={theme} onClick={() => onClick?.()}>
            remove
          </ButtonRemove>
          <ToggleSwitch />
        </ControlButtons>
      </Container>
    </>
  );
};

export default CardExtension;
