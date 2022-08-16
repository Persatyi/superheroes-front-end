import Container from "components/Container/Container";
import s from "./Header.module.scss";
import Button from "components/Button";

const Header = ({ onClick }) => {
  return (
    <header className={s.header}>
      <Container>
        <h1 className={s.mainTitle}>Welcome to our superhero league</h1>
        <h2>If you are not in our database you are not a superhero</h2>
        <Button
          className={s.addCharacter}
          text="Register new character"
          onClick={onClick}
        />
      </Container>
    </header>
  );
};

export default Header;
