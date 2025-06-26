import { Container, ButtonTheme, Logo } from "./style";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

interface Props {
  theme?: "dark" | "light";
  onClick?: () => void;
}

const Header: React.FC<Props> = ({ onClick, theme }) => {
  const logoSrc =
    theme === "dark" ? "images/logo-white.svg" : "images/logo.svg";
  return (
    <Container theme={theme}>
      <Logo src={logoSrc} alt="Foto da logo" />
      <ButtonTheme onClick={() => onClick?.()} theme={theme}>
        {theme === "dark" ? (
          <IoSunnyOutline size={20} />
        ) : (
          <IoMoonOutline size={20} />
        )}
      </ButtonTheme>
    </Container>
  );
};

export default Header;
